import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import Action from '~/components/ActionPopUp';
import OrderModal from '~/components/Modal/OrderModal';
import PhotoName from '~/components/PhotoName';
import Status from '~/components/Status';
import api from '~/services/api';
import history from '~/services/history';
import { colors, statusColors } from '~/styles/colors';

import { Container, ActionContainer } from './styles';

export default function OrderItem({ data, updateOrders }) {
  async function handleDelete() {
    const confirm = window.confirm(
      'Você tem certeza que deseja deletetar a encomenda?'
    );

    if (!confirm) {
      toast.error('Encomenda não deletada!');
    }

    try {
      await api.delete(`/orders/${data.id}`);

      updateOrders();
      toast.success('Encomenda apagada com sucesso!');
    } catch (error) {
      toast.error('Essa encomenda não pode ser deletada!');
    }
  }

  return (
    <Container>
      <small>#{data.id}</small>
      <small>{data.recipient.name}</small>

      {/* avatar deliveryman */}

      <small>
        <div>
          {data.deliveryman.avatar ? (
            <img src={data.deliveryman.avatar.url} alt="avatar" />
          ) : (
            <PhotoName name={data.deliveryman.name} />
          )}
        </div>
        {data.deliveryman.name}
      </small>
      <small>{data.recipient.city}</small>
      <small>{data.recipient.state}</small>

      <Status
        text={data.status}
        color={statusColors[data.status].color}
        background={statusColors[data.status].bg}
      />
      <Action>
        <ActionContainer>
          <div>
            <OrderModal data={data} />
          </div>
          <div>
            <button
              type="button"
              onClick={() => history.push(`/orders/${data.id}/edit`)}
            >
              <MdEdit color={colors.info} size={15} />
              <span>Editar</span>
            </button>
          </div>
          <div>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever
                color={colors.danger}
                size={15}
                onClick={handleDelete}
              />
              <span>Excluir</span>
            </button>
          </div>
        </ActionContainer>
      </Action>
    </Container>
  );
}

OrderItem.propTypes = {
  updateOrders: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    deliveryman: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    recipient: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

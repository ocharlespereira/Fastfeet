import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import Action from '~/components/ActionPopUp';
import PhotoName from '~/components/PhotoName';
import api from '~/services/api';
import history from '~/services/history';
import { colors } from '~/styles/colors';

import { Container, ActionContainer } from './styles';

export default function DeliverymanItem({ data, updateDeliveryman }) {
  async function handleDelete() {
    const confirm = window.confirm('Você deseja realmente excluir o item?');

    // verifica se a validação é true
    if (!confirm) {
      toast.error('Entregador(a) não foi apagado(a)!');
      return;
    }

    try {
      await api.delete(`/deliverymans/${data.id}`);
      // chama função update
      updateDeliveryman();
      toast.success('Entregador apagado com sucesso!');
    } catch (error) {
      toast.error('Esste entregador possui encomendas pendentes.');
    }
  }

  return (
    <Container>
      <small>#{data.id}</small>
      {/* Verificar este erro de autenticação aqui */}
      {data.avatar ? (<img src={data?.avatar?.id} alt="AvatarUrl" />
      ) : (
        <PhotoName name={data.name} />
      )}   

      <small>{data.name}</small>
      <small>{data.email}</small>
      <Action>
        <ActionContainer>
          <div>
            <button
              type="button"
              onClick={() => history.push(`/deliveryman/${data.id}/edit`)}
            >
              <MdEdit color={colors.info} size={15} />
              <span>Editar</span>
            </button>
          </div>

          <div>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever color={colors.danger} size={15} />
              <span>Excluir</span>
            </button>
          </div>
        </ActionContainer>
      </Action>
    </Container>
  );
}

DeliverymanItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  updateDeliveryman: PropTypes.func.isRequired,
};

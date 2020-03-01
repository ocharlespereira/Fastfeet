import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import Action from '~/components/ActionPopUp';
import OrderModal from '~/components/Modal';
import Status from '~/components/Status';
import api from '~/services/api';
import history from '~/services/history';
import { colors, statusColors } from '~/styles/colors';

import { Container, ActionContainer } from './styles';

export default function OrderItem({ data, updateOrders }) {
  return (
    <Container>
      <small>#1</small>
      <small>Janaína Barbosa</small>
      <small>Entrega Mercado Livre</small>
      <small>Uberlandia</small>
      <small>MG</small>

      <Status text="29/02/2020" color="#fff" background="#333" />
      <Action>
        <ActionContainer>
          <div>
            <OrderModal data="29/02/2020" />
          </div>
          <div>
            <button
              type="button"
              onClick={() => history.push(`/orders/12/edit`)}
            >
              <MdEdit color={colors.info} size={15} />
              <span>Editar</span>
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => history.push(`/orders/12/edit`)}
            >
              <MdDeleteForever color={colors.danger} size={15} />
              <span>Excluir</span>
            </button>
          </div>
        </ActionContainer>
      </Action>
    </Container>
  );
}

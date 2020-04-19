import React from 'react';

import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import { Container } from './styles';

export default function OrderModal({ data }) {
  return (
    <Modal>
      <Container>
        <div>
          <strong>Informações da encomenda</strong>
          <small>
            {data.recipient.street}, {data.recipient.number}
          </small>
          <small>
            {data.recipient.city} - {data.recipient.state}
          </small>
          <small>{data.recipient.zip_code}</small>
        </div>
        {data.start_date ? (
          <div>
            <strong>Datas</strong>
            <div>
              <span>Retirada: </span>
              <small>{format(parseISO(data.start_date), 'dd/MM/yyyy')}</small>
            </div>
            {data.end_date ? (
              <div>
                <span>Entrega: </span>
                <small>{format(parseISO(data.end_date), 'dd/MM/yyyy')}</small>
              </div>
            ) : null}
          </div>
        ) : null}
        {data.signature ? (
          <div style={{ paddingBottom: '25px' }}>
            <strong>Assinatura do destinatário</strong>
            <small>{data.signature.url}</small>
            <img src={data.signature.url} alt="signature" />
          </div>
        ) : null}
      </Container>
    </Modal>
  );
}

OrderModal.propTypes = {
  data: PropTypes.shape({
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      zip_code: PropTypes.string,
    }),
    status: PropTypes.string,
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

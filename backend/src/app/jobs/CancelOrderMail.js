import Mail from '../../lib/Mail';

class CancelOrderMail {
  get key() {
    return 'CancelOrderMail';
  }

  async handle({ data }) {
    const {
      delivery,
      orderCancel,
      recipientName,
      addressRecipient,
      formattedDate,
    } = data;

    await Mail.sendMail({
      to: `${delivery.name} <${delivery.email}>`,
      subject: `Entrega Cancelada!!!`,
      template: 'cancelordermail',
      context: {
        namehbs: delivery.name,
        recipienthbs: recipientName,
        addresshbs: addressRecipient,
        orderhbs: orderCancel.id,
        datehbs: formattedDate,
        producthbs: orderCancel.product,
      },
    });
  }
}

export default new CancelOrderMail();

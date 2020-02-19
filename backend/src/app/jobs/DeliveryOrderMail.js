import Mail from '../../lib/Mail';

class DeliveryOrderMail {
  get key() {
    return 'DeliveryOrderMail';
  }

  async handle({ data }) {
    const {
      delivery,
      orderDate,
      formattedDate,
      recipient,
      addressRecipient,
    } = data;

    await Mail.sendMail({
      to: `${delivery.name} <${delivery.email}>`,
      subject: `Novo Cadastro de Entrega`,
      template: 'deliveryordermail',
      context: {
        namehbs: delivery.name,
        recipienthbs: recipient.name,
        addresshbs: addressRecipient,
        orderhbs: orderDate.id,
        datehbs: formattedDate,
        producthbs: orderDate.product,
      },
    });
  }
}
export default new DeliveryOrderMail();

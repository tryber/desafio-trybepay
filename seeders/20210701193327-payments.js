module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('payments', [
      {
        id: 1,
        payment_method: 'vanillapay',
        value: '100.90',
        currency: 'BRL',
        status: 'CRIADO',
        data: new Date('2020-09-13T00:00:00.000Z'),
        description: 'compra realizada',
      },
      {
        id: 2,
        payment_method: 'vanillapay',
        value: '100.90',
        currency: 'BRL',
        status: 'CANCELADO',
        data: new Date('2020-09-13T00:00:00.000Z'),
        description: 'compra realizada',
      },
      {
        id: 3,
        payment_method: 'vanillapay',
        value: '98.70',
        currency: 'BRL',
        status: 'CANCELADO',
        data: new Date('2020-09-16T00:00:00.000Z'),
        description: 'compra realizada',
      },
      {
        id: 4,
        payment_method: 'trybepay',
        value: '1000.00',
        currency: 'US$',
        status: 'CANCELADO',
        data: new Date('2021-06-29T00:00:00.000Z'),
        description: 'compra realizada',
      },
      {
        id: 5,
        payment_method: 'trybepay',
        value: '1000.00',
        currency: 'US$',
        status: 'CANCELADO',
        data: new Date('2021-06-29T00:00:00.000Z'),
        description: 'compra realizada',
      },
      {
        id: 6,
        payment_method: 'trybepay',
        value: '300.00',
        currency: 'US$',
        status: 'CRIADO',
        data: new Date('2021-06-30T00:00:00.000Z'),
        description: 'compra realizada',
      }
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('payments', null, {});
  },
};

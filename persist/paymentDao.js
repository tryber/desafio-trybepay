const connectionFactory = require('./connectionFactory');

const create = async (newPayment) => {
  const keys = Object.keys(newPayment);
  const fields = keys.join(', ');
  const placeholders = [...'?'.repeat(keys.length)].join(',');
  const SQL = `INSERT INTO payments (${fields}) VALUES (${placeholders})`;

  const connection = await connectionFactory();
  const [{ insertId }] = await connection.query(SQL, Object.values(newPayment));
  return { id: insertId, ...newPayment };
};

const findAll = async () => {
  const SQL = 'SELECT * FROM payments';
  const connection = await connectionFactory();
  const [result] = await connection.query(SQL);
  return result;
};

const findById = async (id, callback) => {
  const SQL = 'SELECT * FROM payments WHERE id = ?';
  const connection = await connectionFactory();
  const [[result]] = await connection.query(SQL, [id], callback);
  return result;
};

const update = async (paymentId, paymentData) => {
  const keys = Object.keys(paymentData);
  const fields = keys.map((field) => `${field} = ?`).join(', ');
  const SQL = `UPDATE payments SET ${fields} WHERE id = ?`;
  
  const connection = await connectionFactory();
  const result = connection.query(SQL, [...Object.values(paymentData), paymentId]);
  return result;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
};

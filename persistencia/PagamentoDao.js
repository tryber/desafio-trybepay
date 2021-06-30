const connectionFactory = require('./connectionFactory');


const salva = function(pagamento,callback) {
    connectionFactory().query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

const lista = function(callback) {
    connectionFactory().query('select * from pagamentos',callback);
}

const buscaPorId = function (id,callback) {
    connectionFactory().query("select * from pagamentos where id = ?",[id],callback);
}

const atualiza = function(pagamento,callback) {
    connectionFactory().query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback);
}
module.exports = {
    salva, lista, buscaPorId, atualiza
};
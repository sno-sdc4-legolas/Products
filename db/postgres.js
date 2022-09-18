const { Pool } = require('pg');

const pool = new Pool({
  user: 'mfitz6022',
  host: 'localhost',
  database: 'products',
  password: '',
  port: 8080,
})

module.exports = {
  query: (string, params) => pool.query(string, params),
}

// pool.connect()
// .then(() => {
//   console.log('connected to localhost listening on port 8080')
// })
// .catch((e) => {
//   console.error(e)
// })

// pool.query('SELECT * FROM product_list')
// .then((res) => {
//   console.log(res.rows[0])
// })
// .catch((e) => {
//   console.error(e);
// })
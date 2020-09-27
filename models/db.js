const pool = require('./pool')
const bcrypt = require('bcrypt')

db = {}
db.makeQuery = async function ( query, vars_arr, check_fn ) {
  try {
    const { rows } = await pool.query(query, vars_arr)
    const res = rows[0]
    if ( typeof check_fn === 'function' ) return await check_fn(res)
    else return false
  } catch (err) {
    return false
  }
}

module.exports = db
const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'socialnetwork',
  user: 'yashadhara',
  password: '',
});

pool.query(`
    UPDATE posts 
    SET loc = POINT(lng, lat)
    WHERE loc is NULL;
`).then(() => {
    console.log("updated")
    pool.end()
}).catch((err) => console.log(err.message))
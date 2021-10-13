const db = require('../db');

async function getCars() {
  const { rows } = await db.query(
    'SELECT cars.id,title,image,status,price,miles,year_of_make,description,first_name,last_name FROM cars join owner o on cars.owner = o.id',
  );
  return {
    code: 200,
    data: rows,
  };
}

async function changeStatusCar(id, status) {
  const { rows } = await db.query('UPDATE cars SET status = $1 where id= $2 returning *', [
    status,
    id,
  ]);
  return {
    code: 200,
    data: rows,
  };
}

async function deleteCar(id) {
  await db.query('DELETE from cars where id= $1', [id]);
  return getCars();
}

async function addCar(data) {
  const cars = await getCars();
  const id = Math.max(...cars.data.map((car) => car.id)) + 1;
  const { rows } = await db.query(
    'INSERT INTO cars (id,title ,image ,status ,price ,miles ,year_of_make ,description ,owner) VALUES($1, $2, $3, $4,$5,$6,$7,$8,$9) returning *',
    [
      id,
      data.title,
      data.image,
      data.status,
      data.price,
      data.miles,
      data.year_of_make,
      data.description,
      data.owner,
    ],
  );
  return {
    code: 200,
    data: rows,
  };
}

module.exports = { getCars, changeStatusCar, deleteCar, addCar };

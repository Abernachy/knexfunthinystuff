
exports.up = function(knex) {
  return knex.schema.createTable('movies', table => {
    table.increments('id'); // adds an auto incrementing id column
    table.string('title').notNullable();
    table.string('genre');
    table.date('release_date');
    table.timestamps(true,true)  //adds create_at and updated_at fields
  })
};

exports.down = function(knex) {
  //We have an emergency destroy table button just in case
  return knex.schema.dropTableIfExists('movies')
};


// After inputting our migrations table data we would run npx knex migrate:latest

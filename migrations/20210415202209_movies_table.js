
exports.up = function(knex) {
  return knex.schema.createTable('character', table => {
    table.increments('id')
    table.string('name')
    table.string('class')
    table.integer('attack_power')
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('character')
};

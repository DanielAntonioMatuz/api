'use strict'

/*
|--------------------------------------------------------------------------
| ExperienciaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ExperienciaSeeder {
  async run () {
    await Factory.model ('App/Models/Experiencia').createMany(1) 
  }
}

module.exports = ExperienciaSeeder

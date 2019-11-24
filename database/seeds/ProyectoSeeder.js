'use strict'

/*
|--------------------------------------------------------------------------
| ProyectoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProyectoSeeder {
  async run () {
    await Factory.model ('App/Models/Proyecto').createMany(1) 
  }
}

module.exports = ProyectoSeeder

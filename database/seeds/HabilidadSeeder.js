'use strict'

/*
|--------------------------------------------------------------------------
| HabilidadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class HabilidadSeeder {
  async run () {
    await Factory.model ('App/Models/Habilidad').createMany(1) 
  }
}

module.exports = HabilidadSeeder

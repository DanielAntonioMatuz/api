'use strict'

/*
|--------------------------------------------------------------------------
| HeaderHabilidadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class HeaderHabilidadSeeder {
  async run () {
    await Factory.model ('App/Models/HeaderHabilidad').createMany(1) 
  }
}

module.exports = HeaderHabilidadSeeder

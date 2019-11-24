'use strict'

/*
|--------------------------------------------------------------------------
| HabilidadTituloSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class HabilidadTituloSeeder {
  async run () {
    await Factory.model ('App/Models/HabilidadTitulo').createMany(1) 
  }
}

module.exports = HabilidadTituloSeeder

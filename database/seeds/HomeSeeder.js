'use strict'

/*
|--------------------------------------------------------------------------
| HomeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class HomeSeeder {
  async run () {
    await Factory.model ('App/Models/Home').createMany(1) 
  }
}

module.exports = HomeSeeder

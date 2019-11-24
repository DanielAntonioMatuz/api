'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

 Factory.blueprint('App/Models/User', (faker) => {
   return {
    username: faker.username(),
    password: faker.password()
   }
 })

 Factory.blueprint('App/Models/proyecto', (faker) => {
    return {
     titulo: faker.titulo(),
     subtitulo: faker.subtitulo(),
     tag: faker.tag(),
     nombre: faker.nombre(),
     descripcion: faker.descripcion()
    }
  })

  Factory.blueprint('App/Models/home', (faker) => {
    return {
     titulo: faker.titulo(),
     tags: faker.tags(),
     descripcion: faker.descripcion()
    }
  })

  Factory.blueprint('App/Models/HeaderHabilidad', (faker) => {
    return {
     titulo: faker.titulo(),
     subtitulo: faker.subtitulo()
    }
  })

  Factory.blueprint('App/Models/habilidad', (faker) => {
    return {
     icono: faker.icono(),
     titulo: faker.titulo(),
     descripcion: faker.descripcion(),
     habilidad1: faker.habilidad1(),
     porcentaje1: faker.porcentaje1(),
     habilidad2: faker.habilidad2(),
     porcentaje2: faker.porcentaje2(),
     habilidad3: faker.habilidad3(),
     porcentaje3: faker.porcentaje3(),
     habilidad4: faker.habilidad4(),
     porcentaje4: faker.porcentaje4()
    }
  })

  Factory.blueprint('App/Models/habilidadTitulo', (faker) => {
    return {
     icono: faker.icono(),
     titulo: faker.titulo(),
     descripcion: faker.descripcion()
    }
  })

  Factory.blueprint('App/Models/Experiencia', (faker) => {
    return {
     titulo: faker.titulo(),
     subtitulo: faker.subtitulo(),
     dominio1: faker.dominio1(),
     dominio2: faker.dominio2(),
     dominio3: faker.dominio3()
    }
  })

  Factory.blueprint('App/Models/Educacion', (faker) => {
    return {
     titulo: faker.titulo(),
     subtitulo: faker.subtitulo(),
     escuela1: faker.escuela1(),
     escuela2: faker.escuela2(),
     escuela3: faker.escuela3()
    }
  })

  Factory.blueprint('App/Models/Detalle', (faker) => {
    return {
     titulo: faker.titulo(),
     descripcion: faker.descripcion(),
     icono: faker.icono()
    }
  })

 

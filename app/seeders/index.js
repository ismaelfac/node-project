require('dotenv').config();
const { dbConnect } = require('../../config/mongo');
const looger = require('../helpers/looger');
dbConnect();

/**archivos seeders */
const MenuSeeder = require('./MenuSeeder');
const RoleSeeder = require('./RolesSeeder');
const MenuRolesSeeder = require('./MenuRolesSeeder');
const PeopleSeeder = require('./PeopleSeeder');
const UserSeeder = require('./UserSeeder');
const TypeActorSeeder = require('./TypeActorSeeder');

//**Cargar del Sistema */
loadSeeder = async () => {
    looger.info('Cargando Seeders...')
    //await MenuSeeder.createMenuSystem();
    //await RoleSeeder.createRoleSystem();
    //await MenuRolesSeeder.createMenuRolesSystem();
    //await PeopleSeeder.createPeopleSystem();
    //await UserSeeder.createUserSystem();
    //await TypeActorSeeder.createTypeActorsSystem();
    looger.info('Inyeccion de Seeders finalizada')
}

loadSeeder();

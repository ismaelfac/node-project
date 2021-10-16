require('dotenv').config();
const { dbConnect } = require('../../config/mongo');
const looger = require('../helpers/looger');
dbConnect();

/**archivos seeders */
const MenuSeeder = require('./MenuSeeder');
const RoleSeeder = require('./RolesSeeder');
const PeopleSeeder = require('./PeopleSeeder');
const UserSeeder = require('./UserSeeder');

//**Cargar del Sistema */
loadSeeder = async () => {
    looger.info('Cargando Seeders...')
    //MenuSeeder.createMenuSystem();
    //RoleSeeder.createRoleSystem();
    //PeopleSeeder.createPeopleSystem();
    UserSeeder.createUserSystem();
    looger.info('Inyeccion de Seeders finalizada')
}

loadSeeder();

require('dotenv').config();
const { dbConnect } = require('../../config/mongo');

dbConnect();

/**archivos seeders */
const MenuSeeder = require('./MenuSeeder');
const RoleSeeder = require('./RolesSeeder');
const PeopleSeeder = require('./PeopleSeeder');
const UserSeeder = require('./UserSeeder');

//**Cargar del Sistema */
loadSeeder = async () => {
    MenuSeeder.createMenuSystem();
    RoleSeeder.createRoleSystem();
    PeopleSeeder.createPeopleSystem();
}

loadSeeder();

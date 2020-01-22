const mongoose = require('mongoose');
const fs = require('fs');

const options = {
  apiVersion: 'v1', // default
  endpoint: process.env.VAULT_ADDR, // default
  token: fs.readFileSync('/home/vault/.vault-token', 'utf8')
//   token: 's.djV8QBuoMYPV0AJfcCPyArV6'// optional client token; can be fetched after valid initialization of the server
}
const vault = require("node-vault")(options);
var mongo_user;
var mongo_password;
var dbhost = process.env.DBHOST;
var database = process.env.database;
// init vault server
vault.read('database/creds/vault-role').then((result) => {
    mongo_user = result.data.username;
    mongo_password = result.data.password;
    console.log(`${mongo_user}, ${mongo_password}`);

    mongoose.connect(`mongodb://${mongo_user}:${mongo_password}@${dbhost}:3717/${database}`, { useNewUrlParser: true, }, (err) => {
        if (!err) { console.log('MongoDb connection succeeded.') }
        else { console.log('Error in DB connection : ' + err) }
    });

});

require('./employee.models');
# Employee management system

This is sample application to showcase, how can we avoid hardcoding user credentials and secrets inside our source-code by using [Hashicorp-vault](https://www.hashicorp.com/products/vault/)

In this sample app, I have used MongoDB as backend storage to manage our employee records. 

I have used Node.js for backend and HTML/CSS for frontend development. In this setup, since we are getting credentials from vault secret manager via vault-api , check out package [node-vault](https://www.npmjs.com/package/node-vault)

Pre-requisite:

1. Setup vault [click here](https://www.vaultproject.io/docs/install/index.html)
2. Setup MongoDB, create employee Database and user account
3. Add DB user account, password in VAULT secret engine.
4. NPM and Node.js
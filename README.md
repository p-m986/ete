# UNDER WORK
### Will be finished by evening of 11th or early morning of 12th

## EndTermProject
> E-commerce project with a working backend for the end term submission


## @Scripts

#### All the scripts can be ran from the parent folder
```
   @server     npm run server
   @Desc       Initiates the server script that is `nodemon   server.js --ignore client` This starts the server at port 5000


   @client     npm run client
   @Desc       Starts the react project inside the client sub directory `cd client && npm start`

   
   @dev        npm run dev
   @Desc       Runs the development mode `concurrently \"npm run server\" \"npm run client\"`
```

## Properly Functional Routes


### Login.js (Login/Register)

>---------------------------------------------------->
```
   @route      POST /auth/test
   @Desc       Testing Route for the auth 
   @Access     Public
```
>---------------------------------------------------->
```
   @route      POST /auth/register
   @Desc       Register new user to the databse.
   
               Data to be provided in the request
               email           -> Required, Unique
               name            -> Required
               password        -> Required
               confirmpassword -> Required
               
   @Access     Public
```
>---------------------------------------------------->
```
   @route      POST /auth/login
   Desc        Validate the login details from the database and setup a validation token
          
               Data to be provided in the request
               email           -> Required, Unique
               password        -> Required

   Access      Public
```
>---------------------------------------------------->
```
   @route      POST /auth/current
   Desc        Test Route to test user authorization
   Access      Private
```
>---------------------------------------------------->

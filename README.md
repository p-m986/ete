# UNDER WORK

## EndTermProject
> E-commerce project with a working backend for the end term submission


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

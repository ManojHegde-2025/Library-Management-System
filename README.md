# Library-Management-System

This is the Library Managemnet API Backend for the management of users and books

# Routes and Endpoints

## /users
GET: Get all the list of users in the system
POST: Create/Register a new user

## /users{id}
GET: Get the user by their ID
PUT: Updating a user by their ID
DELETE: Deleting a user by their ID (chcek if the user still has a issued book) && {is there any fine or penalty to be collected}

## /users/subscription-details/{id}
GET: Get a user subscription details by their ID
    >> Date of subscription
    >> Valid till?
    >> Fine if any?

## /books
GET: Get all the books in the system
POST: Add a new book to the system

## /books/issued
GET: Get all the issued books

## /books/issued/withFine
GET: Get all the issued books with fine

### Subcription Types
    >> Basic (3 months)
    >> Standard (6 months)
    >> premium (12 months)

> > If a user missed the renewal date, then user should be collected with $100
> > If a user misses his subscription, then user should pay $100
> > If a user missed both, then user should be collected with $200

## commands:
npm init
npm i express
npm i nodemon --save-dev

npm run dev

npm i/ npm install -- To restore node_modules and package-lock.json (if deleted accidentally)

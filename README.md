# SEI-Project-3

Emma Price
Dragan Ceran
Sean Gray
Gabe Naughton
Mickey Pierce
Thierry Henry
Pierrre-Emerick Aubameyang
Lucas Moura


## Timeframe
7 days

## Technologies used
Frontend: HTML, SCSS, Bulma, React JS, Webpack, Axios, Babel,
Backend: Node.js, MongoDB, Mongoose, Bluebird,

## Installation

1. Clone or download the repo
2. Run 'yarn init' in CLI
3.

## Overview

## Introduction

## Database

Unlike our previous project, where we relied entirely on third-party APIs, here we were required to build our own database. We started by planning out our Vinyl model and then sketched out our user model. These formed the foundation of our project, upon which we would later embed information such as comments and a user wishlist.

After installing key dependencies (see technologies), we created an app.js page and set up a 'Hello world' message running on localhost:4000. Next we stored this port variable in an enviroment.js file in our config folder. Then, while half of the group worked on the user and vinyl models, the other half started creating the users, vinyls, and auth controllers. After this we exported routes from our controllers files into a routes file in our config folder.

Once we had completed the models we created a seeds folder, to make it easier to update the database. We then looked at authorisation, creating a secureRoute file, to make sure that only logged in users would be able to add vinyls to the site and then delete or update only their own collections.

## HomePage / landing page

## Vinyl Collection

## Vinyl Show page

### APIS

### Comments

On the vinyls Show.js page we added a Bulma media object. We then attached an event listener to push the content to the vinyl's comment property via our commentCreate route before displaying it on the page. We also attached a commentDelete event listener to the cross icon. Inside this handler we wrote an 'if statement' to ensure that users could only delete their own comments and not those of other users. Finally we added a reload method, so that the new comments would display on the page after the user clicked.

## User Register / login

## User Profile page / Edit

### Wishlist

### Process

### Challenges

### Wins

## Future Features

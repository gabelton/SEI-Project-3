# SEI-Project-3

## Timeframe

## Technologies used

## Installation

## Overview

## Introduction

## HomePage / landing page

## Vinyl Collection

## Vinyl Show page

- Our approach to the vinyl show page was to first get the key information about the vinyls displayed on the page. For this we used an axios request to pull in information on the vinyl (image, label, genre, year released etc, stored in our seeds file), and then set this to state to render on the page.

- Next we wanted to have a section displaying similar artists on the page. This involved doing another axios request to get all the information on the vinyls to the vinyl show component and then set this to state. Both of these requests had to happen at the same time so both requests were handled within a Bluebird promise. We then wrote a filter function within the render of the vinyl show component to display similar vinyl filtered by genre. Finally, we sliced the 'similar' variable so a maximum of 5 similar LPs were displayed on the page.

- To display the tracklisting of the vinyl and the artist top tracks we used Last FM and Deezer's APIs. Both these requests were handled within a new block on the promise chain as they needed to happen after the axios request for the vinyl and vinyls had been made.


### APIS

- Last FM
- Deezer

### Comments

## User Register / login

## User Profile page / Edit

### Wishlist

### Process

- Once we'd decided on the theme for our project, we created a group Trello board to breakdown and manage our workload and created wireframes for the website.

-

### Challenges

### Wins

## Future Features

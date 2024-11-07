# Listing cards application

## PLEASE READ ALL THE INSTRUCTIONS CAREFULLY

## Instructions

You've joined the Infrastructures team, which is tasked on creating a set of reusable component for the company.
Since there is no frontend team yet, you start from scratch:
As initial step, you are provided with an endpoint `/api/saved-listings` which provides group of listings to display. 
and an app which presents those cards on the page.

you are also provided with a sketch for how a listing should be presented: ![Listing Card](./Listing%20Card.png)
note that this design is old - it has some extra and some missing information.

Your goal, is to create a set of reusable components - "design system" style, and use them to make this app look nice.

### Requirements for production release

1. We need to make the Listing Card to look like the design, presenting as much information as you can.
2. We need to polish the page to look nice
2. In that process, create at least 3 reusable components (e.g. for image / person display)
3. List what unit tests you will write to cover your reusable components. (can be a comment on the source file)
4. You should add error handling in the application because our API sometimes returns errors.
5. You need to test the application for launch and make sure it's bug free.
6. BONUS: write a page which documents your components and their API.

### Things to note for the take home

- For a successful assessment, you do not need to do anything more than meet the listed requirements. Where a requirement is ambiguous, please choose any working solution to it and be prepared to tell us why you chose that solution.
- Please do not add any new packages, scripts, or other external dependencies to this project.
- We've built a tiny mock data server in `api-plugin`. On occasion, this server will respond with errors. Please don't try to fix the server. Instead, update the application to handle the errors.
- Please provide your solution as an email attachment (but please don't include the `node_modules` folder). You can use the included `zip-it.sh` script to compress the files into a tar.gz archive.

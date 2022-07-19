Project Description
Front end web app / client for the Bananable Product Services.

Version
0.1.0

Table of Contents
Installation
Creating .env file
Build commands
Run Commands
Possible errors
Links
Author
Installation
Install Prerequisites
Node Version = 14.x.x
NPM Version = 7.x.x
Install Commands
After cloning repository go to project folder

cd bananable-frontend

And install packages with command

npm install

Creating .env file
You need to have .env.local file in root folder. You can copy it from .example.env and change <put_value_here> to real values. You should contact any of developers to provide you values for environment variables in this file. You will also need a .env.stage and .env.production to run app in staging and production environment.

Build Commands
Builds the app into the build folder.

Build for Development
npm run build:dev

Build for Staging
npm run build:stage

Build for Production
npm run build:prod

Run Commands
Open http://localhost:3000 to view it in the browser. If 3000 port is already used app will asks to use 3001 port instead.

Run app in Debugging mode
Run app in debug mode using dev env(no build required).

npm run start

Run app in Production mode
Run previously created build with appropriate env.

npm run serve

Run Tests
npm run test

Links
Runbook
Repo
Author
Oril team

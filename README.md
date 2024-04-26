# PWA Text Editor

## Description
The following challenge was completed as a part of the Adelaide University Web Development Bootcamp. The project involved applying Progressive Web Application principles to a text editor. Webpack has been used to bundle the code to improve optimisation, apply loaders and implement plugins. For example, the Webpack PWA Manifest plugin has been used to assist with generating a 'Manifest.json' which will allow the application to be installable. 
IndexedDB has also been implemented to allow the editor to function offline. A service worker has been used to precache assets upon loading.

## Installation
If you would like to run this application in your local environment use the following steps:

1. Clone the repository into your local environment

2. Navigating to the root directory using the termainl, install all dependencies with 'npm i'

3. Run 'npm run start:dev' in the root directory to concurrently run the build process and the server 

4. Your application should now be available at your localhost

## Usage
When using this text editor, you will be able to write any javascript code in the editor and the program will ensure its persistance. By quitting the application and returning, your work will be saved and reloaded on return.



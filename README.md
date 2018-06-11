# Toeggel.Github.Io

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Firebase setup
 - create firebase project online
 - 1st Time
	- npm install -g firebase-tools (if not already installed)
	- your-build-command-here (ng build --prod)
	- firebase login
	- firebase init
		- config as needded
			e.g.: simple angular hosting:
			- Are you ready to proceed? (Y/n) = Y
			- Which Firebase CLI features do you want to setup for this folder? = Hosting
			- Select a default Firebase project for this directory = Your-Firebase-Project-Name
			- What do you want to use as your public directory? = dist
			- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) = Y
			- (File dist/index.html already exists. Overwrite? (y/N) = N)
	 - firebase deploy
	 - firebase open hosting:site
 - redeploy:
	- your-build-command-here (ng build --prod)
	- firebase deploy
 
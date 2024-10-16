# GiphyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.


## Libraries Used
- **Angular Material**: For building a responsive and modern UI.
- **Bootstrap**: To use modern responsive CSS rules.
- **RxJS**: For handling streams of data and API requests.
- **ngx-infinite-scroll**: For implementing infinite scrolling.
- **NgRx**: For state management.
- **Angular Forms**: For building and managing forms.
- **Angular Router**: For handling navigation and routing.
- **HttpClientModule**: For making HTTP requests.


## Project Structure
- `/src/app/components`: Contains all the components diveded into:
  - `/src/app/components/core`: Contains all the main components, used only once:
  - `/src/app/components/shared`: Contains all the shared components used more than once:
- `/src/app/models`: Interfaces used across the whole application.
- `/src/app/services`: Contains services for API requests.
- `/src/app/store`: NgRx state management for favorite GIFs.
- `/src/assets`: Images and styles used across the whole application; the `/src/assets/scss` should contain files as:
  - `custom-theme.scss`: the file that contains all the theme variations.
  - `custom-material.scss`: the file that contains all the material components customizations.
  - `mixins.scss`: the file that contains all the mixins
  - `variables.scss`: the file that contains all the variables (e.g. the main color variation for the branding).
- `/src/environments`: Configuration files for different environments (e.g. dev.environment.ts, prod.environment.ts [...]).


## How to Run
1. Install dependencies: `npm install`
2. Start the application: `ng serve`
3. Open the browser at `http://localhost:4200/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

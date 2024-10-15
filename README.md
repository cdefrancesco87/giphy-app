# GiphyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.


## Libraries Used
- **Angular Material**: For building a responsive and modern UI.
- **RxJS**: For handling streams of data and API requests.
- **ngx-infinite-scroll**: For implementing infinite scrolling.

## Project Structure
- `/app/components`: Contains all the components like search bar, gif list, and gif details.
- `/app/services`: Contains services for API requests.
- `/app/store`: NgRx state management for favorite GIFs.
- `/app/models`: Interfaces used across the whole application.
- `/assets`: Assets and styles used across the whole application.
- `/environments`: Configuration files for different environments, like development and production.

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

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

### Components description
All the application has been developed using standalone components for an improved and more easy to mantain structure.
As Described in "Project Structure", there are two kind of components:
- Core components
- Shared components

### Core components

#### Dashboard component: 
This component manages the main page; in thi ssection, user can search, view, add to favorites and sort by date new Gifs from Giphy with a keyword based search.

For every search, first 50 results are fetched from the API, and as soon as the user does scroll to bottom, ngx-infinite-scroll directive triggers a new API call to append the new gifs to the list.

To manage the favorites, there is a toggle button, on the right bottom corner of the images, that triggers a function that updates a json into the local storage to maintain the record of which are the favorites gifs selected.

#### Favorites component: 
This component manages the favorites list display; on this page, as the Dashbord component, user could open a specific gif details or delete the gif from the favorites list.

#### Gif-details component:
This component shows the selected gif details; here the user can view the gif in is full size, add it to favorites (WIP), and read other details as Author, import date, rating, source URL, User's website and Giphy's original url.

### Shared components

#### Gif-card component:
This component shows a single gif image and is used into mosaic layouts; this component does also manage the toggle favorite button throgh a dedicated service (FavoriteService) and the material-spinner show/hide while the image is loading.

#### Header component:
A simple header component, to manage the title and subtitle for each single app section

#### Navbar component:
A simple navbar component, to manage the navigation

#### Searchbar component:
A simple component that does contain the search input and the order by select; it does emit separate events to trigger search service and order list method

### Models
This folder contains some interfaces, for customize the variables type, and endpoints, used to avoid to hardcode the API endpoints.

### Services
This folder contains the services used to retrieve the data from the APIs and to manage favorite toggle functionality; usually, in larger applications, this folder could be placed into the single stand-alone components to improve the scalability of the application itself.

### Store
This folder contains all the files necessary for managing the NgRx store, including:

- Selectors: used to select and derive pieces of state.
- Actions: the actions that can be dispatched to change the state.
- Reducers: functions used to handle state transitions based on actions.
- Facades: interfaces used to interact with complex subsystems, that provides a higher-level API for state management.
- Effects: used to handle asynchronous operations.

These files work together to manage the application's state in a predictable and more scalable way.

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

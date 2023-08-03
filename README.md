# URL Shortener App

The URL Shortener App is a simple web application that allows users to shorten long URLs into shorter, more manageable ones. It uses React and React Bootstrap for the front-end, and it also includes a context provider for managing URL mappings.

## Features

- Shorten long URLs into shorter ones.
- View a table of all shortened URLs and their corresponding original URLs.

## How to Use

1. Clone the repository or download the source code.
2. Install the dependencies using npm or yarn.
3. Run the development server.
4. The app will open in your browser at http://localhost:3000/.
5. Enter a long URL in the input field and click the "Shorten" button to generate a shortened URL.
6. Click on the shortened URL to open the original URL in a new tab.

## Folder Structure

public: Contains the public assets of the app, such as the index.html file and favicon.
src: Contains the source code of the app.
components: Contains the main components of the app.
DataTable.js: Displays the table of all shortened URLs and their corresponding original URLs.
ShortUrl.js: Displays the shortened URL and its original URL.
UrlForm.js: Provides the form to shorten a long URL.
UrlShortenerContext.js: Defines the context and provider for managing URL mappings.
App.js: The main entry point of the app, where all components are used and the context provider is wrapped around the app.
index.js: The main entry point of the React app.

## Dependencies

- React: A JavaScript library for building user interfaces.
- React Bootstrap: A library that provides Bootstrap components and styles as React components.
- Bootstrap: A popular CSS framework for styling web applications.

## Credits

This URL Shortener App was created by [Oleg Melnic] using React and React Bootstrap.

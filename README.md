# Art Institute of Chicago API

This is a simple HTML/CSS and JS application that uses the Art Institute of Chicago API to display information about artworks in their collection. Specifically, it retrieves the title and description of each artwork.

## Getting Started

To get started with this application, simply clone or download the repository to your local machine.

```bash
git clone https://github.com/corey-nadeau/art-api.git
```

Then, open the index.html file in your preferred browser. 

## Usage

Upon loading the page, the application will automatically make a request to the Art Institute of Chicago API and display information about one artwork. To get information about a different artwork, simply click the "Refresh" button at the top of the page.

## API Information

This application uses the [Art Institute of Chicago API](https://api.artic.edu/docs/) to retrieve artwork information. Specifically, it uses the "Search the collection" endpoint to retrieve the title and description of each artwork. 

Note that to use this API, you must obtain an API key from the Art Institute of Chicago website and replace the `API_KEY` variable in the `app.js` file with your own key.

## Technologies Used

- HTML/CSS
- JavaScript

## Acknowledgments

- The Art Institute of Chicago for providing the API and documentation.
- [jQuery](https://jquery.com/) for making API requests.

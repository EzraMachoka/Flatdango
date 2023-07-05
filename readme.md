# Flatdango Movie Tickets App

This is a simple web app that displays movie details such as title, poster, runtime, showtime, and the number of tickets remaining. The movie details are fetched from a `db.json` file. Users also have the ability to purchase tickets for a movie. When the "Buy Ticket" button is clicked, the number of available tickets decreases on the frontend. It prevents users from buying a ticket the showing is already sold out.

## Languages Used
- JavaScript
- HTML
- CSS
- JSON

## Features

### Movie Details Display
- The web app displays movie details such as title, poster, runtime, showtime, and the number of tickets remaining.
- The movie details are fetched from a `db.json` file.

### Ticket Purchase
- Users can buy tickets for a movie by clicking the "Buy Ticket" button.
- When a ticket is bought, the number of available tickets decreases on the frontend.
- Users cannot purchase a ticket if the show is already is sold out.

## Usage

1. Download the repository to locally host it or even clone it.
2. Ensure you have a local web server set up to serve the files.
3. Place the db.json` file in the root directory.Don't forget to have Postman locally hosted.Download the web version. Run the http://localhost:3000/films/1  command first to fetch the first movie whose poster is supposed to be displsyed first. Later, you will run the same command but exclude the '/1' to fetch all the films and their details. 
4. Open the web app in a web browser using the server's URL.
5. The web app will display movie details, mainly the name , Id, run time and such  fetched from the `db.json` file.
6. Click the "Buy Ticket" button to purchase a ticket for a movie.
7. The number of available tickets will decrease on the frontend if the purchase is successful.
8. If the showing is sold out, you will not be able to purchase any ticket.

## The File Structure

- `index.html`: The main HTML file for the web app.
- `style.css`: The CSS file containing the styling for the web app.
- `script.js`: The JavaScript file containing the logic for the web app.
- `db.json`: The JSON file containing the movie details and ticket availability.

## Customizing this project

- To customize the movie details, modify the `db.json` file.
- You can also modify the styling of the web app by editing the `style.css` file.

## Contributions to this project

Contributions to the improvement of this web app are very much allowed. If you find any problems or have suggestions that may add new features, please open an issue or submit a pull request and my collaborator Miss. Mids and I will listen. Looking foward to your ideas.

## Licensing

This project is not licensed at all.Be free to clone it and manipulate it as you wish. 
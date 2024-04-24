# Notes-Express-Restful-API

Welcome to the Notes Express Restful API repository! This project is a simple Express.js server that implements basic CRUD operations for note management. It's designed to help learn how Express handles routing, middleware, and JSON data.

## Features

- List all notes
- Retrieve a specific note by ID
- Add new notes
- Delete existing notes
- Reload 

## Technologies Used
Node.js: The runtime environment for running the JavaScript server.
Express.js: The web framework used for handling API requests.
nodemon: Utilized during development to automatically restart the server after file changes.

## Getting Started

Follow these instructions to get the application running on your local machine.


### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Chouikhi-abdallah/Notes-Express-Restful-API.git

2. Change into the project directory:
`cd Notes-Express-Restful-API`
3. Install dependencies:
`npm install`
`npm install express`
`npm install --save-dev nodemon`
 
4. Start the server:
`node app.js && npm run dev && npm start `
Now, the server should be running on http://localhost:3001.

API Endpoints
Here's a breakdown of available endpoints and their functionality:

GET /api/notes: Returns a list of all notes.
GET /api/notes/:id: Retrieves a specific note by its ID.
POST /api/notes: Adds a new note. The request body should be in JSON format and include content and important fields.
DELETE /api/notes/:id: Deletes the note with the specified
Example of Adding a Note
You can add a new note by sending a POST request to /api/notes with a JSON payload:

{
  "content": "Express is fun",
  "important": true
}

## Contributing
Contributions to enhance or extend the functionality of NotesExpressAPI are warmly welcomed. If you have suggestions or improvements, feel free to fork the repository and submit a pull request.


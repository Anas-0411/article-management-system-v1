# article-management-system-v1
**README**

# Article Management System

This is a simple CRUD application built with Node.js, Express, and MongoDB to manage articles.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Anas-0411/article-management-system-v1.git
```

2. Navigate to the project directory:

```bash
cd article-management-system
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node index.js
```

The application will be running on `http://localhost:3000`.

## Features

- Create, read, update, and delete articles.
- Uses MongoDB as the database.

## Routes

- GET `/articles`: Display all articles.
- GET `/articles/new`: Render a form to create a new article.
- POST `/articles`: Create a new article and redirect to the articles list.
- GET `/articles/:id/edit`: Render a form to edit an existing article.
- PUT `/articles/:id`: Update an existing article and redirect to the articles list.
- DELETE `/articles/:id`: Delete an article and redirect to the articles list.

## Code Structure

- `index.js`: Main entry point of the application.
- `views/`: Contains EJS templates for rendering HTML.
- `public/`: Contains static files like CSS and images.

## Database Schema

- `Article`: Mongoose model with `title` and `content` fields.

## Error Handling

Errors are logged to the console and a generic error message is sent to the client.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.
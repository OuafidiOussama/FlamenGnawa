
# FLAMENGNAWA

FLAMENGNAWA is a web platform designed for a musical band to spread their presence online. It provides a convenient way for users to access band's event, products and blogs.

## Technologies Used

- **Frontend**: [React.js](https://react.dev)
- **Backend**: [Express.js](https://expressjs.com)
- **Database**: [MongoDb](https://www.mongodb.com)
- **DOCKER**: [Docker](https://www.docker.com/)

## Installation

### Prerequisites

-   [Node.js](https://nodejs.org/en/)

### Steps

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/OuafidiOussama/FlamenGnawa`
2. Navigate to the project directory: `cd FlamenGnawa`
3. Install all the dependencies needed for both frontend and backend (API):

```
cd frontend
npm install
cd ../API
npm install
```

4. Start the backend(API) server: `npm server` (in the API directory)
5. Start the frontend development server: `npm start` (in the frontend directory)
6.Congrats, now you can access the application in your browser at `http://localhost:3000`

## Testing

### Backend Testing with Jest

To test the backend using Jest, follow these steps:

1. Navigate to the API directory: `cd API`
2. Run the Jest test suite: `npm test`
3. Jest will execute the tests and provide feedback on the test results.


## Dockerization

-   Ensure you have [Docker](https://www.docker.com/) installed
-   run `docker compose up --build -d` to build the docker image

## Contributors

- [OUAFIDI Oussama](https://github.com/OuafidiOussama)

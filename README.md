# Voting App

Voting App is a full-stack web application for creating polls, voting on available options and displaying poll results.
The project was created as a portfolio application to practice Java Spring Boot, REST API, JWT authentication and React frontend development.

## Application Preview

### Home Page
<img width="2558" height="1317" alt="landingPage" src="https://github.com/user-attachments/assets/3f878d7c-0275-46a1-ae2a-a9d1d7408cab" />



### Dashboard / Poll list
<img width="2560" height="1321" alt="dashboard" src="https://github.com/user-attachments/assets/8dc4cbd0-e22c-4f2b-b3f8-5d06756a0d19" />



### Create poll
<img width="2560" height="1321" alt="createPoll" src="https://github.com/user-attachments/assets/26f2ec9d-a7fa-44f8-9374-0870d30f6532" />



### My polls
<img width="2560" height="1321" alt="myPolls" src="https://github.com/user-attachments/assets/1b42f1de-08c0-479a-b7c2-66ee14b649ba" />



## Features

* User registration
* User login
* JWT-based authentication
* Creating polls
* Adding multiple poll options
* Setting poll expiration date
* Displaying all available polls
* Displaying polls created by the logged-in user
* Voting on poll options
* Showing vote count for each option
* Sorting poll options by number of votes
* Deleting own polls
* Protected API endpoints

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Security
* JWT
* Spring Data JPA
* Hibernate
* PostgreSQL
* Maven
* Lombok

### Frontend

* React
* Vite
* JavaScript
* Axios
* Material UI
* Notistack
* React Router

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Configure your database connection in `application.properties` or by using environment variables, depending on your local setup.

Example PostgreSQL configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/voting_app
spring.datasource.username=your_username
spring.datasource.password=your_password
```

Run the backend application:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

The backend should run on:

```text
http://localhost:8080
```

## Frontend Setup

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:8080
```

Run the frontend application:

```bash
npm run dev
```

The frontend should run on:

```text
http://localhost:5173
```

## API Overview

### Authentication

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| POST   | `/api/auth/signup` | Register a new user             |
| POST   | `/api/auth/login`  | Login user and return JWT token |

### Polls

| Method | Endpoint              | Description                         |
| ------ | --------------------- | ----------------------------------- |
| GET    | `/api/user/polls`     | Get all polls                       |
| GET    | `/api/user/my-polls`  | Get polls created by logged-in user |
| POST   | `/api/user/poll`      | Create a new poll                   |
| DELETE | `/api/user/poll/{id}` | Delete own poll                     |

### Voting

| Method | Endpoint                                         | Description                  |
| ------ | ------------------------------------------------ | ---------------------------- |
| POST   | `/api/user/poll/{pollId}/option/{optionId}/vote` | Vote on selected poll option |

## Authentication

After successful login, the backend returns a JWT token.
The frontend stores the token and sends it in the `Authorization` header for protected requests:

```text
Authorization: Bearer <token>
```

## Main Learning Goals

The main goal of this project was to practice building a full-stack application with:

* REST API design
* JWT authentication
* protected backend endpoints
* database relationships using JPA/Hibernate
* frontend-backend communication
* React routing
* handling forms in React
* basic project structure for a portfolio application

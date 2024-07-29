# Pet Listing App

## Description

This Pet Adoption App is a React-based web application that allows users to browse and search for pets available for adoption. It utilizes a RESTful API to fetch pet data and implements features such as pagination and pet search functionality.

## Features

- Browse a list of pets available for adoption
- Search for pets by animal type, breed, and location
- View detailed information about each pet
- Pagination for easy navigation through pet listings
- Responsive design for various screen sizes

## Technologies Used

- React.js
- React Router
- Axios for API requests
- Tailwind CSS for styling

## Installation

To run this project locally, follow these steps:

1. Clone the repository
```git clone https://github.com/imdevk/pet-listing.git```

2. Navigate to the project directory
```cd pet-listing```

3. Install dependencies
```npm install```

4. Start the development server
```npm run dev```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- The home page displays a list of pets available for adoption.
- Use the search form to filter pets by animal type, breed, and location.
- Click on a pet to view more detailed information.
- Use the pagination controls at the bottom of the page to navigate through the pet listings.

## API Reference

This project uses the Pets v2 API. The base URL for the API is:
https://pets-v2.dev-apis.com

Endpoints:
- `/pets`: Get a list of pets
- `/pets?id={id}`: Get details of a specific pet
- `/breeds?animal={animal}`: Get a list of breeds for a specific animal type
- `/pets?animal={animal}&location=${location}&breed=${breed}`: Search for pets based on animal type, location, and breed

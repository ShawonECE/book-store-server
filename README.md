# COMPASS

### Live Link

```

```

## Introduction

Book-Shop-Server is a RESTful server built with Express and Mongoose, designed to manage a virtual book store. This server serves as a foundation for building scalable e-commerce applications or managing book inventories efficiently. This README provides setup instructions and details key functionalities.

## Top Features

- Add, update, retrieve, and delete book records.
- Place orders for books with automatic quantity updates.
- RESTful routes for seamless data management.
- Uses Mongoose for database schema and interaction.
- Robust validation and error responses for invalid requests.


## Running Locally

### Prerequisites:

This project uses Node for development and build processes. To clone and run the Compass project locally, follow these steps:

- Node.js (version 18 or above) installed on your system. You can check your version by running `node -v` in your terminal.
- Git version control installed.

### Steps:

1. Clone the Repository: Open your terminal and navigate to your desired directory. Then, clone the Compass repository using the following command.
    ```
    git clone https://github.com/ShawonECE/book-store-server.git
    ```
2. Install Dependencies: Navigate to the cloned project directory.
    ```
    cd book-store-server
    ```
    Install all project dependencies using npm or yarn:
    ```
    npm install  # or yarn install
    ```
3. Set Up Configuration (Important): This project relies on Firebase for authentication features. To use Firebase functionalities, you'll need to configure it with your own project's credentials. Here's how: 
    - Create `.env`: In your project directory (where you cloned the repository), create a new file named `.env`.
    -  Define Configurations: Inside the `.env` file, define each configuration property with its corresponding value. Here's an example:
        ```
        PORT = your_system_port
        DB_URI = your_mongodb_uri
        ```
    #### Important Note
    - Replace `your_system_port`, `your_mongodb_uri`, etc. with your actual values.
    - Never commit the `.env` file to your version control system (e.g., Git) as it contains sensitive information.

5. Development Server: With the `.env` file in place, you can start the development server as usual:
    ```
    npm run start:dev  # or yarn start:dev
    ```

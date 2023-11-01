# SixthSense - Stock Market Prediction Simulator

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Real-Time Updates](#real-time-updates)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

SixthSense is an innovative stock market prediction simulator developed using the MERN (MongoDB, Express, React, Node.js) stack. It leverages advanced machine learning models trained based on the findings presented during the Symposium 2023 paper to offer users a unique platform for simulating stock market predictions. With a focus on real-time data and an interactive user interface powered by Tailwind CSS and Framer Motion, SixthSense provides an engaging environment for users to experiment with various market scenarios and predictions.

## Features

- **Stock Market Simulation:** Simulate stock market predictions based on advanced machine learning models.

- **Real-Time Data:** WebSocket integration for real-time stock data updates and price fluctuations.

- **User-Friendly Interface:** A responsive and visually appealing user interface designed with Tailwind CSS and enriched with smooth animations using Framer Motion.

- **Interactive Charts:** Visualize stock market data with interactive charts to gain insights and test predictions.

- **Historical Data Analysis:** Access historical stock market data for in-depth analysis.

- **User Profiles:** Create and manage user profiles with personalized dashboards.

## Technologies Used

- MongoDB: For storing user data and historical stock market data.

- Express.js: To build the backend server for handling API requests.

- React: For creating the dynamic and interactive user interface.

- Node.js: To run the server and manage the application's backend.

- WebSocket: For real-time updates and communication.

- Tailwind CSS: For responsive and stylish UI design.

- Framer Motion: For creating smooth animations and transitions.

## Getting Started

### Prerequisites

Before running SixthSense, make sure you have the following prerequisites installed:

- Node.js and npm
- MongoDB (configured and running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/whysosaket/sixthsense.git
   cd sixthsense
   ```

2. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

4. Configure your database settings in `server/config.js`.

5. Start the server and the client:

   ```bash
   # Start the server (from the 'server' directory)
   npm start

   # Start the client (from the 'client' directory)
   npm start
   ```

## Usage

1. Access the SixthSense application through your web browser at `http://localhost:3000`.

2. Create a user profile and explore the stock market prediction simulator.

3. Simulate predictions, analyze historical data, and interact with real-time updates.

## Real-Time Updates

SixthSense provides real-time stock market data updates using WebSocket technology. This ensures that users can experience live market fluctuations and make predictions based on the most up-to-date information.

## Contributing

We welcome contributions from the open-source community! If you'd like to contribute to SixthSense, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.

3. Make your changes and commit them: `git commit -m 'Description of your changes'`.

4. Push your branch to your fork: `git push origin feature-name`.

5. Create a pull request to the `main` branch of the original repository.

Please make sure to follow our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, issues, or feedback, please don't hesitate to [contact us](mailto:saketaryan2002@gmail.com) or open an issue in the repository.

Thank you for using SixthSense!

Happy stock market prediction and simulation! 📈💼

# Evolving Filter API

A lightweight and extensible RESTful API built with Node.js and Express to serve and filter structured data. Designed with scalability and flexibility in mind, this API enables dynamic querying based on multiple optional parameters.

## Features

- Simple GET endpoint for querying a dataset
- Supports multiple query parameters for filtering
- Case-insensitive matching and basic type parsing (e.g., booleans)
- Graceful error handling with meaningful responses
- Non-mutative data operations to ensure safety

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Bigyanhub/evolving-filter-api.git
cd evolving-filter-api
npm install
```

### Running the Server

```bash
node server.js
```

Server will be available at:

```
http://localhost:8000/api
```

## Usage

Make GET requests to `/api` with optional query parameters.

Example:

```
GET /api?key1=value1&key2=value2
```

Response:

```json
[
  {
    "name": "Example Startup",
    "industry": "Example Industry",
    ...
  }
]
```

If no results are found, a `404` response will be returned.

## Project Structure

```
.
├── data/
│   └── data.js       # Sample dataset
├── server.js         # API logic
├── package.json
└── README.md
```

## License

This project is open-source and free to use.
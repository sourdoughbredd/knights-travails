# Knights Travails

A JavaScript module to calculate the shortest path for a knight on a chessboard using the knight's legal moves.

## Description

**Knights Travails** is a module that solves the classic "Knight's Shortest Path" problem on a chessboard. It determines the shortest path a knight would take to move from a starting position to an ending position, ensuring all moves are within the bounds of an 8x8 chessboard.

## Table of Contents

- [Description](#description)
- [Preview](#preview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Contact Information](#contact-information)

## Preview

You can explore the functionality of the Knights Travails module by cloning the repository and running the provided example scripts.

## Features

- Breadth-First Search (BFS) for shortest path calculation.
- Custom Queue implementation for BFS algorithm.
- Utility function to print the entire shortest path.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/knights-travails.git
   ```
2. Navigate to the project directory:
   ```sh
   cd knights-travails
   ```
3. Install dependencies (if any):
   ```sh
   npm install
   ```

## Usage

To use this module, import it into your project and call the `knightMoves` function with the desired start and end positions.

```javascript
import { KnightsTravails } from "./knights-travails.js";

const start = [0, 0];
const end = [7, 7];
const path = KnightsTravails.knightMoves(start, end);
console.log(path);
```

### Functions

#### `knightMoves(start, end)`

- **Description**: Finds the shortest path for a knight from the start position to the end position.
- **Parameters**:
  - `start` (Array): The starting position as [x, y].
  - `end` (Array): The ending position as [x, y].
- **Returns**: An array of positions representing the shortest path.

#### `printResults(path)`

- **Description**: Prints the results of the shortest path calculation.
- **Parameters**:
  - `path` (Array): The array of positions representing the shortest path.

## Tech Stack

- **JavaScript**: The primary language used for the module.
- **Node.js**: For running the scripts and managing dependencies.

## License

This project is licensed under the MIT License.

## Contact Information

For any questions or suggestions, please contact Brett Bussell at [bwbussell24@gmail.com](mailto:bwbussell24@gmail.com).

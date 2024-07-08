import { KnightsTravails as kt } from "./knights-travails.js";

// Test adjacent nodes
// function testAdj(node) {
//   console.log(
//     `Adjacent to ${JSON.stringify(node)}: ${JSON.stringify(
//       kt.adjacentNodes(node)
//     )}`
//   );
// }
// testAdj([0, 0]);
// testAdj([3, 3]);
// // testAdj([0, 8]);

// Test shortest path
kt.knightMoves([0, 0], [0, 0]);
kt.knightMoves([0, 0], [3, 3]);
kt.knightMoves([3, 3], [0, 0]);
kt.knightMoves([0, 0], [7, 7]);

// Random test for errors
// function randNumbersArray(n, min, max) {
//   if (n == 0) return [];
//   return Array.from({ length: n }, () => min + Math.floor(Math.random() * max));
// }

// for (let i = 0; i < 10000; i++) {
//   const start = randNumbersArray(2, 0, 8);
//   const end = randNumbersArray(2, 0, 8);
//   kt.knightMoves(start, end);
// }

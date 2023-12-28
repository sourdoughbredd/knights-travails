import { KnightsTravails } from "./knights-travails.js";

// Test adjacent nodes
function testAdj(node) {
  console.log(
    `Adjacent to ${JSON.stringify(node)}: ${JSON.stringify(
      KnightsTravails.adjacentNodes(node)
    )}`
  );
}
testAdj([0, 0]);
testAdj([3, 3]);
testAdj([0, 8]);

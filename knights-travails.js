import { Queue } from "./queue.js";

const KnightsTravails = (function () {
  const BOARD_SIZE = 8;

  function validNode(node) {
    return (
      node[0] >= 0 &&
      node[0] < BOARD_SIZE &&
      node[1] >= 0 &&
      node[1] < BOARD_SIZE
    );
  }

  // Since we will not check a node (square) more than once, there's no need
  // to precompute the adjacency list since we will have to run this function
  // once per node (in the worst case) anyway
  function adjacentNodes(node) {
    // Check for out of bounds
    if (!validNode(node)) throw new Error(`node (${node}) is out of bounds!`);

    // Get all adjacent nodes
    const unfilteredAdjacentNodes = [
      [node[0] + 1, node[1] + 2],
      [node[0] + 1, node[1] - 2],
      [node[0] - 1, node[1] - 2],
      [node[0] + 2, node[1] + 1],
      [node[0] - 1, node[1] + 2],
      [node[0] - 2, node[1] + 1],
      [node[0] + 2, node[1] - 1],
      [node[0] - 2, node[1] - 1],
    ];
    return unfilteredAdjacentNodes.filter((node) => validNode(node));
  }

  function nodeEquals(node1, node2) {
    return node1[0] === node2[0] && node1[1] === node2[1];
  }

  // The "visited" array is a map from node (board square) to a
  // boolean that represents whether the node has been visited
  // during our search
  let visited;
  resetVisited(); // initialize all to not visited

  // Resets all nodes to not visited status
  function resetVisited() {
    visited = Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => false)
    );
  }

  // Returns true if the node has been visited
  function isVisited(node) {
    return visited[node[0]][node[1]];
  }

  // Marks the node as visited
  function markVisited(node) {
    visited[node[0]][node[1]] = true;
  }

  // The distances array is a map from node (board square) to
  // its distance from the start node (which has distance 0).
  // We track the distance of each node we visit as we crawl along.
  // Unvisited nodes have unknown distance, so they are marked as
  // infinite distance.
  let distances;
  resetDistances();

  // Resets all distances to infinity
  function resetDistances() {
    distances = Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => Infinity)
    );
  }

  // Gets the distance of the node from the start
  function getDistance(node) {
    return distances[node[0]][node[1]];
  }

  // Sets the distance of the node from the start
  function setDistance(node, distance) {
    distances[node[0]][node[1]] = distance;
  }

  // Use breadth-first search to check all nodes in order of distance
  // from the start. Stop when the end node is found and backtrack to
  // the start.
  function knightMoves(start, end) {
    // Check bounds
    if (!validNode(start) || !validNode(end))
      throw new Error("Invalid start and/or end locations!");

    // Initialize
    const queue = Queue();
    queue.enqueue(start);
    markVisited(start);
    setDistance(start, 0);
    let found = false;
    // Keep traveling further away until end is found
    while (!queue.isEmpty() && !found) {
      const prevNode = queue.dequeue();
      const prevDistance = getDistance(prevNode);
      // Process the adjacent nodes (squares that are 1 move further)
      const nextNodes = adjacentNodes(prevNode);
      for (let node of nextNodes) {
        if (!isVisited(node)) {
          markVisited(node);
          setDistance(node, 1 + prevDistance);
          if (nodeEquals(node, end)) {
            found = true;
            break;
          } else {
            queue.enqueue(node);
          }
        }
      }
    }
    // Get shortest path from distances array
    const shortestPath = extractShortestPath(start, end);
    printResults(shortestPath);
    // Reset so the function can be used again
    resetVisited();
    resetDistances();
    return shortestPath;
  }

  // Crawls along the shortest path, collecting the nodes visited along
  // the path.  Starts at the end node and visits nodes that are one move
  // closer to the start until it reaches the start. This is easy with our
  // distances array!
  function extractShortestPath(start, end) {
    let currNode = end;
    const path = [currNode];
    while (!nodeEquals(currNode, start)) {
      // Find an adjacent node that is one move closer to the start
      const prevDistance = getDistance(currNode);
      const neighbors = adjacentNodes(currNode);
      currNode = neighbors.filter(
        (node) => getDistance(node) == prevDistance - 1
      )[0]; // arbitrarily grab first element if there are mutliple
      path.push(currNode);
    }
    // Reverse the list before returning
    return path.reverse();
  }

  function printResults(shortestPath) {
    console.log(
      `You made it in ${shortestPath.length - 1} moves! Here's your path:`
    );
    shortestPath.forEach((node) => console.log(node));
  }

  return { knightMoves, printResults };
})();

export { KnightsTravails };

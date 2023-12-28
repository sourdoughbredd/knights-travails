export { KnightsTravails };

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

  function shortestPath(start, end) {
    // Check bounds
    //
  }

  return { adjacentNodes };
})();

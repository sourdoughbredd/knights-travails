export const Queue = function () {
  const items = [];

  function enqueue(item) {
    items.push(item);
  }

  function dequeue() {
    if (isEmpty()) return null;
    return items.shift();
  }

  function peek() {
    if (isEmpty()) return null;
    return items(0);
  }

  function isEmpty() {
    return items.length == 0;
  }

  function print() {
    if (isEmpty()) return console.log("empty queue");
    // See if items have a special print method
    let hasPrintMethod = true;
    try {
      items[0].print();
    } catch {
      hasPrintMethod = false;
    }

    if (hasPrintMethod) {
      let str = "front <- " + items[0].print();
      for (const item of items.slice(1)) {
        str += " <- " + item.print();
      }
      str += " <- back";
      console.log(str);
    } else {
      let str = "front <- " + items[0];
      for (const item of items.slice(1)) {
        str += " <- " + item;
      }
      str += " <- back";
      console.log(str);
    }
  }

  return { enqueue, dequeue, peek, isEmpty, print };
};

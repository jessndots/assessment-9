
function unroll(grid) {
  let unrolled=[];

  // make functions that peel that side of grid and then calls the peel function for the next side until grid is empty
  function top ({grid, unrolled}) {
    unrolled=[...unrolled, ...grid[0]]
    grid.shift();
    if (grid.length > 0) {
      return right({grid, unrolled})
    }
    return {grid, unrolled};
  }
  function right ({grid, unrolled}) {
    for (let i=0; i<grid.length; i++) {
      unrolled.push(grid[i].pop());
    }
    if (grid.length>0) {
      return bottom({grid, unrolled})
    }
    return {grid, unrolled};
  }
  function bottom ({grid, unrolled}) {
    const bottomRow = grid[grid.length-1];
    const bottomRev = bottomRow.reverse();
    unrolled = [...unrolled, ...bottomRev]
    grid.pop();
    if (grid.length > 0) {
      return left({grid, unrolled})
    }
    return {grid, unrolled}
  }
  function left ({grid, unrolled}) {
    for (let i=grid.length-1; i>=0; i--) {
      unrolled.push(grid[i].shift());
    }
    if (grid.length >0) {
      return top({grid, unrolled})
    }
    return {grid, unrolled}
  }

  // start with top row peeled per instructions
  return  top({grid, unrolled}).unrolled  
}

module.exports = unroll;
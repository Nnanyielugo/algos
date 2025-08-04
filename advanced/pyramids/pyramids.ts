function pyramids(num: number, row = 0, level = ''): typeof pyramids | void {
  if (num === row) return;

  const levelWidth = 2 * num - 1;

  if (level.length === levelWidth) {
    console.log(level);
    return pyramids(num, row + 1);
  }

  const mid = Math.floor(levelWidth / 2);
  if (level.length >= mid - row && level.length <= mid + row) {
    level += '#';
  } else {
    level += ' ';
  }

  return pyramids(num, row, level);
}

pyramids(5);

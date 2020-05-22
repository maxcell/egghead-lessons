function exponentialWork(magnitude) {
  let accumulator = 0;
  for (let i = 0; i < 10 ** magnitude; i++) {
    accumulator += i;
  }
  return accumulator;
}

exponentialWork(1)
exponentialWork(6)
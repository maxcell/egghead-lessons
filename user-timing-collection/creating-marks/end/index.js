function exponentialWork(magnitude) {
  let accumulator = 0;
  for (let i = 0; i < 10 ** magnitude; i++) {
    accumulator += i;
  }
  return accumulator;
}

performance.mark("start")
exponentialWork(1)
performance.mark("endofwork1")
exponentialWork(6)
performance.mark("endofwork2")
function rainfallAlternative(integers) {
    let total = 0;
    let positiveCount = 0;
    for (const integer of integers) {
      if (integer > 0) {
        total += integer;
        positiveCount++;
      }
    }
    return positiveCount > 0 ? total / positiveCount : null;
}


function filterApiData(apiData, mandatoryKeys) {
  const filter = [];

  for (const obj of apiData) {
    let allKeys = true;

    for (const key of mandatoryKeys) {
      if (obj[key] === undefined) {
        allKeys = false;
      }
    }

    if (allKeys) {
      filter.push(obj);
    }
  }

  return filter;
}

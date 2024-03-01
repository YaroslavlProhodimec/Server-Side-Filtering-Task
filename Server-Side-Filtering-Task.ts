function filterData(data, filterCriteria) {
  if (!filterCriteria || Object.keys(filterCriteria).length === 0) {
    return data;
  }
  
  return data.filter(item => {
    for (const key in filterCriteria) {
      if (item[key] !== filterCriteria[key]) {
        return false;
      }
    }
    return true;
  });
}

export function filterData(searchInput, listOfFilteredRestaurants) {
  const filterSearchData = listOfFilteredRestaurants.filter((rest) =>
    rest?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterSearchData;
}

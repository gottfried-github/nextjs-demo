export const truncate = list => ({
  list: list.slice(0, 3),
  hasMore: list.length > 3,
})

/**
 * Removes the given search parameter from the window URL.
 *
 * @param searchParam - The search parameter to be removed.
 */
const removeSearchParam = (searchParam: string) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(searchParam);
  window.history.replaceState(null, "", url);
};

export default removeSearchParam;

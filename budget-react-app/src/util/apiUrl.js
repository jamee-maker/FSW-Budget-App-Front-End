export const apiUrl = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3030"
    : "https://still-reef-56708.herokuapp.com";
};

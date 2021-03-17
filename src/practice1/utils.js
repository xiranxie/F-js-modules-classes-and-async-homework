const getURL = (address, port, path) => {
  return address.concat(":", port, path);
};

export { getURL };

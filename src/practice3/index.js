// export const getPoetry = () => {
//   return fetch("https://v1.jinrishici.com/all.json", {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       return [result.origin, result.author, result.content];
//     });
// };

// eslint-disable-next-line consistent-return
export const getPoetry = async () => {
  const url = "https://v1.jinrishici.com/all.json";
  try {
    const response = await fetch(url);
    const result = await response.json();
    return [result.origin, result.author, result.content];
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

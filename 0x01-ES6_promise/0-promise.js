export default function getResponseFromAPI() {
  const error = false;
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
}

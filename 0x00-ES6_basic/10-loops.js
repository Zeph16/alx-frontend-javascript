export default function appendToEachArrayValue(array, appendString) {
  const appended = [];
  for (const idx of array) {
    appended.push(appendString + idx);
  }
  return appended;
}

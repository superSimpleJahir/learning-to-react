/* eslint-disable no-undef */
export function gatdataloalstorage() {
  let data = localStorage.getItem("Books");
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

 async function listSearchFilter(title) {
  const urlAPI = "http://localhost:3000/locations";
  let data = await fetch(urlAPI).then((res) => res.json());
  const searchFilterUl = document.querySelector(`${title}`);
  console.log(title);

  console.log(searchFilterUl);
}
export default listSearchFilter();
// 1 hàm lấy thông tin
// 1 hàm in

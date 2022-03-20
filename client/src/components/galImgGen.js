const galImgGen = (num) => {
  let arr = [];
  for (let i = 1; i < num; i++) {
    arr.push({ id: i, status: false, Comments: "" });
  }
  return arr;
};
export default galImgGen;

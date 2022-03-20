const albumImageGenerator = (arr) => {
  //Esto toma solo los elementos con seleccionados (true)
  const preSelected = arr.filter((val) => val.status === true);
  //   console.log(preSelected);
  const arrNew = [];
  for (let i = 0; i < preSelected.length; i++) {
    arrNew.push({
      id: preSelected[i].id,
      status: false,
      comments: preSelected[i].comments,
    });
  }
  //   console.log(arrNew);
  return arrNew;
};
export default albumImageGenerator;

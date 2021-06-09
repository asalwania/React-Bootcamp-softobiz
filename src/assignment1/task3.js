// Task 3: get all Children by parentId create a dropdown of all ids, user can select id and will get all children

const a = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 2 },
  { id: 7, parentId: 5 },
  { id: 8, parentId: 5 },
  { id: 9, parentId: 5 },
  { id: 10, parentId: 5 },
];

// function to get all parent id's
function getParents(data) {
  const output = [...new Set(data.map((x) => x.parentId))];
  return output.splice(1);
}

// get first children of parent id
function getChildren(parentId, data) {
  const output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].parentId === parentId) {
      output.push(data[i].id);
    }
  }
  return output;
}

// get All children of parentId
function getAllChildren(parentId, data) {
  const parents = getParents(data);

  let output = getChildren(parentId, data);

  for (let i = 0; i < output.length; i++) {
    if (parents.includes(output[i])) {
      const newOutput = getChildren(output[i], data);
      output = output.concat(newOutput);
    }
  }
  return output;
}

console.log(getAllChildren(2,a))
// show data on homepage
function changeHandler() {
  const selectBox = document.getElementById("selectBox");
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;
  const data = getAllChildren(+selectedValue, a);
  document.getElementById("root").innerHTML = data;
}
// console.log(getParents(a));
// console.log(getChildren(1, a));
// console.log(getAllChildren(2, a));
// /*
// output will be:
// // if user select id 1
// const b = [2,3,4,5,6,7,8,9,10];
// // if user select id 5
// const b = [7,8,9,10];
// */

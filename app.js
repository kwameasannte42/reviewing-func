function alphabeticalOrder(arr) {
  return arr.sort();
  return a - b;
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//2
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function (a, b) {
    return a - b;
  });
}
nonMutatingSort(globalArray);

//3
function splitify(str) {
  return str.split(/\W/);
}
splitify("Hello World,I-am code");

//4
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");

//5
var globalTitle = "Winter Is Coming";
function urlSlug(title) {
  return title
    .split(" ")
    .filter((substr) => substr !== "")
    .join("-")
    .toLowerCase();
}
var winterComing = urlSlug(globalTitle);

//6
function checkPositive(arr) {
  return arr.every((val) => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);

//7
function checkPositive(arr) {
  return arr.some((elem) => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);

//8
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
add(10)(20)(30);

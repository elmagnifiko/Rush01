function TreeConstructor() {
    strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
  var parents = {};

  for (var i = 0; i < strArr.length; i++) {
    var pair = strArr[i].slice(1, -1).split(",");
    var enfant = pair[0];
    var parent = pair[1];
    if (enfant in parents) {
      return false;
    }
    parents[enfant] = parent;
  }
  for (var enfant in parents) {
    var parent = parents[enfant];
    var count = 0;

    for (var autreenfant in parents) {
      if (parent[autreenfant] === parent) {
        count++;
      }
    }

    if (count > 2) {
      return false;
    }
  }
  return true;
}

console.log(TreeConstructor());
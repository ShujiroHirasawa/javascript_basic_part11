//1
for (var i = 0; i < 6; i++) {
  console.log("ループ" + i + "番");
};


//2
var obj = {
  name:"佐藤",
  age:30,
  hobby:"baseball",
}
for (var item in obj) {
  console.log(obj[item]);
};


//3
var lists = [0,1,2,3,4,5]; for (list of lists) { console.log(list); };
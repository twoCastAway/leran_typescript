"use strict";
//npx tsc > (ls dist >) node dist/index.js　
function hello(user) {
    return `hello, ${user}`;
}
// console.log(hello("typescript"));
let fruits = ['apple', 'orange', 'grape'];
function juicer(fruit) {
    return fruit + "juice";
}
let hiiragi;
hiiragi = {
    clientName: 'ひいらぎ不動産株式会社',
    phoneNumber: '03-XXXX-XXXX'
};
// console.log(hiiragi);
var FoodCategory;
(function (FoodCategory) {
    FoodCategory[FoodCategory["MEAT"] = 0] = "MEAT";
    FoodCategory[FoodCategory["FISH"] = 1] = "FISH";
    FoodCategory[FoodCategory["VEGETABLE"] = 2] = "VEGETABLE";
    FoodCategory[FoodCategory["FRUITS"] = 3] = "FRUITS";
})(FoodCategory || (FoodCategory = {}));
const apple = {
    scientificName: 'Malus domestica',
    category: FoodCategory.FRUITS
};
// console.log(FoodCategory[0]);
// console.log(apple.category);
let address = '';
address = '東京都港区芝' + 1 + '丁目';
// console.log(address)
let object1 = {
    add: function (val1, val2) {
        console.log(this.value + val1 + val2);
    }
};
let object2 = {
    value: 3
};
const apply = object1.add.apply(object2, [1, 2]);
const call = object1.add.call(object2, 1, 2);
//# sourceMappingURL=index.js.map
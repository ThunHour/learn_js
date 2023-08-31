const arr1=['hour','china','chheang','hor','rith'];
let arr2;
(function(){
    arr2=[...arr1];
    arr1[2]='seiha'
})();

console.log(arr2);
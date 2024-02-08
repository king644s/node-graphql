// // let namef = "vatsal j Soni";
// // // console.log(nameF.r)

// // const rev = () => {
// //   let namef = "vatsal j Soni";
// //   let arr = namef.split("");
// //   arr.reverse();
// //   arr.join("");
// //   console.log(arr);
// // };

// // rev();

// let a = [3, 2, 5, 3, 5, 6, 7, 3, 4];

// const max = () => {
//   let arr = []; 
//   for (let i = 0; i >= a.length; i++) {
//     if (arr.length == 0) {
//       //   arr.push(a[i]);
//       arr[0] = a[i];
//     } else if (arr[0] > a[i]) {
//       arr[0] = a[i];
//     //   return;
//     }
//   }
//   console.log(arr[0]);
// };

// max();
// setTimeout(()=>console.log("2"),0);
// console.log("1");
// setImmediate(()=>console.log("3"));
// console.log("4")

for(var i=0;i<10;i++){
    setTimeout(()=>console.log(i),0)
}
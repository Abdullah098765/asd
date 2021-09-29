//
// //
// //
// //
// //
// //
// // var p1 = prompt();
// // var p2 = prompt();
// // var p3 = prompt();
// // var p4 = prompt();
// // var p5 = prompt();
// // var p6 = prompt();
// // var p7 = prompt();
// // var p8 = prompt();
// // var p9 = prompt();
// // var p10 = prompt();
// //
// //
// // var arr =  [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
// //
// //
// // arr.sort();
//
//
//
// var arr =  [];
//
//
// if (confirm("Do you want to write a Paragraph ")){
//     arr.push(prompt());
//     if (confirm("Do you want to add more words in paragraph")){
//         arr.push(prompt());
//         if (confirm("Do you want to add more words in paragraph")){
//             arr.push(prompt());
//             if (confirm("Do you want to add more words in paragraph")){
//                 arr.push(prompt());
//                 if (confirm("Do you want to add more words in paragraph")){
//                     arr.push(prompt());
//                     if (confirm("Do you want to add more words in paragraph")){
//                         arr.push(prompt());
//                         if (confirm("Do you want to add more words in paragraph")){
//                             arr.push(prompt());
//                             if (confirm("Do you want to add more words in paragraph")){
//                                 arr.push(prompt());
//                                 if (confirm("Do you want to add more words in paragraph")){
//                                     arr.push(prompt());
//                                    if (confirm("Do you want to add more words in paragraph")){
//                                        arr.push(prompt());
//                                        if (confirm("Do you want to add more words in paragraph")){
//                                            arr.push(prompt());
//                                            if (confirm("Do you want to add more words in paragraph")){
//                                                arr.push(prompt());
//                                                if (confirm("Do you want to add more words in paragraph")){
//                                                    arr.push(prompt());
//                                                    if (confirm("Do you want to add more words in paragraph")){
//                                                        arr.push(prompt());
//                                                        if (confirm("Do you want to add more words in paragraph")){
//                                                            arr.push(prompt());
//
//                                                        }
//                                                    }
//                                                }
//
//
//                                            }
//
//                                        }
//
//                                    }
//
//                                 }
//
//                             }
//
//                         }
//                     }
//
//                 }
//
//             }
//         }
//
//
//
//     }
//
// }
// document.write(`<h1>${"Length: " + arr.length}</h1>`);
// document.write(`<p>${arr.join(" ")}</p>` );
//
//
// var a =prompt();
// var f =  prompt();
//
//
//  for (let i = a; i <= f; i++){
//      console.log("A" + i)}


//
// var a1 = prompt('which table want to write');
// var a2 = prompt('endding');
// cal = a2/a1;
//
//
// // document.write(`${i} <br>`)
// // for (var i = 1; i <= cal; i++){
// //     document.write(`${a1} X ${i} = ${a1*i} <br>`)
// // }
//
// var ek = 1;
// var so = 100;
//
// for (var i = ek; i <= so; i++){
// if (ek++ === ){
//     i + " Hello"
// }
//           console.log(i)
//
//
//
//    }


//
//
// var zero = 1;
// var so = 1000;
//
// for (var i = zero; i <= so; i++) {
//
//   if (i % 5 === 0 && i % 3 ===0) {
//         document.write(`${i}  Hello Word <br><br>`)
//     }
//     else if (i % 3 === 0) {
//         document.write(`${i}  Hello <br><br>`)
//     }
//   else if (i % 5 === 0) {
//       document.write(`${i}  World <br><br>`);}
//
//
// else(document.write(`${i}  <br><br>`));
//
//
//
//
// }


//
//
// for(var i = 0; i <= 1000; i++){
//     if(i % 5 === 0){
//         document.write(`${i} <br> <br> <br> `)
//     }
// }


//
//
//
//
// var q1 = prompt(1);
// var q2 = prompt(2);
//
// for (var i = q1; i >= q2; i--){
//     document.write(`${i} <br>`);
// }
//













//
// var ano = [];
//
// var mno = [];
//
// var k1 = true;
//
// var first = prompt("first");
// var second = prompt("second");
//
// for (var i = first; i <= second; i++) {
//
//     if (i % 2 === 0){
//         ano.push(i);
//     }
//
//     else mno.push(i);
//
//
//
//
// }
//
//
// console.log(mno);
// console.log(ano);



/*

var city = ["Karachi", "Islamabad", "Multan","Pishawar","Sakhar","Dholakpoor", "Pehelwaanpoor" ];
var city1 = ["Hydarabad", "Islamabad", "london","Pishawar","Lalookhet","Dholakpoor", "Pehelwaanpoor" ];
var khali = [];



for(var i = 1; i < city.length; i++ ){
    for (let j = 1; j <city1.length; j++) {
        if (city[i] === city1[j]){
            khali.push(city1[j])
        }
    }
}



console.log(khali);*/









//
/*
//
//
//
//
//
//
//
//
//
var tbl = `<table border="1">`;

for (var i = 1; i <= 8; i++) {
   tbl += `<tr>`;

   for (var j = 1; j <= 4; j++) {
      if (i % 2 === 1) {

         tbl += `<td class="black" style="height: 100px; width: 100px; background: black">`;
         tbl += `</td>`;

         tbl += `<td class="white" style="height: 100px; width: 100px; background: white">`;
         tbl += `</td>`;


      }

     else  if (i % 2 === 0) {


         tbl += `<td class="white" style="height: 100px; width: 100px; background: white">`;
         tbl += `</td>`;
         tbl += `<td class="black" style="height: 100px; width: 100px; background: black">`;
         tbl += `</td>`;

      }





   }
   tbl += `</tr>`

}


tbl += `</table>`;


// console.log(tbl);
//
//
// document.write(tbl);
// */

/*

var ae = prompt();
for (var i = 0; i <= ae.length; i++) {
 ae = ae.replace("A", "*");
 ae = ae.replace("E", "*");
 ae = ae.replace("I", "*");
 ae = ae.replace("O", "*");
 ae = ae.replace("U", "*");
 ae = ae.replace("a", "*");
 ae = ae.replace("e", "*");
 ae = ae.replace("i", "*");
 ae = ae.replace("o", "*");
 ae = ae.replace("u", "*");


}


console.log(ae);
document.write(ae);*/



var asd = prompt();
asd = asd.split(" ");
// asd = asd.join(" ");





var num =  0;



for (let i = 0; i < asd.length ; i++){



    if (asd[i].length % 2 === 0) {
        if (asd[i].indexOf(asd[i].charAt(num++)) % 2 === 0) {

            document.write(asd[i].toUpperCase())
        }
        else if (asd[i].indexOf(asd[i].charAt(num++)) % 2 === 1) {

            document.write(asd[i].toLowerCase());
        }

    }

}



// .substring(asd[1].charAt(1).toUpperCase())


/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/


function studentFinder(students) {
  // your code here
  var hasil = ''
  var kata = ''
  var terpendek = students.length
  for(var i = 0 ; i<=students.length ; i++){
      if (students[i-1] != " " && students[i] == " " || students[i] == "," && students[i-1] != "," || students[i] == undefined){
          if(kata.length < terpendek){
              terpendek = kata.length
              hasil = kata
          }
          kata = ''
      }
      else{
          kata += students[i]
      }
  }
  return hasil
}



console.log(studentFinder('Hanif Ranev Tio Tirta Igor Yusril Tia Titania')); // Tio
console.log(studentFinder('Yogi Hengky Trina An Hamzah')); // An
console.log(studentFinder('Huday,Kay,Trisna,Kinan,Hazman')); // Kay

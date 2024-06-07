//javascript'te değişkenler 3 tür olarak tanımlanır
/*
let ve var olarak tanımlanan değişkenlere daha sonra yeni değer atanablirken
const ile tanımlanan değişkenlerin değeri değiştirilemez
çitf ve tek tırnaklada çalışıyor
*/

let firstName= "Sumeyra"
var lastname = "Kahraman";
let age=44; //numbers
const IdNum=245638; //numbers

console.log(firstName)
console.log(age)
console.log(IdNum)
console.log("-----------------------")
console.log("Adı: "+firstName);
console.log('Soyadı: '+lastname);
console.log('Yaşı: '+age);
console.log('TCKN: '+IdNum);

firstName="Erol";
age=18


console.log("-----------------------")
console.log("Adı: "+firstName);
console.log('Soyadı: '+lastname);
console.log('Yaşı: '+age);
console.log('TCKN: '+IdNum);

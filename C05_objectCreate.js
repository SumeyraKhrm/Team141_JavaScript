
let ogrenci ={
    ad:"ahmet",
    soyad:"Bulut",
    Number:"9712",
    okul:"Eni Ecole"
}

//Bir nesne oluşturuken JSON data özelliğinden faydalanılır. Oluşuturulan nesenenin içine 
//{} arasında kalmak şartı ile birden fazla özellik eklenebilir.

console.log(ogrenci.Number)
console.log(ogrenci.okul)
console.log(ogrenci.ad)
console.log(ogrenci.soyad)

ogrenci.ad="murat"
console.log(ogrenci.ad)

var name = "Greace";
var age = 1;
var money = 400000;
const hargaJuice = 50000;
const hargaAnggur = 300000;
const uangTdkCukup = "Uang tidak cukup. Anda harus pulang.";
const uangCukup = "Anda bisa pesan minum. Sisa uang anda: ";

if (name == "") {
  console.log("Anda tidak boleh masuk");
} else {
  if (age <= 0) { 
    console.log("Masukan umur yang valid");
  } else if (age <= 17) {
    console.log("Anda boleh memesan juice");
    console.log("Harga juice adalah " + hargaJuice);
    if (money < hargaJuice) {
      console.log(uangTdkCukup);
    } else {
      console.log(uangCukup + (money-hargaJuice));
    }
  } else {
    console.log("Anda boleh memesan anggur");
    console.log("Harga anggur adalah " + hargaAnggur);
    if (money < hargaAnggur) {
      console.log(uangTdkCukup);
     } else {
      console.log(uangCukup + (money-hargaAnggur));
    }
  }
}
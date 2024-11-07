function myFirst() {
  myDisplayer('Nama saya Rendi Eko Kurniawan');
}

function mySecond(callback) {
  myDisplayer('Hello');
  callback();
}

function myDisplayer(message) {
  console.log(message);
}

mySecond(myFirst);

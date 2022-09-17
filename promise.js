const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

function getIXX(emosi) {
  return new Promise(resolve => {
    const theaterIXX = promiseTheaterIXX();
    const film1 = theaterIXX.then((data) => {
      const count = data.filter(item => item.hasil == emosi).length;
      resolve(count)
    });
  });
}
function getVGC(emosi) {
  return new Promise(resolve => {
    const theaterIXX = promiseTheaterIXX();
    const film1 = theaterIXX.then((data) => {
      const count = data.filter(item => item.hasil == emosi).length;
      resolve(count)
    });
  });
}
function promiseOutput(emosi) {
  return new Promise(resolve => {
    const ixxPromise = getIXX(emosi);
    const vgcPromise = getVGC(emosi);
    Promise.all([ixxPromise, vgcPromise]).then(([hasil1, hasil2]) => {
      resolve(hasil1 + hasil2);
    });
  })
}

const output = promiseOutput('marah');
output.then(respon => console.log("Jumlah : ", respon));


module.exports = {
  promiseOutput,
};



'use strict';

let response = require("./res");
let connection = require("./koneksi");

exports.index = (req, res) => {
    response.ok("Selamat datang di API REST", res)
};

// menampilkan database
exports.tampilsemuadata = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows) => {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
});
}
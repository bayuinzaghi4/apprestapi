'use strict';

const { response } = require("./res");
const { koneksi } = require("./koneksi");

exports.index = (req, res) => {
    response.ok("Selamat datang di API REST")
}
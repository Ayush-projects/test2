const express = require("express");
const app = express();
const fetch = require("cross-fetch");

let date = process.argv[2];
let month = process.argv[3];
let url = "https://history.muffinlabs.com/date/" + date + "/" + month;

fetch(url)
        .then(function (res1) {
            return res1.json();
        })
        .then(function (res2) {
               console.log(JSON.stringify(res2))
        });
        
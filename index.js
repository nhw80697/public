const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 5000



// var con = mysql.createConnection({
//   host: "sql7.freemysqlhosting.net",
//   user: "sql7357169",
//   password: "203564778",
//   database: "sql7357169"
// });

// con.connect(function(err) {
//   if (err) throw err;
// });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
app.all('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'),
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    // con.query("SELECT * FROM tt_table", function (err, result, fields) {
    //   // if (err) throw err;
    //   res.send(result);
    // });
    res.send("נפתלי וילהלם")
});

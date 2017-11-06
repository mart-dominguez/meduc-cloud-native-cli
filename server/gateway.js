var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const http = require('http');
 

var resultado = {id:1,nombre:"PEPEP"};
router.use(bodyParser.json());
router.route('/:subruta')
        .get(function (req, res, next) {
            http.get('http://localhost:9002/arq-app-productos-1.0-SNAPSHOT/api/'+req.params.subruta, (resp) => {
              let data = '';

              // A chunk of data has been recieved.
              resp.on('data', (chunk) => {
                data += chunk;
              });

              // The whole response has been received. Print out the result.
              resp.on('end', () => {
                res.setHeader('Content-Type', 'application/json');
                res.send( data );
                res.end();
              });

            }).on("error", (err) => {
              console.log("Error: " + err.message);
            });

      })
        .post(function (req, res, next) {
            console.log(req);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ resultado }));
            res.end();
        })
        .all(function (req, res, next) {});
  
module.exports = router;
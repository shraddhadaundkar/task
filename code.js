var jsonfile = require('jsonfile')
var fs = require("fs");
var Table = require('easy-table');
var file = 'source.json'
jsonfile.readFile(file, function(err, data) {
  
	var t = new Table
data.forEach(function(product) {
  t.cell('id', product.id)
  t.cell('  fname', product.fName)
  t.cell('lname', product.lName)
   t.cell('score', product.score)
  t.newRow()
})
t.sort(['score|des'])
console.log(t.toString()); 
fs.writeFile('destination.txt', t, {"encoding":'utf8'},  function(err) {
   if (err) {
      return console.error(err);
   } fs.readFile('destination.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
})

	

 
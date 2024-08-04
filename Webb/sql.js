  
const mysql = require('mysql2');
const connection = mysql.createConnection ({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'Duyngo123@',
  database: 'my2'  //tên database muốn kết nối
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

connection.query('SELECT * FROM customers', function(error, results, fields) {
	if(error)
		throw error;
		results.forEach(result => {
			console.log(result);
		});
});



/*
let tableContainer = document.getElementById("news");

let table = "<table>";


    table += `<td>1</td>`;
    table += `<td>2</td>`;
    table += `<td>3</td>`;


tableContainer.innerHTML=table;*/
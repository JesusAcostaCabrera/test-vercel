require("dotenv").config();
const mysql = require("mysql2");

function getSubjects(res) {
  // Create the connection to the database
  const connection = mysql.createConnection(process.env.DB_URL);
  connection.connect();

  connection.query("SELECT * FROM subjects", (error, results, fields) => {
    if (error) {
      return res.status(400).json({
        error: "Conexion a la Base de Datos fallida.",
      });
    } else {
      return res.status(200).json(results);
    }
  });
}

function insertSubject(code, name, description, credits, teacher, res) {
  const connection = mysql.createConnection(process.env.DB_URL);
  connection.connect();

  connection.query(
    `insert into subjects (code, name, description, credits, teacher) 
  values ('${code}','${name}','${description}',${credits},'${teacher}')`,
    (error, results, fields) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      } else {
        return res.status(200).json({ message: "Subject inserted" });
      }
    }
  );
}

function deleteSubject(code, res) {
  const connection = mysql.createConnection(process.env.DB_URL);
  connection.connect();

  connection.query(`delete from subjects where code='${code}'`,
    (error, results, fields) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      } else {
        return res.status(200).json({ message: "Subject deleted" });
      }
    }
  );
}
module.exports = { getSubjects, insertSubject, deleteSubject };

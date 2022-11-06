import mysql2 from "mysql2";

export const db = mysql2.createConnection({
  // host: "localhost",
  // username: "root",
  // password: "123123",
  host: "127.0.0.1",
  user: "root",
  password: "123123",
  port: "3306",
  database: "social",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("connect to database");
});

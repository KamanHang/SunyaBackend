const {Client} = require('pg')

const con = new Client({
    user:'postgres',
    host:'localhost',
    database:'sunya',
    password:'12345',
    port:5432
})
                                                                                                                

try {
    con.connect((error) => {
        if (error) {
            console.log("Database connection failed");
        } else {
            console.log("Database connected successfully!!");
        }
    });
} catch (error) {
    console.log("Error connecting to database:", error);
}


module.exports = con;
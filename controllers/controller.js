const { time } = require("console");
const con = require("../config/dbConfig");
const query = require("../queries/queries");
const bcrypt = require("bcryptjs");

const addPost = async (req, resp) => {
  const { post_desc, up_vote, tag } = req.body;
  image = req.file.path;

  let present_date = Date.now();

  let date_ob = new Date(present_date);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  const posted_date = year + "/" + month + "/" + date;

  const timeObject = new Date();

  const hours = timeObject.getHours();

  const minutes = timeObject.getMinutes();

  const post_time = hours + ":" + minutes;

  if (!post_desc || !up_vote || !tag || !image) {
    console.log("Please fill al the fields");

    resp.status(400).send("Please fill all the fields");
  } else {
    con.query(
      query.addNewPost,
      [post_desc, image, up_vote, posted_date, tag, post_time],
      async function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("post added Successfully");
          //   console.log(data);

          resp.send("post added Successfully");
          // console.log(data)
        }
      }
    );
  }
};

const addComment = async (req, resp) => {
  const { comment_desc } = req.body;

  let present_date = Date.now();

  let date_ob = new Date(present_date);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  const comment_date = year + "/" + month + "/" + date;

  if (!comment_desc) {
    console.log("Please fill al the fields");

    resp.status(400).send("Please fill all the fields");
  } else {
    con.query(
      query.addComment,
      [comment_desc, comment_date],
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("comment added Successfully");
          console.log(data);

          resp.send("comment added Successfully");
          // console.log(data)
        }
      }
    );
  }
};

const loginUser = async (req, resp) => {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  if (!email || !password) {
    console.log("Please fill al the fields");

    resp.status(400).send("Please fill all the fields");
  } else {
    con.query(query.getUserPassword, [email], async (error, result) => {
      console.log(result.rows[0].password);

      var dbPassword = result.rows[0].password;

      console.log(password);

      const passwordCheck = await bcrypt.compare(password, dbPassword);
      console.log(passwordCheck);

      if (passwordCheck == true) {
        console.log("login success");
        resp.status(200).send("Login successful");
      } else {
        resp.status(400).send("Login Failed");
      }
    });
  }
};

const signUpUser = (req, resp) => {
  const { user_name, password, email, image } = req.body;
  // image = req.file.path;

  console.log(user_name);
  console.log(password);
  console.log(email);
  console.log(image);

  const securePassword = async (password) => {
    const encryptPassword = await bcrypt.hash(password, 10);
    return encryptPassword;
  };

  try {
    con.query(query.signUpCheckQuery, [email], async function (err, data) {
      // console.log(data)

      if (err) {
        console.log(err);
        resp.send("An error occured");
        resp.status(404);
      } else if (data.rowCount > 0) {
        //checking if user with same email exits or not in the database
        console.log("User alredy exists");
        // console.log(`${data.rowCount}`);
        resp.send("User alredy exists");
        resp.status(404);
      } else if (!user_name || !password || !email || !image) {
        resp.send("Please fill all the fields");
        console.log("Please fill all the fields");
      } else {
        const hashedPassword = await securePassword(password);

        con.query(
          query.signUpInsertQuery,
          [user_name, hashedPassword, email, image],
          function (err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log("User Registered Successfully");
              resp.send("User Registration Successfully");
              // console.log(data)
            }
          }
        );
      }
    });
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

module.exports = {
  loginUser,
  signUpUser,
  addPost,
  addComment,
};

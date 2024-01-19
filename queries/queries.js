const getUserQuery = "SELECT password FROM patient WHERE password = $1";



const getUserPassword = "SELECT password FROM patient WHERE email = $1";

const loginQuery = "SELECT * FROM patient WHERE email = $1 AND password = $2";
const signUpCheckQuery = 'SELECT * FROM users WHERE email = $1';
const signUpInsertQuery = "INSERT INTO users (user_name , password, email, image) VALUES($1,$2,$3,$4)"

const addNewPost = "INSERT INTO posts ( post_desc,image,up_vote,posted_date,tag,post_time ) VALUES($1,$2,$3,$4,$5,$6) "
const addComment = "INSERT INTO comments ( comment_desc,comment_date ) VALUES($1,$2) "


module.exports = {
    getUserQuery,
    loginQuery,
    signUpCheckQuery,
    signUpInsertQuery,
    getUserPassword,
    addNewPost,
    addComment
};


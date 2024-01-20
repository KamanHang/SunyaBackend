const getUserQuery = "SELECT password FROM patient WHERE password = $1";



const getUserPassword = "SELECT user_name, email, image, password FROM users WHERE email = $1";


const loginQuery = "SELECT * FROM users WHERE email = $1 AND password = $2";
const signUpCheckQuery = 'SELECT * FROM users WHERE email = $1';
const signUpInsertQuery = "INSERT INTO users (user_name , password, email, image) VALUES($1,$2,$3,$4)"

const addNewPost = "INSERT INTO posts ( post_desc,image,up_vote,posted_date,tag,user_email,post_time ) VALUES($1,$2,$3,$4,$5,$6,$7) "
const addComment = "INSERT INTO comments ( comment_desc,comment_date ) VALUES($1,$2) "


const getPost = "SELECT post_desc,up_vote,posts.image,posted_date,post_time, user_name,users.image FROM posts inner JOIN users on posts.user_email=users.email;"
const getComment = "SELECT * FROM Comments WHERE post_id = $1 "


module.exports = {
    getUserQuery,
    loginQuery,
    signUpCheckQuery,
    signUpInsertQuery,
    getUserPassword,
    addNewPost,
    addComment,
    getPost,
    getComment
};


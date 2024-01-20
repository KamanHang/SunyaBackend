const getUserQuery = "SELECT password FROM patient WHERE password = $1";



const getUserPassword = "SELECT user_name, email, image, password FROM users WHERE email = $1";


const loginQuery = "SELECT * FROM users WHERE email = $1 AND password = $2";
const signUpCheckQuery = 'SELECT * FROM users WHERE email = $1';
const signUpInsertQuery = "INSERT INTO users (user_name , password, email, image) VALUES($1,$2,$3,$4)"

const addNewPost = "INSERT INTO posts ( post_desc,image,up_vote,posted_date,tag,user_email,post_time ) VALUES($1,$2,$3,$4,$5,$6,$7) "
const addComment = "INSERT INTO comments ( comment_desc,user_email,comment_date,post_id ) VALUES($1,$2,$3,$4) "

const getPost = "SELECT post_id,post_desc, up_vote, posts.image AS post_image, posted_date, post_time, tag,  user_name, users.image AS user_image FROM posts INNER JOIN users ON posts.user_email = users.email;"
const getComment = "SELECT comment_desc,comment_date,user_name,users.image as users_image  FROM Comments inner join users on comments.user_email = users.email WHERE post_id = $1";


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


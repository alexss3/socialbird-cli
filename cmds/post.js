const { addPost } = require('../utils/db');

module.exports = (username, message) => {
    addPost(username, message);
    return 'Added post';
}
const { getPosts } = require('../utils/db');
const postUtils = require('../utils/post');

module.exports = (username) => {
    return db.getPosts(username).map(post => {
        return postUtils.returnFormattedPost(post);
    });
};
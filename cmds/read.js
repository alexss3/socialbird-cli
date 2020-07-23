const { getPosts } = require('../utils/db');
const postUtils = require('../utils/post');

module.exports = (username) => {
    return getPosts(username).map(post => {
        return postUtils.returnFormattedPost(post);
    });
};
const { getPosts, getFollows } = require('../utils/db');
const { returnFormattedPost } = require('../utils/post');

module.exports = (username) => {
    // First load all posts for the user
    const userPosts = getPosts(username);

    // Find all users this user is following
    const following = getFollows(username);

    // Load posts from all followed users
    const wallPosts = following.reduce((acc, user) => {
        const followedPosts = getPosts(user.followee);
        return [...acc, ...followedPosts];
    }, [...userPosts]);

    // Sort all posts by datetime
    const sortedPosts = wallPosts.sort((a, b) => {
        return a.date - b.date;
    });

    // reverse the array order so it is descending order
    sortedPosts.reverse();

    return sortedPosts.map(post => {
        return returnFormattedPost(post);
    });
}
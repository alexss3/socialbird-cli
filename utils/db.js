const store = require('../data/store');

const addUser = (username) => {
    if (store.users.find(u => username.trim() === u) !== undefined) return;
    store.users.push(username.trim());
}

module.exports.addUser = addUser;

module.exports.findUser = (username) => {
    return store.users.filter(user => user === username);
}

module.exports.getUsers = () => {
    return store.users;
}

module.exports.addPost = (username, message) => {
    const post = {
        username,
        message,
        date: Date.now()
    };

    addUser(username);
    store.posts.push(post);
    return store.posts[store.posts.length-1];
}

module.exports.getPosts = (username) => {
    if (username === '') {
        return store.posts;
    }

    return store.posts.filter(post => post.username === username);
}

module.exports.addFollow = (follower, followee) => {
    store.follows.push({
        follower,
        followee
    });

    return store.follows[store.follows.length-1];
}

module.exports.getFollows = (username) => {
    if (username === undefined) {
        return store.follows;
    }

    return store.follows.filter(follow => follow.follower === username);
}
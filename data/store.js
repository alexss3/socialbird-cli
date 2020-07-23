module.exports = {
    users: [],
    posts: [],
    follows: [],
    clearStore: function() {
        this.users = [];
        this.posts = [];
        this.follows = [];
    }
};
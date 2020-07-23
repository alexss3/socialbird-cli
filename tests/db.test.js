const db = require('../utils/db');
const store = require('../data/store');


const addPost = () => {
    return db.addPost('TestUser', 'Test Message');
};

afterEach(() => {
    store.clearStore();
});

describe('users', () => {
    
    it('should insert a user that does not yet exist', () => {
        const user = 'Johnny';
        db.addUser(user);
        expect(store.users).toContain(user);
    });
    
    it('should return an empty array when the user does not exist', () => {
        const user = db.findUser('Maria');
        expect(user.length).toEqual(0);
    });
    
    it('should return an empty array when no users exist', () => {
        const users = db.getUsers();
        expect(users.length).toEqual(0);
    });

});

describe('posts', () => {

    it('should get an empty array of posts initially', () => {
        const posts = db.getPosts();
        expect(posts.length).toEqual(0);
    });

    it('should add a user and their post', () => {
        const post = addPost();

        expect(post).toHaveProperty('username');

        const posts = db.getPosts('TestUser');

        expect(posts[0].username).toEqual('TestUser');
        expect(posts[0].message).toEqual('Test Message');
    });

    it('should return all posts when no username provided', () => {
        const allPosts = db.getPosts();
        expect(allPosts.length).toEqual(0);
    });

    it('should return an empty array if invalid username give for getPosts', () => {
        addPost();
        const posts = db.getPosts('random');
        expect(posts.length).toEqual(0);
    });

});

describe('follow', () => {

    it('should add a follower/followee pair', () => {
        const pair = db.addFollow('Me', 'You');
        
        expect(pair).toHaveProperty('follower');
        expect(pair).toHaveProperty('followee');

        const followings = db.getFollows('Me');
        expect(followings[0].followee).toEqual('You');
    });

    it('should return all followings with no username provided', () => {
        const pair = db.addFollow('Me', 'You');
        const followings = db.getFollows();
        expect(followings.length).toEqual(1);
    });
});
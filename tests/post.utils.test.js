const post = require('../utils/post');


describe('post utils', () => {
    
    it('should return a formatted string with timestamp passed in', () => {
        const seconds = 15 * 1000;
        const secondsAgo = post.returnTimeSince(Date.now() - seconds);
        expect(secondsAgo).toEqual('15 seconds ago');
    
        const minutes = 10 * 60 * 1000;
        const minutesAgo = post.returnTimeSince(Date.now() - minutes);
        expect(minutesAgo).toEqual('10 minutes ago');
    
        const hours = 5 * 60 * 60 * 1000;
        const hoursAgo = post.returnTimeSince(Date.now() - hours);
        expect(hoursAgo).toEqual('5 hours ago');
    
        const days = 2 * 24 * 60 * 60 * 1000;
        const daysAgo = post.returnTimeSince(Date.now() - days);
        expect(daysAgo).toEqual('2 days ago');
    });

    it('should return an empty string if date is not an integer', () => {
        const timeFormatted = post.returnTimeSince('12335234623');
        expect(timeFormatted).toEqual('');
    });

    it('should return a formatted post string', () => {
        const tempPost = {
            username: 'Bob',
            message: 'My first post!',
            date: Date.now() - (13*1000)
        };

        const formattedPost = post.returnFormattedPost(tempPost);

        expect(formattedPost).toEqual(`${tempPost.username} - ${tempPost.message} (13 seconds ago)`);
    });

    // Some negative test cases would be ideal...

});
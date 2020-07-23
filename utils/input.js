const showHelp = require('../cmds/help');

module.exports = (input) => {

    if (input === '') {
        console.log(showHelp());
        return false;
    }

    let response = '';
    const splits = input.split(' ');

    try {
        if (splits.length > 1) {
            switch (splits[1]) {
                case '->':
                    // posting
                    const post = require('../cmds/post');
                    // console.log('Posting...');
                    const message = splits.slice(2).join(' ');
                    
                    response = post(splits[0], message);
                    console.log(response);
                    break;
        
                case 'follows':
                    // following
                    const follow = require('../cmds/follow');
                    response = follow(splits[0], splits[2]);
                    console.log(response);
                    break;
        
                case 'wall':
                    // wall
                    const wall = require('../cmds/wall');
                    const allPosts = wall(splits[0]);

                    allPosts.map(post => {
                        console.log(post);
                    });

                    break;
    
                default:
                    // invalid command
                    console.log('Invalid command');
                    break;
            }
        } else {
            if (splits[0] === 'help') {
                console.log(showHelp());
                return false;
            } else {
                // Check if username exists, if it does
                // then read their posts back
                const read = require('../cmds/read');
                const posts = read(splits[0]);

                if (posts.length === 0) console.log('Username not found');
                
                posts.map(post => {
                    console.log(post);
                });

            }
        }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
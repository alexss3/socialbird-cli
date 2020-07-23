const { getFollows, addFollow, findUser } = require('../utils/db');

module.exports = (follower, followee) => {
    // the follower will follow the followee
    // Make sure they don't follow themselves
    if (follower.toLowerCase() === followee.toLowerCase()) return `${follower} cannot follow themselves`;
    // Check if the followee exists
    if (findUser(followee).length === 0) return `Cannot follow non-existent user ${followee}`;

    // check to see if this combination already
    // exists in the store
    const exists = getFollows(follower).filter(subscription => {
        return subscription.follower.toLowerCase() === follower.toLowerCase() 
            && subscription.followee.toLowerCase() === followee.toLowerCase();
    });

    // Return if they are already following said user
    if (exists.length) return `${follower} is already following ${followee}`;

    // Otherwise, add the follow to the store
    addFollow(follower, followee);

    return `${follower} is now following ${followee}`;
}
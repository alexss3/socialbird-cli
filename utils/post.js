const returnTimeSince = (timestamp) => {
    // this is very rough and naive, but gets the job
    // done for now.

    if (!Number.isInteger(timestamp)) return '';

    const now = Date.now();
    // Get the delta in seconds (it is milliseconds by default)
    const delta = (now - timestamp) / 1000;

    if (delta < 60) {

        return `${Math.floor(delta)} seconds ago`;

    } else if (delta > 60 && delta < 3600) {

        const minutes = Math.floor(delta/60);

        return `${minutes} minutes ago`;
    } else if (delta > 3600 && delta < 86400) {

        const hours = Math.floor(delta/60/60);
        return `${hours} hours ago`;

    } else {

        const days = Math.floor(delta/60/60/24);
        return `${days} days ago`;

    }
}

module.exports.returnTimeSince = returnTimeSince;

module.exports.returnFormattedPost = (post) => {
    // severely lacking input validation
    const timeSince = returnTimeSince(post.date);
    return `${post.username} - ${post.message} (${timeSince})`;
}
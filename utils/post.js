const returnTimeSince = (timestamp) => {
    // this is very rough and naive, but gets the job
    // done for now.

    if (!Number.isInteger(timestamp)) return '';

    const now = Date.now();
    // Get the delta in seconds (it is milliseconds by default)
    const delta = (now - timestamp) / 1000;

    if (delta < 60) {
        const s = (delta > 1) ? 's' : '';

        return `${Math.floor(delta)} second${s} ago`;

    } else if (delta > 60 && delta < 3600) {

        const minutes = Math.floor(delta/60);
        const s = (minutes > 1) ? 's' : '';

        return `${minutes} minute${s} ago`;
    } else if (delta > 3600 && delta < 86400) {

        const hours = Math.floor(delta/60/60);
        const s = (hours > 1) ? 's' : '';
        return `${hours} hour${s} ago`;

    } else {

        const days = Math.floor(delta/60/60/24);
        const s = (days > 1) ? 's' : '';
        return `${days} day${s} ago`;

    } 
    // ... weeks, months, years
}

module.exports.returnTimeSince = returnTimeSince;

module.exports.returnFormattedPost = (post) => {
    // severely lacking input validation
    const timeSince = returnTimeSince(post.date);
    return `${post.username} - ${post.message} (${timeSince})`;
}
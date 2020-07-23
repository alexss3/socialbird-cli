module.exports = () => {
    return `
    SocialBird CLI Help

    Usage: <username> [command] <option>

    Help: help

    Exit: exit
    
    Posting: <username> -> text

    Reading: <username>

    Following: <username> follows <username>

    Wall: <username> wall

    *Note - usernames are NOT case sensitive, i.e. User == uSeR
    `;
};
// Random Sumbangan Icon

// Taken from: https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/
const getRandomIntegerInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function RandomSumbanganIcon() {
    // rid = Random ID
    const rid = getRandomIntegerInclusive(0, 2);
    
    if (rid === 1) {
        return (
            <i className="bi bi-chat-heart"></i>
        );
    } else if (rid === 2) {
        return (
            <i className="bi bi-chat-left-heart"></i>
        );
    } else {
        return (
            <i className="bi bi-heart"></i>
        );
    }
}

export default RandomSumbanganIcon;
  
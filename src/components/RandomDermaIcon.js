// Random Derma Icon
import getRandomIntegerInclusive from "../utils/getRandomIntegerInclusive";

function RandomDermaIcon() {
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

export default RandomDermaIcon;
  
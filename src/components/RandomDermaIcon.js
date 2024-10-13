// Random Derma Icon
import getRandomIntegerInclusive from "../utils/getRandomIntegerInclusive";

function RandomDermaIcon() {
    const icons = [
        <i className="bi bi-chat-dots"></i>,
        <i className="bi bi-chat-fill"></i>,
        <i className="bi bi-chat-heart"></i>,
        <i className="bi bi-chat-left"></i>,
        <i className="bi bi-chat-left-dots"></i>,
        <i className="bi bi-chat-left-heart"></i>,
        <i className="bi bi-chat-left-quote"></i>,
        <i className="bi bi-chat-left-quote-fill"></i>,
        <i className="bi bi-chat-left-text"></i>,
        <i className="bi bi-chat-left-text-fill"></i>,
        <i className="bi bi-chat-quote"></i>,
        <i className="bi bi-chat-quote-fill"></i>,
        <i className="bi bi-chat"></i>
    ];
    const rid = getRandomIntegerInclusive(0, icons.length - 1); // rid = Random ID

    return icons[rid];
}

export default RandomDermaIcon;
  
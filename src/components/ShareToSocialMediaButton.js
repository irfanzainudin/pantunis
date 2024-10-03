import React from "react";

function ShareToSocialMediaButton({ socmed, socmedAbbreviation, postTitle, postUrl }) {
    return (
        <a
            type="button"
            class="btn"
            id={`share-on-${socmedAbbreviation}`}
            href={`https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`}
        >
            {/* Share on <i className="bi bi-facebook"></i> Facebook */}
            {/* Share on <i className="bi bi-whatsapp"></i> Whatsapp */}
            {/* Share on <i className="bi bi-twitter-x"></i> X (also known as <i className="bi bi-twitter"></i> Twitter) */}
            {/* Share on <i className="bi bi-instagram"></i> Instagram */}
            {/* Share on <i className="bi bi-linkedin"></i> LinkedIn */}
            Share on <i className={`bi bi-${socmed}`}></i>
        </a>
    )
}

export default ShareToSocialMediaButton;
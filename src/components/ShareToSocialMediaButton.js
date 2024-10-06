import React from "react";
import logoSVG from "../logo.svg";

function ShareToSocialMediaButton({ socmed, socmedAbbreviation, pantun })
{
    // Post title & url
    const postTitleUnescaped = `${pantun.pantun_bayang1 + '\n' + pantun.pantun_bayang2 + '\n' + pantun.pantun_maksud1 + '\n' + pantun.pantun_maksud2 + '\n\n'}Dikumpul dengan kasih di #Pantunis. Info lebih:${'\n'}`;
    const postTitle = encodeURIComponent(postTitleUnescaped);
    const postUrl = `https://pantunis.com/pantun/${pantun.pantun_id}`;
    
    // Links
    const fbLink = `https://www.facebook.com/sharer.php?u=${postUrl}`;
    const waLink = `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`;
    const xLink = `https://twitter.com/share?url=${postUrl}&text=${postTitle}`;
    const liLink = `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`;
    // const igLink = ``;
    
    const whichSocMed = () => {
        if (socmedAbbreviation === "fb") {
            return fbLink;
        } else if (socmedAbbreviation === "wa") {
            return waLink;
        } else if (socmedAbbreviation === "x") {
            return xLink;
        } else if (socmedAbbreviation === "ig") {
            // return igLink;
            shareImageAsset();
        } else {
            return liLink;
        }
    }

    const shareImageAsset = async () => {
        const blobImageAsset = new Blob([logoSVG], {
            type: 'image/svg+xml'
        });
        
        const filesArray = [
            new File([blobImageAsset], `${postTitle}.png`, {
                type: 'image/png',
                lastModified: new Date().getTime(),
            }),
        ];
        
        const shareData = {
            title: `${postTitle}`,
            files: filesArray,
        };
    
        if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData);
        }
    };
    
    return socmedAbbreviation === "ig" || socmedAbbreviation === "li" ? (
        <a
            type="button"
            className="btn btn-lg disabled"
            id={`share-on-${socmedAbbreviation}`}
            href={whichSocMed()}
            target="_blank"
            rel="noreferrer"
        >
            Kongsikan di <i className={`bi bi-${socmed}`}></i> {socmed.charAt(0).toUpperCase() + socmed.slice(1)} <span className="badge bg-dark">Akan Datang</span>
        </a>
        )
        :
        (
        <a
            type="button"
            className="btn btn-lg"
            id={`share-on-${socmedAbbreviation}`}
            href={whichSocMed()}
            target="_blank"
            rel="noreferrer"
        >
            {
            socmedAbbreviation === "x" ?
            <span>Kongsikan di <i className={`bi bi-${socmed}`}></i> {socmed.charAt(0).toUpperCase() + socmed.slice(1, socmed.length - 2)}</span>
            :
            <span>Kongsikan di <i className={`bi bi-${socmed}`}></i> {socmed.charAt(0).toUpperCase() + socmed.slice(1)}</span>
            }
        </a>
    );
}

export default ShareToSocialMediaButton;
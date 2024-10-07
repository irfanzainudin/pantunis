export default function getHighlightedText(text, highlight) {
  // Split text on highlight term, include term itself into parts, ignore case
  const parts = text.split(new RegExp(`(${escapeRegExp(highlight)})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <b key={i}>{part}</b>
        ) : (
          part
        )
      )}
    </span>
  );
}

// Put backslash in front of special characters. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

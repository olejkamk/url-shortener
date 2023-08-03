import React, { useState } from "react";
import { useUrlShortener } from "../UrlShortenerContext";
import { Button } from "react-bootstrap";
import { Clipboard } from "react-bootstrap-icons";

const ShortUrl = () => {
  // Get the shortUrl, getLongUrl, and isNewUrl from the UrlShortenerContext using the custom hook useUrlShortener.
  const { shortUrl, getLongUrl, isNewUrl } = useUrlShortener();

  // Define a state variable to track whether the URL is copied to clipboard or not.
  const [isCopied, setIsCopied] = useState(false);

  // Define a function to handle copying the short URL to clipboard.
  const handleCopyToClipboard = () => {
    // Create a temporary input element to copy the short URL.
    const tempInput = document.createElement("input");
    tempInput.value = shortUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    // Update the isCopied state to true after copying.
    setIsCopied(true);
  };

  // Render the content based on whether the shortUrl is available or not.
  return (
    <div className="short-url">
      {!shortUrl ? (
        // If shortUrl is not available, display a message.
        <p>No URL shortened yet</p>
      ) : (
        // If shortUrl is available, display the shortened URL and original URL.
        <>
          <p className={`mb-2 ${isNewUrl ? "text-success" : "text-primary"}`}>
            {isNewUrl ? "Newly Shortened URL:" : "Reused Shortened URL:"}
          </p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mb-2"
          >
            {shortUrl}
          </a>
          <p className="mb-3">Original URL: {getLongUrl(shortUrl)}</p>
          <Button
            variant={isCopied ? "success" : "primary"}
            onClick={handleCopyToClipboard}
            className="copy-button"
          >
            <Clipboard size={20} /> {isCopied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </>
      )}
    </div>
  );
};

export default ShortUrl;

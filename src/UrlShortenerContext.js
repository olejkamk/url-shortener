import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create a new context called UrlShortenerContext.
const UrlShortenerContext = createContext();

// Define the provider component for the context.
const UrlShortenerProvider = ({ children }) => {
  // Define state variables to store the shortened URL and URL mappings.
  const [shortUrl, setShortUrl] = useState(null);
  const [urlMap, setUrlMap] = useState([]);

  // Define the base used for generating the short codes.
  // In this case, it is set to 36, which is the length of the character set used later.
  const base = 36;

  // Define the desired length of the short codes.
  const shortCodeLength = 6;

  // Define a function to generate a short code from a unique ID.
  const generateShortCode = (id) => {
    // Shorter character set for the short codes (lowercase letters and digits).
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let shortCode = "";
    while (id > 0) {
      // Calculate the remainder to get the index in the character set.
      const remainder = id % base;
      // Concatenate the character at the remainder index to the short code.
      shortCode = characters.charAt(remainder) + shortCode;
      // Move to the next set of digits in the unique ID.
      id = Math.floor(id / base);
    }
    // Pad with leading zeros to achieve the fixed short code length.
    while (shortCode.length < shortCodeLength) {
      shortCode = characters.charAt(0) + shortCode;
    }
    return shortCode;
  };

  // Define additional state variable to keep track of whether the URL is newly shortened or reused.
  const [isNewUrl, setIsNewUrl] = useState(false);

  // Define a function to shorten a given long URL.
  const shortenUrl = (longUrl) => {
    // Check if the long URL already exists in the URL map.
    const existingEntry = urlMap.find((entry) => entry.longUrl === longUrl);

    // If the long URL already has a corresponding short code, use it.
    if (existingEntry) {
      setShortUrl(existingEntry.shortUrl);
      setIsNewUrl(false); // Set isNewUrl to false since the URL is reused.
    } else {
      // Generate a unique ID based on the current timestamp.
      const uniqueId = Date.now();
      // Generate a short code from the unique ID.
      const shortCode = generateShortCode(uniqueId);
      // Create the shortened URL using the short code.
      const shortUrl = `https://short-url.com/${shortCode}`;
      // Store the mapping between short code and long URL in the URL map.
      setUrlMap((prevMap) => [...prevMap, { shortCode, longUrl, shortUrl }]);
      // Set the short URL in the state.
      setShortUrl(shortUrl);
      setIsNewUrl(true); // Set isNewUrl to true since the URL is newly shortened.
    }
  };

  // Define a function to get the original long URL from a given short URL.
  const getLongUrl = (shortUrl) => {
    // Extract the short code from the URL.
    const shortCode = shortUrl.split("/").pop();
    // Find the entry in the URL map that matches the short code.
    const entry = urlMap.find((item) => item.shortCode === shortCode);
    // Return the corresponding long URL if found, otherwise return null.
    return entry ? entry.longUrl : null;
  };

  // Provide the shortening and retrieval functionalities through the context.
  return (
    <UrlShortenerContext.Provider
      value={{ shortUrl, shortenUrl, getLongUrl, urlMap, isNewUrl }}
    >
      {children}
    </UrlShortenerContext.Provider>
  );
};

// Define a custom hook to easily access the values from the UrlShortenerContext.
const useUrlShortener = () => {
  return useContext(UrlShortenerContext);
};

// Export the UrlShortenerProvider and useUrlShortener for other components to use.
export { UrlShortenerProvider, useUrlShortener };

UrlShortenerProvider.propTypes = {
  children: PropTypes.node,
};

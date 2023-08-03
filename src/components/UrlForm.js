import React, { useState } from "react";
import { useUrlShortener } from "../UrlShortenerContext";

const UrlForm = () => {
  // Get the shortenUrl function from the UrlShortenerContext using the custom hook useUrlShortener.
  const { shortenUrl } = useUrlShortener();

  // Define a state variable to hold the long URL entered by the user.
  const [longUrl, setLongUrl] = useState("");

  // Define a function to handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the shortenUrl function from the context with the longUrl as an argument.
    // This will generate a short URL for the entered long URL.
    shortenUrl(longUrl);
  };

  // Render the URL shortening form.
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      {/* Create an input field for the user to enter the long URL. */}
      <div className="input-group">
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="form-control"
          placeholder="Enter your long URL"
          required
        />
        {/* Create a submit button to trigger the form submission. */}
        <div className="input-group-append ms-2">
          <button type="submit" className="btn btn-primary">
            Shorten
          </button>
        </div>
      </div>
    </form>
  );
};

export default UrlForm;

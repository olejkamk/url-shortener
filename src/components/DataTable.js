import React from "react";
import { useUrlShortener } from "../UrlShortenerContext";
import { Table } from "react-bootstrap";

const DataTable = () => {
  // Get the urlMap from the UrlShortenerContext using the custom hook useUrlShortener.
  const { urlMap } = useUrlShortener();

  // Render the data table or a message if no URL mappings are available.
  return (
    <div className="data-table mt-5">
      <h2>URL Mapping Table</h2>
      {urlMap.length ? (
        // If there are URL mappings in the urlMap array, display the table.
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Short Code</th>
                <th>Shortened URL</th>
                <th>Original URL</th>
              </tr>
            </thead>
            <tbody>
              {urlMap.map((entry) => (
                // Map through the urlMap array and render each entry as a row in the table.
                <tr key={entry.shortCode}>
                  <td>{entry.shortCode}</td>
                  <td>
                    <a
                      href={entry.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {entry.shortUrl}
                    </a>
                  </td>
                  <td>{entry.longUrl}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        // If no URL mappings are available, display a message.
        <p>No URL mappings available.</p>
      )}
    </div>
  );
};

export default DataTable;

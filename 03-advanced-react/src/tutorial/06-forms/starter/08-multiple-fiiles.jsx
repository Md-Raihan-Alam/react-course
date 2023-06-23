import React, { useState } from "react";

function FileUploadMultiple() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUploadClick = () => {
    if (selectedFiles.length === 0) {
      return;
    }

    const formData = new FormData();

    selectedFiles.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });

    // Upload the files using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />

      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>
            {file.name} - {file.type}
          </li>
        ))}
      </ul>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default FileUploadMultiple;

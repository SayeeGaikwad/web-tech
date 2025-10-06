import React, { useState } from "react";

function FileHandler() {
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (event) => {
      setFileContent(event.target.result);
    };

    reader.onerror = () => {
      alert("Error reading file");
    };

    reader.readAsText(file); // Reads file as text
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>File Handling in React</h2>
      <input type="file" onChange={handleFileChange} />
      {fileName && <h3>File Name: {fileName}</h3>}
      {fileContent && (
        <div>
          <h4>File Content:</h4>
          <pre
            style={{
              backgroundColor: "#f4f4f4",
              padding: "10px",
              borderRadius: "5px",
              maxHeight: "300px",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            {fileContent}
          </pre>
        </div>
      )}
    </div>
  );
}

export default FileHandler;

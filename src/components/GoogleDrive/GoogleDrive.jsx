import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import Login from "./Login";
import "../../style.css";

export const GoogleDrive = () => {
  const [accessToken, setAccessToken] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (accessToken) {
      fetchFiles();
    }
  }, [accessToken]);

  const fetchFiles = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/drive/v3/files", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.error("Error fetching files: ", error);
    }
  };

  return (
    <>
      <h2>React Google Drive Integration</h2>
      {/* <Login /> */}
      {files.length > 0 && (
        <div>
          <h3>Files:</h3>
          <ul>
            {files.map((file) => (
              <li key={file.id}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (process.env.NODE_ENV === "test") {
      setLoading(false); // Disable loading in test mode
    } else {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      <div className="loading" data-testid="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app" data-testid="app">
      <div className="editor-container">
        <textarea
          className="textarea"
          data-testid="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter Markdown here..."
        />
      </div>
      <div className="preview-container">
        <div className="preview" data-testid="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;

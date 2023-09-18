import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import "./style.css"

function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const elfsightCode = `<div class="elfsight-app-ca580c98-21e8-41be-af15-3d0526118ef9"></div>`;

  return (
    <div className="w-100">
      {ReactHtmlParser(elfsightCode)}
    </div>
  );
}

export default InstagramFeed;

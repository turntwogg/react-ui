import React from 'react';

const Reset = () => (
  <style jsx global>{`
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    html {
      box-sizing: border-box;
      font-size: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    blockquote {
      margin-top: 0;
      margin-bottom: 12px;
    }

    strong {
      font-weight: 700 !important;
    }

    img {
      max-width: 100%;
      vertical-align: middle;
    }

    a {
      text-decoration: none;
    }

    table {
      width: 100%;
    }

    ul,
    ol {
      padding: 0;
      list-style: none;
    }
  `}</style>
);

export default Reset;

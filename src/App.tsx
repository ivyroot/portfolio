import React from 'react';
import './App.css';
import { items } from './components/PortfolioItems';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">ivyroot</h1>
        <p className="subtitle">
          crypto dev
        </p>
      </div>
      <div className="list">
        {items.map((item) => (
          <a
            key={item.title}
            className="item"
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="itemTitle">
              <span>{item.title}</span>
              <svg
                className="ext"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                focusable="false"
              >
                <path
                  d="M14 3h7v7m0-7L10 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 13v7H3V3h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="itemDesc">{item.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';

const rootElement = document.getElementById('react-root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
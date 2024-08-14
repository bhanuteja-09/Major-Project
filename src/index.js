import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import App from './App';
import './index.css'; // Import global styles if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <AuthProvider>
//   <App />
// </AuthProvider>,
 <React.StrictMode>
    <App />
  </React.StrictMode>
);

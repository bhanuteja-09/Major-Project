import React, { useState } from 'react';

const Modal = ({ show, handleClose }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(''); // State to handle error messages

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(''); // Clear error when a file is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully');
        handleClose();
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      alert('Error uploading file');
    }
  };

  if (!show) return null;

  return (
    <div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            position: relative;
            width: 80%;
            max-width: 500px;
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.2rem;
          }

          .modal-content h2 {
            margin: 0;
            padding-bottom: 10px;
          }

          .modal-content form {
            display: flex;
            flex-direction: column;
          }

          .modal-content input[type="file"] {
            margin-bottom: 10px;
            color: black;
          }

          .button1 {
            background-color: blue;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
          }

          .button1:hover {
            background-color: darkblue;
          }

          .error-message {
            color: red;
            margin-bottom: 10px;
          }
        `}
      </style>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={handleClose}>X</button>
          <h2>Upload Your CV</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button className="button1" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

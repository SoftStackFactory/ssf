import React, { useState, useEffect } from 'react';
import './modal.css'; // You'll style the modal using CSS

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open the modal when the component is mounted
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>SoftStack Factory as a Code School is Sunset</h1>
        <p>
          Since it was established in 2015, SoftStack Factory has helped hundreds of individuals from all walks of life gain exposure to the technology landscape and gain access to new growth opportunities as a coding school.
        </p>
        <p>Change is inevitable and the coding school initiative is now sunset.</p>
        <p>We’re hard at work developing our next stage of contribution to the community and we want to thank everyone involved who has helped SoftStack Factory.</p>
        <p>Our new mission will focus on helping other organizations with their technical initiatives.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

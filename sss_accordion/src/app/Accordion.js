import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const styles = {
    accordion: {
      margin: '10px 0',
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      //borderBottom: '1px solid #ccc',
      padding: '10px',
    },
    title: {
      flex: 1,
      textAlign: 'left',
    },
    button: {
      backgroundColor: '#96C6E5',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      borderRadius: '5px'
    },
    content: {
      padding: '10px',
    },
  };

  return (
    <div style={styles.accordion}>
      <div style={styles.titleContainer}>
        <span style={styles.title}><strong>{title}</strong></span>
        <button style={styles.button} onClick={handleToggleAccordion}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div style={styles.content}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;

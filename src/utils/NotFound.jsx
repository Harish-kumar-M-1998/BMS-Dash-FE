import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.message}>Oops! Page not found.</p>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6', // Light gray background
  },
  content: {
    textAlign: 'center',
    animation: 'fade-in 0.5s ease-in-out',
  },
  heading: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#4b5563', // Gray color
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    color: '#6b7280', // Gray color
    marginBottom: '2rem',
  },
};

// Add keyframes for fade-in animation using a style tag
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default NotFound;

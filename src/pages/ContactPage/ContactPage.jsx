// Import required libraries
import React from 'react';
import './ContactPage.styles.scss';



// Define the primary button component
const PrimaryButton = ({ children }) => {
  return <button className="primary">{children}</button>;
};

// Define the outline button component
const OutlineButton = ({ children }) => {
  return <button className="outline">{children}</button>;
};

// Define the social icon component


// Define the main functional component
const ContactPage = () => {
  // Add state for handling the theme
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Function to handle theme switching
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the body class based on the theme
  React.useEffect(() => {
    document.body.classList = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <div className={`theme-switch-wrapper ${isDarkMode ? 'dark' : ''}`}>
      <span id="toggle-icon" onClick={toggleTheme}>
        <span className="toggle-text">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
        {isDarkMode ? <i className='fas fa-moon' /> : <i className='fas fa-sun' />}
      </span>
      <nav id="nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <section id="home">
        <div className="title-group">
          <h1>Custom Title Here</h1>
          <h2>Welcome to the Website!</h2>
        </div>
      </section>
      <section id="about">
        <h1>Undraw Illustrations</h1>
        <div className="about-container">
          <div className="image-container">
            <h2>Web Innovation</h2>
            <img
              src="img/undraw_proud_coder_light.svg"
              alt="proud coder"
              id="image1"
            />
          </div>
          <div className="image-container">
            <h2>Problem Solving</h2>
            <img
              src="img/undraw_feeling_proud_light.svg"
              alt="undraw feeling"
              id="image2"
            />
          </div>
          <div className="image-container">
            <h2>High Concept</h2>
            <img
              src="img/undraw_conceptual_idea_light.svg"
              alt="idea"
              id="image3"
            />
          </div>
        </div>
      </section>
      <section id="projects">
        <h1>Buttons</h1>
        <div className="buttons">
          <PrimaryButton>Primary</PrimaryButton>
          <OutlineButton>Secondary</OutlineButton>
          <PrimaryButton disabled>Disabled</PrimaryButton>
          <OutlineButton>Outline</OutlineButton>
          <OutlineButton className="secondary">Alt Outline</OutlineButton>
          <OutlineButton disabled>Disabled</OutlineButton>
        </div>
        <div className="text-box" id="text-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            accusantium nemo dolorem? Quos, praesentium. Ex, quod asperiores! Id
            eveniet illo, provident corporis labore nesciunt accusamus alias
            laboriosam sapiente consequuntur inventore!
          </p>
        </div>
      </section>
      <section id="contact">
        <h1>contact</h1>

      </section>
    </div>
  );
};

// Export the main functional component
export default ContactPage;
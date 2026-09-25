import "../Styles/About.css";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-heading-block">
          <h1 className="about-heading">About Me</h1>
        </div>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >◂ Home</button>
      </header>
      
    </div>
  )
}
export default About;
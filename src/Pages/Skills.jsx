import "../Styles/Skills.css";
import { useNavigate } from 'react-router-dom';

function Skills() {
  const navigate = useNavigate();

  return (
    <div className="skills-page">
      <header className="skills-header">
        <div className="skills-heading-block">
          <h1 className="skills-heading">Skills</h1>
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
export default Skills;
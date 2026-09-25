import "../Styles/Education.css";
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();

  return (
    <div className="education-page">
      <header className="education-header">
        <div className="education-heading-block">
          <h1 className="education-heading">Education</h1>
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
export default Education;
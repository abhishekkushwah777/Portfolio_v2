import { useMemo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { client } from "../lib/sanityClient";
import { getProjects, getSkills } from '../DataImport';
import { urlFor } from "../imageurl";
import Icon from '../Components/Icons';
import '../Styles/Projects.css';




// One entry per niche the filter understands. "all" is the unfiltered view.
const NICHES = [
  { key: 'all', label: 'All Work' },
  { key: 'sketching', label: 'Sketching' },
  { key: 'designing', label: 'Graphic Design' },
  { key: 'web', label: 'Web Development' },
  { key: 'video-editing', label: 'Video Editing' },
];

// Small glyph per niche — keeps the tabs and thumbnails legible without an icon library.
const NICHE_ICON = {
  'sketching': '✎',
  'designing': '◆',
  'web': '</>',
  'video-editing': '▶',
};

// Replace with real project data / API results. Likes drive the default sort order.
// const PROJECTS = [
//   { id: 1, title: 'Riverbend Study', niche: 'sketching', likes: 142, blurb: 'Graphite studies of light on moving water, done over a week at the riverbank.' },
//   { id: 2, title: 'Nocturne Poster Series', niche: 'design', likes: 289, blurb: 'A five-piece poster set for a jazz club, built around type-as-texture.' },
//   { id: 3, title: 'Tideline — Habit Tracker', niche: 'web', likes: 356, blurb: 'A React + Node habit tracker with offline sync and streak visualisations.' },
//   { id: 4, title: 'Six Seconds', niche: 'video editing', likes: 198, blurb: 'A rapid-cut short film edited entirely from single-take phone footage.' },
//   { id: 5, title: 'Portrait Sketchbook Vol. 2', niche: 'sketching', likes: 97, blurb: 'Charcoal portrait studies exploring expression under harsh side light.' },
//   { id: 6, title: 'Cardamom Coffee Rebrand', niche: 'design', likes: 224, blurb: 'Full identity refresh for a specialty coffee roaster — mark, packaging, signage.' },
//   { id: 7, title: 'Loomstate CLI', niche: 'web', likes: 134, blurb: 'A command-line scaffolding tool for design-system component libraries.' },
//   { id: 8, title: 'Field Notes: Monsoon', niche: 'video editing', likes: 311, blurb: 'A four-minute documentary edit following a monsoon season in the hills.' },
// };






export default function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [activeNiche, setActiveNiche] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (projectId) => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredProject(projectId);
    }, 250); // Delay in milliseconds
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setHoveredProject(null);
  };

  useEffect(() => {
    async function loadData() {
      const [projectsData, skillsData] = await Promise.all([
        getProjects(),
        getSkills(),
      ]);

      setProjects(projectsData);
      setSkills(skillsData);
      console.log("Projects data loaded:", projectsData);
      console.log("Skills data loaded:", skillsData);
    }

    loadData();
  }, []);



async function likeProject(projectId) {
  await client
    .patch(projectId)
    .inc({ likes: 1 })
    .commit();
}




  // Filter first, then always sort by likes (desc) — matches "unfiltered = all, sorted by likes".
  const filteredProjects = useMemo(() => {
    const filtered =
      activeNiche === 'all' ? projects : projects.filter((p) => p.niche === activeNiche);
    return [...filtered].sort((a, b) => b.likes - a.likes);
  }, [projects, activeNiche]);

  return (
    <div className="projects-page">
      <header className="projects-header">
        <div className="projects-heading-block">
          <h1 className="projects-heading">Projects</h1>
        </div>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >◂ Home</button>
      </header>

      <div className="projects-toolbar">
        <div className="niche-filters" role="tablist" aria-label="Filter projects by niche">
          {NICHES.map((niche) => (
            <button
              key={niche.key}
              type="button"
              role="tab"
              aria-selected={activeNiche === niche.key}
              className={`niche-tab niche-tab--${niche.key} ${
                activeNiche === niche.key ? 'is-active' : ''
              }`}
              onClick={() => setActiveNiche(niche.key)}
            >
              {niche.key !== 'all' && (
                <span className="niche-tab-icon">{NICHE_ICON[niche.key]}</span>
              )}
              {niche.label}
            </button>
          ))}
        </div>

        <span className="sort-note">Sorted by likes</span>
      </div>

      {projects.length === 0 ? (
        <p className="empty-state">No projects in this category yet.</p>
      ) : (
        <ul className="projects-grid">
          {filteredProjects.map((project) => (
            <li key={project._id} className={`project-card project-card--${project.niche} ${hoveredProject === project._id ? "active" : ""}`} onMouseEnter={() => handleMouseEnter(project._id)} onMouseLeave={handleMouseLeave}>
              <div className="project-thumb">
                <img src={urlFor(project.thumbnail)} alt={project.name} />
              </div>
              <div className="live-link">
                <button className='live-link-btn'><a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Icon name="externalLink" />
                </a></button>
              </div>
              <div className="project-body">
                <div className="like-section">
                  <span className={`project-tag project-tag--${project.niche}`}>
                    {NICHES.find((n) => n.key === project.niche).label}
                  </span>
                  {/* <span className="project-likes">
                      {project.likes}
                      <span className="heart-icon" aria-hidden="true">♥</span>
                  </span> */}
                </div>
                <h2 className="project-title">{project.name}</h2>
                <p className="project-blurb">{project.description}</p>
                <div className="project-meta">
                <span>
                  {project.skills.map((skill) => (
                  <p key={skill} className="project-skill">
                    {`• ${skill}`}
                  </p>
                  ))}
                </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

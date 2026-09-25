import "../Styles/Home.css";
import Navbar from "../Components/NavBar";
import Button from "../Components/Buttons";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { AppContext } from "../themeContext";

import { useEffect, useRef } from "react";

function Home() {
    const { darkMode } = useContext(AppContext);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [darkMode]);

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <section className="home">
                <video ref={videoRef} autoPlay muted loop playsInline>
                    <source
                        src={darkMode ? "/BG_dark_1080p.webm" : "/BG_light_1080p.webm"}
                        type="video/webm"
                    />
                </video>
                <div style={{ backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)' }} className="vid-overlay"></div>
                <div className="title">
                    <h1>
                        ABHISHEK<br />
                        KUSHWAH
                    </h1>
                    <TypeAnimation
                        className="animated-text"
                        sequence={[
                            "Software Engineer",
                            1000,
                            "Web Developer",
                            1000,
                            "UI/UX Designer",
                            1000,
                            "Sketch Artist",
                            1000,
                            "Video Editor",
                            1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                    <p>
                        I make things look good, work well, and occasionally convince CSS to
                        behave.
                    </p>
                    <div className="ctabuttons">
                        <Button
                            name="primary"
                            text="View Projects"
                            onClick={() => navigate("/Projects")}
                        />
                        <Button
                            name="secondary"
                            text="Contact Me"
                            onClick={() => navigate("/Contact")}
                        />
                    </div>
                </div>
            </section>
            {/* <div className="resumelist">
                <ul>
                    <li><a href="" download='abhishek_kushwah-graphic-designer-resume.pdf'>Software Engineer</a></li>
                    <li><a href="" download='abhishek_kushwah-software-engineer-resume.pdf'>Graphic Designer</a></li>
                </ul>
            </div> */}
        </>
    );
}

export default Home;

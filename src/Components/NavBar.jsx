import { useContext, useState } from "react";
import "./componentStyles/NavBar.css";
import { Link } from "react-router-dom";
import Icon from "./Icons"; 1
import Button from "./Buttons";
import { AppContext } from "../themeContext";

export default function NavBar(type) {
    const { darkMode, setDarkMode } = useContext(AppContext);

    const ToggleDarkmode = () => {
        document.body.classList.toggle("DarkMode");
        setDarkMode(!darkMode);
        console.log(darkMode);
    };
    switch (type) {
        case "home":
            return (
                <div className="navBar">
                    <div className="left">
                        <Button name="icon" onClick={ToggleDarkmode}
                            icon={darkMode ? (
                                <Icon name="moon" />
                            ) : (
                                <Icon name="sun" />
                            )}
                        />
                    </div>
                    <div className="middle">
                        <nav>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>
                    <div className="right">
                        <button>Download CV</button>
                    </div>
                </div>

            )
        default:
            return(
                <div className="navBar">
                    <div className="left">
                        <Button name="icon" onClick={ToggleDarkmode}
                            icon={darkMode ? (
                                <Icon name="moon" />
                            ) : (
                                <Icon name="sun" />
                            )}
                        />
                    </div>
                    <div className="middle">
                        <nav>
                            <Link to="/about">About</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/education">Education</Link>
                        </nav>
                    </div>
                    <div className="right">
                        <button>↧ Resume</button>
                    </div>
                </div>
            )
    }
}
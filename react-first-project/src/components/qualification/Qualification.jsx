import React, {useState} from "react";
import "./qualification.css"

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id="qualifications">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>{" "} Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>{" "} Projects
                </div>
            </div>  

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">University of Kelaniya, Sri Lanka</h3>
                            <span className="qualification_subtitle">Bsc (hons) in Software Engineering</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2026
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Prince of Wales' College, Moratuwa</h3>
                            <span className="qualification_subtitle">Advanced Level - AAB</span>
                            <span className="qualification_subtitle">Ordinary Level - 9A's</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2020
                            </div>
                        </div>
                    </div>
                </div>
                    

                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">MenVerse</h3>
                            <span className="qualification_subtitle">Comprehensive Full Stack E-commerce Web
                                Application Utilizing HTML, CSS, PHP, MySQL and JavaScript</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2024 March
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Springboot E-commerce Application</h3>
                            <span className="qualification_subtitle"> Back-end for a Perfume Store's Ecommerce Web Application Using React.js, REST API, Java Springboot, PostgreSQL and JWT</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2024 March
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Fitness-Tracker</h3>
                            <span className="qualification_subtitle">A MERN Stack Application for track Exercise Shcedule</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2024 June
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Airline Management System</h3>
                            <span className="qualification_subtitle">An Airport Managment System Using Java, MySQL and OOP Concepts</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2024 June
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification

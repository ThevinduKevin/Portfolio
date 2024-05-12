import React, {useState} from "react";
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I Offer</span>

        <div className="services_container container grid">
            <div className="services_content">
              <div>  
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">Product <br/> Designer</h3>
              </div>

            <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="servives_modal-close">Product Designer</h3>
                    <p className="services_modal-description">my services are....</p>

                    <ul className="services_modal-services">
                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 1</p>
                        </li>

                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 2</p>
                        </li>

                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 3</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div> 

            <div className="services_content">
              <div>  
                <i className="uil uil-arrow services_icon"></i>
                <h3 className="services_title">UI/UX <br/> Designer</h3>
              </div>

            <span onClick={() => toggleTab(2)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="servives_modal-close">UI/UX Designer</h3>
                    <p className="services_modal-description">my services are....</p>

                    <ul className="services_modal-services">
                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 1</p>
                        </li>

                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 2</p>
                        </li>

                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 3</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className="services_content">
              <div>  
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">Visual <br/> Designer</h3>
              </div>

            <span onClick={() => toggleTab(3)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="servives_modal-title">Visual Designer</h3>
                    <p className="services_modal-description">my services are....</p>

                    <ul className="services_modal-services">
                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 1</p>
                        </li>

                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 2</p>
                        </li>

                        <li className="services_modal-services">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">my service 3</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services

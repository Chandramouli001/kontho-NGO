import '../css/landing.css';
import main from '../assets/Initiatives/img9.jpg';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>WE ARE KONTHO NGO</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>At <span>KONTHO,</span> We aim toward the betterment of the <span>world</span> around us. </p>
                        </div>
                        <div className="caption3">
                            <p>Contribute about social change by reaching out to underprivileged children and other underserved populations.</p>
                        </div>
                        <div className="btns">
                            <button onClick={() => window.open("https://www.facebook.com/KONTHOthevoiceofempowerment/", "_blank", "noopener noreferrer")} type="button" className="btn btn-outline-info">Know More</button>
                            <button type="button" className="btn btn-success" onClick={()=>navigate("/donate")}>DONATE</button>
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
            
    );
}
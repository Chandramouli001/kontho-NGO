import '../css/recent.css';
import mainImage1 from '../assets/Initiatives/recent/img1.jpg';
import mainImage2 from '../assets/Initiatives/recent/img2.jpg';
import mainImage3 from '../assets/Initiatives/recent/img3.jpg';
import mainImage4 from '../assets/Initiatives/recent/img4.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Recent() {
    const [image, setImage] = useState(mainImage1); // State for image switching
    const navigate = useNavigate();

    useEffect(() => {
        const images = [mainImage1, mainImage2, mainImage3,mainImage4];
        let currentIndex = 0;

        // Function to change the image automatically
        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; // Loop through images
            setImage(images[currentIndex]);
        }, 5000); // Change image every 5 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="landing">
            <span className="left">
                <div className="titles">
                    <div className="caption2">
                        <p>Winter Warmth Campaign</p>
                    </div>
                    <div className="caption3">
                        <p>
                            On the occasion of Swami Vivekananda's birthday on January 12th, we took a pledge to spread warmth and kindness to those in need. And on January 18th, we successfully fulfilled that pledge by completing our Winter Warmth campaign at Belgharia to Barrackpore railway stations ✌️
                            <br />
                            We distributed blankets to the homeless, bringing some comfort to their lives. A HUGE THANK YOU to each and every one of you for your massive support! We couldn't have done it without you 🙏🙏
                        </p>
                    </div>
                    <div className="btns">
                        <button onClick={() => window.open("https://www.facebook.com/KONTHOthevoiceofempowerment/", "_blank", "noopener noreferrer")} type="button" className="btn btn-outline-info">
                            Know More
                        </button>
                    </div>
                </div>
            </span>
            <span className="right">
                <img src={image} alt="Smiling Faces" className="rounded-image" />
            </span>
        </div>
    );
}

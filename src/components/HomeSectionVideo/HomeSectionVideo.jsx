import './HomeSectionVideo.css';
import teslaVid from "../Assets/tesla-video.webm";
import Button from '../Button/Button.jsx';
import TitleText from '../TitleText/Title-Text';

export default function HomeSectionVideo() {
    return (
        <div>
            <video className="video-background" autoPlay muted loop>
                <source src={teslaVid} type="video/mp4" />
            </video>
            <div className="overlay">
                <TitleText title={"Experience Tesla"} subtitle1={"Schedule a Demo Drive Today"}/>
                <div >
                    <Button text={"Demo Drive"}/>
                </div>
            </div>
        </div >
    );
};
import "./ModelSections.css"
import "../Assets/Model-3.jpg"
import Button from "../Button/Button"

export default function ModelSections({
    backgroundImage,
    header,
    description,
    featureItems = [],
}) {
    return (
        <div className="image-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <div className="top-section">
                    <h2>{header}</h2>
                    <p>{description}</p>
                </div>
                <div className="bottom-section">
                    {featureItems.length > 0 && (
                        <ul className="feature-items">
                            {featureItems.map(({ title, description }) => (
                                <li key={title}>
                                    <h6>{title}</h6>
                                    <p>{description}</p>
                                </li>
                            ))}
                        </ul>
                    )}
               
                <div className="button">
                    <Button text={"Order Now"} />
                    <Button text={"Demo Drive"} />
                </div>
                </div>
            </div>
        </div>
    )
}
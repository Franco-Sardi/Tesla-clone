import './ImageGrid.css';

export default function ImageGrid({ image1, image2, text1, text2,title1,title2 }) {
  return (
    <div className="grid-container">
      <div
        className="grid-item image-grid-img"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div className="grid-item grid-item-text"><h1 className='title'>{title1}</h1>{text1}</div>
      <div className="grid-item grid-item-text"><h1 className='title'>{title2}</h1>{text2}</div>
      <div
        className="grid-item image-grid-img"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
    </div>
  );
}
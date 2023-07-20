import "./Title-Text.css"
export default function TitleText({title,subtitle1,subtitle2}){
    return(
        <div className='text'>
            <h1>{title}</h1>
            <p>{subtitle1}</p>
            <h5>{subtitle2}</h5>
        </div>
    );
}
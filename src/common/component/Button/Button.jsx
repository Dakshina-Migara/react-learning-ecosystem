import './Button.css';

export default function Button({ btnName = '', color, onClick= () => {} }) {
    return (
        <>
            <button 
            className={"btn"} 
            style={{ backgroundColor: color }}
            onClick={()=>{onClick()}}
            >{btnName}</button>
        </>
    )
}
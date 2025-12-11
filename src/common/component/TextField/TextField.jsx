import './TextField.css';

export default function TextField({ className, color, placeholder, type, onChange }) {
    return (
        <div className={'area ' + className}>
            <input type={type} style={{ backgroundColor: color }} placeholder={placeholder} className='field' onChange={onChange} />
        </div>
    )
}
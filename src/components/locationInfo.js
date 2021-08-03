import '../location.css'
const LocationInfo = ({name, type, dimension, residentsNum}) => {
    return(
        <div className='location'>
            <p><span>Nombre:</span> {name}</p>
            <p><span>Type:</span> {type}</p>
            <p><span>Dimension:</span> {dimension}</p>
            <p>Residents Number: {residentsNum}</p>
        </div>
    )
}

export default LocationInfo
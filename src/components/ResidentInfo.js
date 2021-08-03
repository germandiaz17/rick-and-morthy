import '../residentsStyle.css'

const ResidentInfo = ({img, name, status, origin, episodiesNumber}) => {
    return(
        <div className='container'>
            <div className='imageDiv'>
                <img className='imgInfo' src={img} alt={name}></img>
            </div>
            <div className='infoDiv'>
                <div>
                    <h2>Name: {name}</h2>
                    <h4>Status: {status}</h4>
                    <h4>Origin: {origin}</h4>
                    <h4>Number of episodies: {episodiesNumber}</h4>
                </div>
            </div>
        </div>
    )
}

export default ResidentInfo
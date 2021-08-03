import '../App.css';
import {Fragment, useEffect, useState} from 'react'
import LocationInfo from './locationInfo'
import ResidentContainer from './ResidentContainer';

const SearchBox = () => {
    const [input, setInput] = useState('')
    const [location, setLocation] = useState(null)
    const [resident, setResident] = useState([])

    const getInfo = (get) => {
        const info = get.target.value
        setInput(info)
    }

    useEffect(() => {

    },[])
    const HandleSumbit = (e) => {
        e.preventDefault()
        const data = input

        const locations = async () => {
            const url = `https://rickandmortyapi.com/api/location?name=${data}`
            const response  = await fetch(url)
            const result = await response.json()
            setLocation(result.results[0])
            setResident(result.results[0].residents)
            // console.log(result)
          }
          locations()
    }

    const list = resident.slice(0, 10).map((value) =>
        <ResidentContainer residentUrl={value} key={value}/>)


    return(

        <Fragment>
            <form onSubmit={HandleSumbit}>
                <label>
                    Search:
                    <input
                    onChange={getInfo}
                    />
                </label>

                <button
                    type='submit'
                >
                    Submit
                </button>
            </form>
            {
            location && <LocationInfo
             name={location.name}
             type={location.type}
             dimension={location.dimension}
             residentsNum={location.residents.length}
             />}
            <div className='divCharacters'>
                {list}
            </div>
        </Fragment>
    )
}

export default SearchBox
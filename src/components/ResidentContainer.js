import '../residentsStyle.css'
import { useEffect, useState } from "react"
import ResidentInfo from "./ResidentInfo"


const ResidentContainer = ({residentUrl}) => {
    const [data, setData] = useState(null)


    useEffect(() => {
        const locations = async () => {
            const url = residentUrl
            const response  = await fetch(url)
            const result = await response.json()
            setData(result)
          }
          locations()
    }, [residentUrl])

    return(
        <div className='element'>
           {data && <ResidentInfo 
                name={data.name} 
                img={data.image} 
                status={data.status}  
                origin={data.origin.name} 
                episodiesNumber={data.episode.length}
           />} 
        </div>
    )
}

export default ResidentContainer
import { useEffect, useState } from "react"

const useTshirt = () => {
    const [tshirt, setTshirt] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setTshirt(data))
    }, [])
    console.log(tshirt)
    return [tshirt, setTshirt]
}
export default useTshirt;
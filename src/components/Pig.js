import {useState} from "react"

function Pig({pigObject}){

    const [displayDetails, setDisplayDetails] = useState(false)

    function toggleDisplayDetails(){
        setDisplayDetails(displayDetails => !displayDetails)
    }

    const pigObjectDetails = [pigObject.specialty, pigObject.weight, pigObject.greased ? "greased": "not greased", pigObject["highest medal achieved"]]
    console.log(pigObjectDetails)

    return(
        <div className="ui eight wide column">
            <div onClick={toggleDisplayDetails}>{displayDetails ? pigObjectDetails : pigObject.name}</div>
            <img src={pigObject.image}></img>
        </div>
    )
}

export default Pig;
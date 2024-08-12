import Pig from "./Pig"

function PigList({hogs}){

    const pigArray = hogs.map(pig =>{
        return(
            <Pig key={pig.name} pigObject={pig}></Pig>
        )
        
    })

    return(
    <div className="ui grid container">
        {pigArray}
    </div>

    )

}

export default PigList;
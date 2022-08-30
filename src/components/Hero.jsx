import { Button } from "react-bootstrap"
import { useState } from "react"



export default function(Hero) {

    const [addCar, setAddCar] = useState()
    const handleAddCar = () => setAddCar(addCar)

    return (
        <>
        <h5>I want a carousel</h5>
        <h2>Swap Cars</h2>
        <input></input>
        <div className="mb-2">
            <Button onClick={handleAddCar} onSubmit={(console.log("info submitted"))} 
            variant="primary" size="lg"> Submit Info
            </Button> {''}
            </div>
           
        </>
    )
}





    
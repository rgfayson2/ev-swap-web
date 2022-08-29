import { useState } from "react"
import { Carousel } from "react-bootstrap/Carousel"

// function ControlledCarousel(cars) {
//     const [cars, getCars] = useState(0)

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex)={index} 
//     }
//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="holder.js/800x400?text=First slide&bg=373940"
//               alt="First slide"
//             />)
    
// }
// render(<ControlledCarousel />)

export default function(Hero) {
    return (
        <>
        <h2>This is the Hero</h2>
        <h2> Swap</h2>
        <h5>I want a carousel</h5>
        </>
    )
}
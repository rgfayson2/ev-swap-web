import { useEffect } from "react"
import { useState } from "react"
import { Button, Carousel } from "react-bootstrap"
import CarCard from "../components/CarCard";


export default function Cars() {
  const [cars, setCars] = useState()
  // const [make, setMake] = useState()
  // const [model, setModel] = useState()
  // const [year, setYear] = useState()
  // const [color, setColor] = useState()

  const handleSelectedCar = (car) => {
    // setStrategy([...car, currencypair]);
    console.log(car);
  };




  useEffect(() => {
    fetch("http://localhost:4000/cars")
      // fetch("https://https://ev-swap-api.web.app//cars",
      .then((results) => results.json())
      .then((data) => setCars(data))
      .catch(console.error)
  }, [])

  return (
    <div className="carousel-background"> 

    <Carousel
      className="container"
      variant="light"
      slide={false}
      interval={null}
      >
      {cars.map ((car,id) => (
        <Carousel.Item key={id}>
          <CarCard carObj={car} />

          <Carousel.Caption>
            <Button
              className="cp-btn"
              variant="outline-light"
              onClick={(e) => handleSelectedCar(car)}
              >
              Select Car
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
      </div>
  )
}

import Card from "react-bootstrap/Card"

export default function CarCard({ carObj }) {
  return (
    <Card className="car-container">
      <Card.Body
        style={{ height: "500px", backgroundColor: "#999" }}
        className="d-flex flex-column align-items-center"
      >
        <div className="info-container">
          <Card.Title>Make: {carObj.make}</Card.Title>
          <br />
          <Card.Text>Model: {carObj.model}</Card.Text>
          <br />
          <Card.Text>Year: {carObj.year}</Card.Text>
          <br />
          <Card.Text>Color: {carObj.color}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

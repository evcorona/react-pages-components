import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'

function CardProduct(props) {
  let { name, imageURL, price, description } = props
  return (
    <Col xs="4">
      <Card>
        <CardImg top width="100%" src={imageURL} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CardProduct
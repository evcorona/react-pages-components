import { Component } from 'react'
import PageTitle from '../Components/PageTitle/index'
import CardProduct from '../Components/CardProduct/index'

import {
  Col,
  CardGroup
} from 'reactstrap'


let endpoint = "https://cherry-practices-default-rtdb.firebaseio.com/marketplace/products/.json"

class ProductCatalog extends Component {
  constructor() {
    super()
    this.state = {
      productCollection: {}
    }

  }

  getProductData() {
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({ productCollection: json })
      })
  }

  componentDidMount() {
    this.getProductData()
  }

  render() {
    return (
      <Col xs="12" >
        <PageTitle
          title="¡Mira nuestros productos!" />

        <CardGroup>
          {
            Object.keys(this.state.productCollection).map(key => {
              let { name, imageURL, price, description } = this.state.productCollection[key]
              return (
                <CardProduct
                  name={name}
                  imageURL={imageURL}
                  price={price}
                  description={description}
                />
              )
            })
          }
        </CardGroup>
      </Col>
    )
  }
}

export default ProductCatalog
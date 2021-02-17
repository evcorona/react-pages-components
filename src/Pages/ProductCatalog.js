/* Import Tools */
import React, { useState, useEffect } from 'react';
import {
  Col,
  CardGroup
} from 'reactstrap'

/* Import Components */
import PageTitle from '../Components/PageTitle/index'
import CardProduct from '../Components/CardProduct/index'


let endpoint = "https://cherry-practices-default-rtdb.firebaseio.com/marketplace/products/.json"

function ProductCatalog() {
  /* Hooks */
  const [productCollection, setProductCollection] = useState({})

  /* Functions */
  /* HTTP request GET onDemand*/
  const getProductData = () => {
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setProductCollection(json)
      })
  }

  /* HTTP request GET mountingComponent
  componentDidMount() {
    getProductData()
  }
  */

  return (
    <Col xs="12" >
      <PageTitle
        title="¡Mira nuestros productos!" />

      <CardGroup>
        {
          Object.keys(productCollection).map(key => {
            let { name, imageURL, price, description } = productCollection[key]
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

export default ProductCatalog
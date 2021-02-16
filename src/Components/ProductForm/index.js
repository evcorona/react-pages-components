import React, { Component } from 'react'

import {
  FormGroup,
  Form,
  Label,
  Input,
  Button, 
  InputGroup,
  InputGroupAddon
} from 'reactstrap'

let endpoint = "https://cherry-practices-default-rtdb.firebaseio.com/marketplace/products/.json"

class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: {}
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.saveProductHandler = this.saveProductHandler.bind(this)
  }

  changeHandler(event) {
    let property = event.target.name
    let value = event.target.value
    this.setState({ newProduct: { ...this.state.newProduct, [property]: value } })
  }

  saveProductHandler() {
    console.log(this.state.newProduct)
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(this.state.newProduct)
    }).then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <Form className="bg-info p-4 text-white rounded shadow mt-4">
        <FormGroup>
          <Label>Nombre</Label>
          <Input name="name" onChange={this.changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label>Descripción</Label>
          <Input name="description" onChange={this.changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label>URL de la imagen</Label>
          <Input name="imageURL" onChange={this.changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label>Precio</Label>
        
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input placeholder="Precio" min={0} max={100} type="number" step="1" name="price" onChange={this.changeHandler} />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>


        </FormGroup>
        <Button color="warning" onClick={this.saveProductHandler}>Guardar producto</Button>
      </Form>
    )
  }
}

export default ProductForm
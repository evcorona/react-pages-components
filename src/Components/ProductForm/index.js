/* Import Tools */
import React, { useState } from 'react';
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

function ProductForm() {
  /* Hooks */
  const [newProduct, setNewProduct] = useState({})

  /* Functions */
  /* Listener Form */
  const changeHandler = event => {
    let property = event.target.name
    let value = event.target.value
    setNewProduct({ ...newProduct, [property]: value })
  }

  /* Listener Button */
  const saveProductHandler = () => {
    console.log(newProduct)
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(newProduct)
    }).then(response => response.json())
      .then(json => console.log(json))
  }


  /* HTML Return */
  return (
    <Form className="bg-info p-4 text-white rounded shadow mt-4">
      <FormGroup>
        <Label>Nombre</Label>
        <Input name="name" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label>Descripción</Label>
        <Input name="description" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label>URL de la imagen</Label>
        <Input name="imageURL" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label>Precio</Label>

        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input placeholder="Precio" min={0} max={100} type="number" step="1" name="price" onChange={changeHandler} />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>


      </FormGroup>
      <Button color="warning" onClick={saveProductHandler}>Guardar producto</Button>
    </Form>
  )
}


export default ProductForm
import ProductForm from '../Components/ProductForm/index'
import PageTitle from '../Components/PageTitle/index'

import {
  Col
} from 'reactstrap'

function UploadForm() {
  return (
    <Col xs="12">
      <PageTitle
        title="Registrar un producto nuevo" />
      <ProductForm></ProductForm>
    </Col>
  )
}

export default UploadForm
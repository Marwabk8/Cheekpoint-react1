import {Form} from "react-bootstrap"

function Formu(){    

    return (
    <div className='si'><>
        <>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Ajouter votre registre de commerce </Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Ajouter votre Patente</Form.Label>
    <Form.Control type="file" multiple />
  </Form.Group>
  <Form.Group controlId="formFileDisabled" className="mb-3">
    <Form.Label>Ajouter votre Facture</Form.Label>
    <Form.Control type="file" disabled />
  </Form.Group>
 
</>
      </> </div>)

}
export default Formu;

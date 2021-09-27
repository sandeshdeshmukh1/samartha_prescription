import React , { useEffect }  from 'react'
import { Col, Row, Form,Button, Container,FormGroup, Label, Input , InputGroupAddon,
  InputGroupText,
  InputGroup } from 'reactstrap';
import { useForm } from './useForm';
import { MedicineTable } from './medicineTable';

// interface FormProps {
//   name:string;
//   diagnosis:string;
//   Advice:string;
//   medicineName:string;
//   Morningselect:number;
//   Afternoonselect:number;
//   Nightselect:number;
//   duration:number;
// }


export const FormContainer:any = (props:any) => {
  const initialState = {
    name:"",
    diagnosis:"",
    advice:"",
    medicineName:"",
    Morningselect:0,
    Afternoonselect:0,
    Nightselect:0,
    duration:0,
  }
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );
  async function loginUserCallback() {
    // const totalItem = values;
    
    
    console.log(values);
    // console.log(initialState.medicineArray);
 }


  return (
    <>
    <Form className="form" onSubmit={onSubmit} >
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="name" onChange={onChange} id="Name" placeholder="Patient Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Diagnosis">Diagnosis</Label>
            <Input type="text" name="diagnosis" onChange={onChange} id="Diagnosis" placeholder="Ex. Fever,High BP " />
          </FormGroup>
        </Col>
      </Row>
      <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="Advice">Advice</Label>
              <Input
                className="form-control-alternative"
                placeholder="Write a large text here ..."
                rows="3"
                type="textarea"
                onChange={onChange}
              />
            </FormGroup>
          </Col>
      </Row>
      <Row form>
        <Col md={6}>
        <FormGroup>
            <Label for="medicineName">Medicine Name</Label>
            <InputGroup className="mb-4">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-zoom-split-in" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Search" type="text" onChange={onChange} name="medicineName" />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleState">Morning</Label>
            <Input type="select" name="Morningselect" onChange={onChange} id="Morningselect">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleState">Afternoon</Label>
            <Input type="select" name="Afternoonselect" onChange={onChange} id="Afternoonselect">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleState">Night</Label>
            <Input type="select" name="Nightselect" onChange={onChange} id="Nightselect">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={9}>
          <FormGroup>
            <Label for="Duration">Duration</Label>
            <Input type="text" name="duration" id="Duration" onChange={onChange} placeholder="No of Days" />
          </FormGroup>
        </Col>
        <Col md={2} className="m-auto">
          <Button className="btn-icon btn-3" color="success" type="submit">
            <span className="btn-inner--icon">
              <i className="ni ni-bag-17" />
            </span>
            <span className="btn-inner--text">Add Medicine</span>
          </Button>
        </Col>
      </Row>
    </Form>

      <MedicineTable items={values}></MedicineTable>
   
    </>
  );
}


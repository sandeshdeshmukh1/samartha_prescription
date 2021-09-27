import * as React from 'react'
import { Table } from 'reactstrap';

export const MedicineTable = (props:any) => {
    console.log(props.items);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Medicine Name</th>
          <th>Dosage</th>
          <th>Duration</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
          {/* {props.items.map( ({item}:any) => {
              <tr>
                <th scope="row">1</th>
                <td>{item.medicineName}</td>
                <td>{item.Morningselect + item.Afternoonselect + item.Nightselect}</td>
                <td>{item.duration}</td>
                <td>{item.duration*(item.Morningselect + item.Afternoonselect + item.Nightselect)}</td>
             </tr>
          })} */}
      </tbody>
    </Table>
  );
}

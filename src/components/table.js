import React from "react";
import "./table.css";
import { deleteRowData } from '../actions/crud';

class ProductsTable extends React.Component {
  handleDeleteOps = (key) => {
    console.log("Deleting", key);
    deleteRowData(key);
    this.props.refreshData();
  }

  handleEditDetails = (key) => {
    this.props.history.push(`/edit/${key}`);
  }

  renderTableRows = () => {
    return this.props.data.map(row => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.manufacturer}</td>
        <td>{row.processor}</td>
        <td>{row.price}</td>
        <td>
          <i onClick={() => this.handleEditDetails(row.id)} className="fas fa-pencil-alt"></i>
          <i onClick={() => this.handleDeleteOps(row.id)} className="fas fa-trash-alt"></i>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Processor</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductsTable;
import React, { Component } from "react";
import ProductForm from "./form";
import { getProductDataToEdit } from "../actions/crud";

export class Edit extends Component {
    constructor (props) {
        super(props);
        this.id = props.match.params.id;
        this.editData = getProductDataToEdit(this.id);
    }

    render() {
        return (
         <div>
              <ProductForm editData={this.editData} history={this.props.history} id={this.id}/>
          </div>
        );
    }
}
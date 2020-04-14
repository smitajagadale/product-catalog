import React, {Component} from "react";
import ProductForm from "./form";

export class Create extends Component {
    render() {
        return (
          <div>
              <ProductForm history={this.props.history} action={"create"} />
          </div>
        );
    }
}
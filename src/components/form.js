import React from "react";
import "./form.css";
import { createRowData } from "../actions/crud";

class ProductForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            manufacturer: "",
            processor: "",
            price: "",
        }
    }

    componentDidMount() {
        if (this.props.editData) {
            const {name, manufacturer, processor, price} = this.props.editData
            this.setState({
                name, 
                manufacturer, 
                processor, 
                price
            })
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleOnSubmit = () => {
        const err = this.validateFormData();
        console.log("Validation ERR : ", err);
        if (err) {
            alert(err);
            return;
        }
        createRowData(this.state, this.props.id);
        this.props.history.push('/');
    }

    validateFormData = () => {
        let error = "Please enter ";
        const arr = [];
        const stateKeys = Object.keys(this.state);
        stateKeys.forEach(element => {
            if (!this.state[element].length) {
                arr.push(element);
            }
        });
        if (arr.length) {
            return error + arr.join(", ");
        }
        return null;
    }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleOnChange}
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group">
                        <label for="manufacturer">Manufacturer</label>
                        <input
                            type="text"
                            value={this.state.manufacturer}
                            onChange={this.handleOnChange}
                            className="form-control"
                            id="manufacturer"
                            placeholder="Enter Manufacturer"
                        />
                    </div>
                    <div className="form-group">
                        <label for="processor">Processor</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            value={this.state.processor}
                            className="form-control"
                            id="processor"
                            placeholder="Enter Processor specification"
                        />
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input
                            type="text"
                            value={this.state.price}
                            onChange={this.handleOnChange}
                            className="form-control"
                            id="price"
                            placeholder="Enter Price Value"
                        />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
            </div>
        );
    }
}

export default ProductForm;
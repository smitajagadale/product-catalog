import React from "react";

class TableHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleOnSearch = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.search);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary justify-content-between">
                    <p className="text-white h3">Product Catalogue</p>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" id="search" onChange={this.handleOnChange} placeholder="Search" />
                        <button className="btn btn-success" onClick={this.handleOnSearch} type="submit">Search</button>
                    </form>
                </nav>
            </div>
        );
    }
}

export default TableHeader;
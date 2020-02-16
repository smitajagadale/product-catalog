import React, { Component } from "react";
import { getLocalData } from '../actions/crud';
import ProdTable from './table';
import "./table.css";
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            storedData: [],
        }
        this.fetchTableData = this.fetchTableData.bind(this);
    }

    componentDidMount() {
        this.fetchTableData();
    }

    fetchTableData() {
        this.setState({
            storedData: getLocalData()
        })
    }

    render() {
        const { storedData } = this.state;
        return (
            <div>
                <ProdTable data={storedData} history={this.props.history} refreshData={this.fetchTableData} />
                <Link to="/create"><button onClicktype="button" class="btn btn-primary">ADD</button>
                </Link>
            </div>
        );
    }
}

export default Home;

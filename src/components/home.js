import React, { Component } from "react";
import { getLocalData } from '../actions/crud';
import ProdTable from './table';
import "./table.css";
import { Link } from 'react-router-dom';
import TableHeader from './tableheader';


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

    filterSearch = (search) => {
        search = search && search.length ? search.toLowerCase() : "";
        const updatedData = this.state.storedData.filter(data => {
            const productValues = Object.values(data);
            for (const prodVal of productValues) {
                const indexOf = prodVal.toLowerCase().indexOf(search);
                if (indexOf !== -1) {
                    return true;
                }
            }
            return false;
        });
        this.setState({
            storedData : updatedData,
        })
    }

    render() {
        const { storedData } = this.state;
        return (
            <div>
                <TableHeader handleSearch={this.filterSearch} />
                <ProdTable data={storedData} history={this.props.history} refreshData={this.fetchTableData} />
                <Link to="/create"><button onClicktype="button" class="btn btn-primary">ADD</button>
                </Link>
            </div>
        );
    }
}

export default Home;

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
            searchedResults: null,
            toastObj: null
        }
        this.fetchTableData = this.fetchTableData.bind(this);
    }

    componentDidMount() {
        this.fetchTableData();
        this.checkUrlQuery();
    }

    checkUrlQuery() {
        const { search } = this.props.location;
        if (search.length) {
            let queries = search.split("?")[1];
            queries = queries.split("&");
            const queryObj = [];
            for (const query of queries) {
                const queryArr = query.split("=");
                queryObj.push({
                    [queryArr[0]]: queryArr[1]
                });
            }
            this.setState({
                toastObj: queryObj
            })
        }
    }

    fetchTableData() {
        this.setState({
            storedData: getLocalData()
        })
    }

    filterSearch = (search) => {
        search = search && search.length ? search.toLowerCase() : "";
        if (!search.length) {
            this.setState({
                searchedResults: null
            });
        } else {
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
                searchedResults : updatedData,
            });
        }
    }

    render() {
        const storedData = this.state.searchedResults ? this.state.searchedResults : this.state.storedData;
        return (
            <div>
                <TableHeader handleSearch={this.filterSearch} />
                <ProdTable data={storedData} history={this.props.history} refreshData={this.fetchTableData} />
                <Link to="/create"><button className="btn btn-primary">ADD</button>
                </Link>
            </div>
        );
    }
}

export default Home;

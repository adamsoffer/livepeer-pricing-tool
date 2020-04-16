import React, { Component } from 'react'
import axios from 'axios'
import OrchestratorTable from '../OrchestratorTable'
import { PageHeader } from 'antd';
import Config from '../../Config'

export class OrchestratorStats extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        axios.get(Config.api_url + '/orchestratorStats')
        .then(res => this.setState({data: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        if (this.state.data) {
            return (
                <React.Fragment>
                    <PageHeader
                        className="site-page-header"
                        backIcon="false"
                        title="Orchestrator Statistics"
                        subTitle=""
                    />
                    <OrchestratorTable data={this.state.data} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment> 
                    <p>Error in fetching data. Make sure the API is running at "localhost:9000". See console for more details.</p>
                </React.Fragment>
            )
        }
    }
}

export default OrchestratorStats

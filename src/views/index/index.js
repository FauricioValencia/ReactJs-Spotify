import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SongItem from './SongItem';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            song: ''
        }

    }
    render() {
        console.log(this.props);
        return (
            <div className="index">

                <div className="card">
                    <div className="card-content">
                        <div className="index-searchBox">
                            <input
                                type="text"
                                class="Index-searchBox-input"
                                placeholder="Cancion"
                                onChange={(e) => { this.setState({ song: e.target.value }) }}
                                value={this.state.song}
                            />
                            <a
                                className="waves-effect waves-light btn green"
                            >
                                <i className="fa fa-search"></i>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="card Index-results-card">
                        <div className="card-content">

                        </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        routes:state.routes
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (Index);


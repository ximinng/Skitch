import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Portal from './Portal';

class Container extends PureComponent {
    render() {
        console.log(this.props);
        const {match, routes} = this.props;

        return (
            <div>
                <Portal match={match} routes={routes}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

// Container connect with store
export default connect(mapStateToProps, mapDispatchToProps)(Container);
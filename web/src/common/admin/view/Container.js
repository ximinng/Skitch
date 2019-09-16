import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Admin from './Admin';

class Container extends PureComponent {
    render() {
        return (
            <Admin match={this.props.match}/>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
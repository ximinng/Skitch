import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Home from './Home';

class Container extends PureComponent {
    render() {
        return (
            <Home/>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
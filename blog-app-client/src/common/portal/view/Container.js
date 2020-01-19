import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Portal from './Portal';

class Container extends PureComponent {
    render() {
        // console.log(this.props);
        return (
            <Portal match={this.props.match}/>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
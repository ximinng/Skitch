import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Portal from './Portal';

class Container extends PureComponent {

    render() {
        console.log(this.props);

        const {match, author} = this.props;
        return (
            <Portal match={this.props.match} author={author}/>
        );
    }
}

const mapStateToProps = (state) => ({
    author: state.getIn(['portal', 'author'])
});

const mapDispatchToProps = (dispatch) => ({
    changeInputValue() {
        dispatch(actions.getSiteFooterDesc())
    }
});

// Container connect with store
export default connect(mapStateToProps, mapDispatchToProps)(Container);
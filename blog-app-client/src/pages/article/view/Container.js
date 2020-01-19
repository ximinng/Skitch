import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Article from './Article';

class Container extends PureComponent {
    render() {
        return (
            <Article/>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
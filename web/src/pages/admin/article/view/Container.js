import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Article from './Article';

class Container extends PureComponent {

    render() {
        const {match, labelItems, sortItems, fields, handleFormChange, handleSubmit} = this.props;

        return (
            <div>
                <Article action={match.params.action}
                         labels={labelItems} sorts={sortItems} username={fields}
                         handleSubmit={handleSubmit}
                         onChange={handleFormChange}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.fillInForm(this.props.match.params.action, this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    labelItems: state.getIn(['adminArticle', 'labelItems']),
    sortItems: state.getIn(['adminArticle', 'sortItems']),
    fields: state.getIn(['adminArticle', 'fields'])
});

const mapDispatchToProps = (dispatch) => ({
    fillInForm(action, id) {
        // 填充表单分类和标签数据
        if (action === 'new') dispatch(actions.fillInFormWithLabelAndSort());
        // 根据文章id获得文章信息
        if (action === 'edit') dispatch(actions.fillInFormById(id));
    },
    // 提交创建文章
    handleSubmit(e, form) {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                dispatch(actions.createArticle(values));
            }
        });
    },
    // field change
    handleFormChange(changedFields) {
        dispatch(actions.formChange(changedFields));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
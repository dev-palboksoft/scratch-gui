import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import { connect, dispatch } from 'react-redux';
import { closeCubroidGroupNumberModal } from '../reducers/modals';

import GroupNumberModalConponents from '../components/group-number-modal/group-number-modal.jsx';

class GroupNumberModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel'
        ]);
    }

    handleCancel () {
        this.props.onCancel();
    }

    render () {
        return (
            <GroupNumberModalConponents
                onCancel={this.handleCancel}
            />
        );
    }
}

GroupNumberModal.propTypes = {
    onCancel: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    extensionId: state.scratchGui.connectionModal.extensionId
});

const mapDispatchToProps = dispatch => ({
    onCancel: () => {
        dispatch(closeCubroidGroupNumberModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupNumberModal);

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from '../../containers/modal.jsx';
import bindAll from 'lodash.bindall';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import styles from './group-number-modal.css';
import Cast from 'scratch-vm/src/util/cast';

const messages = defineMessages({
    label: {
        id: 'gui.cubroidGroupNumber.label',
        defaultMessage: '그룹 번호 설정',
        description: '그룹 번호 설정'
    }
});
class GroupNumberModalConponents extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSetGroupNumber',
            'handleChangeInput',
            'handleResetMsg',
            'handleSetSussMsg',
            'handleSetErrorMsg'

        ]);
        this.state = {
            groupNumber: '',
            succMsg: '',
            errorMsg: '',
        }
    }

    componentDidMount() {
        const localstorageGroupNumber = localStorage.getItem('groupNumber') || '';
        // console.log("componentDidMount()", localstorageGroupNumber)
        this.setState({
            groupNumber: localstorageGroupNumber
        })
    }

    handleSetGroupNumber () {
        try {
            let chkGroupNumber = Cast.toString(this.state.groupNumber);
            if(chkGroupNumber.length > 0) {
                chkGroupNumber = ('0000' + chkGroupNumber).substr(-4);
                if (this.state.groupNumber != chkGroupNumber) {
                    this.setState({
                        groupNumber: chkGroupNumber
                    })
                }
            }
            localStorage.setItem('groupNumber', chkGroupNumber);
            this.handleSetSussMsg('그룹 넘버링 설정 완료');
            // console.log("handleSetGroupNumber");
        } catch (e) {
            this.handleSetErrorMsg('그룹 넘버링 설정 실패');
        }
    };
    handleChangeInput (e) {
        // console.log(e.target.value);
        this.handleResetMsg();
        const value = e.target.value;
        if (value.length <= 4) {
            this.setState({
                groupNumber: e.target.value
            })
        }
    }

    handleResetMsg() {
        this.setState({
            succMsg: '',
            errorMsg: ''
        })
    }
    handleSetSussMsg(msg) {
        this.setState({
            succMsg: msg
        })
    }
    handleSetErrorMsg(msg) {
        this.setState({
            errorMsg: msg
        })
    }
    render () {
        return (
            <Modal
                id="cubroidGroupNumberModal"
                className={styles.modalContent}
                contentLabel={this.props.intl.formatMessage({...messages.label})}
                onRequestClose={this.props.onCancel}
                //onRequestOpen: PropTypes.func
            >
                <div>
                    <Box className={styles.body}>
                        <div className={styles.inputContainer}>
                            <div>
                                <input
                                    type="text"
                                    className={styles.inputStyle}
                                    value={this.state.groupNumber}
                                    onChange={this.handleChangeInput}
                                />
                                <button
                                    type="button" 
                                    className={styles.inputButtonStyle}
                                    onClick={this.handleSetGroupNumber}
                                >
                                    확인
                                </button>
                            </div>
                            <div>
                                {this.state.succMsg ? (
                                    <div className={styles.succMsgBox} >{this.state.succMsg}</div>
                                ) : null}
                                {this.state.errorMsg ? (
                                    <div className={styles.errorMsgBox} >{this.state.errorMsg}</div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            앱스토어에서 큐브로이드 매니저 앱을 다운로드하여
                            블록 그룹 번호를 설정할 수 있습니다.
                            <br /><br />
                            <a href="https://www.cubroid.co.kr" target="_blank">도움말</a>

                        </div>
                    </Box>
                </div>
            </Modal>
        )
    }
};

GroupNumberModalConponents.propTypes = {
    onCancel: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default injectIntl(GroupNumberModalConponents);

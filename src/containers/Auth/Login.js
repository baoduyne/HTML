import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

//import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

//import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }
    render() {
        return (
            <div className = "login-background">
                <div className = "login-container">
                    <div className ="login-content row">
                        <div className="col-12 login-text">Login</div>
                        <div className ="col-12 form-group login-input">
                            <label>Username:</label>
                            <input placeholder='Enter your username' type ="text" className ="form-control"></input>
                        </div>
                        <div className ="col-12 form-group login-input">
                            <label>Password:</label>
                            <input placeholder='Enter your password' type ="password" className ="form-control"></input>
                        </div>
                        <div className = "col-12">
                        <button className = "btn-login">Login</button>
                        </div>
                        <div className = "col-12">
                            <span>Forgot your password?</span>
                        </div>
                        <div className = "col-12 text-center mt-3">
                            <span className='text-other-login'>Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                        <i className="fab fa-google-plus-g google"></i>
                        <i className="fab fa-facebook facebook"></i>
                        </div>
                        <div className ="col-12 form-group"></div>
                    </div>
                    </div>
                </div>
             
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

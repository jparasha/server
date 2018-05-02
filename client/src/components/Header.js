import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {

    renderContent(){
        switch (this.props.auth) {
            case null: return ;
            case false: return (<li><a href='/auth/google'> Login With Google </a></li>)
            default: return `Welcome ${this.props.auth.name.substr(0,this.props.auth.name.indexOf(' '))}!` ;
        }
    }

    render() {
        //console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {/* <li>
                            <a> Login With Google </a>
                        </li> */}
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {

    renderContent(){
        switch (this.props.auth) {
            case null: return 'Loading..'
            case false: return 'Login With Google'
            default: return 'Welcome '+this.props.auth.name
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
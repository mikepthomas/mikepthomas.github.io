import * as React from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Navigation.css';

interface IState {
    isOpen: boolean;
}

export default class Navigation extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <div className="Navigation">
                <a className="github-banner" href="https://github.com/mikepthomas/mikepthomas.github.io">
                    <img src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub" />
                </a>
                <Navbar color="dark" dark={ true } expand="md" fixed="top">
                    <NavbarBrand href="/">Mike Thomas</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar={ true }>
                        <Nav className="mr-auto" navbar={ true }>
                            <NavItem>
                                <NavLink href="https://github.com/mikepthomas">
                                    <FontAwesomeIcon icon={['fab', 'github']} />&nbsp;
                                    GitHub profile
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/mikepaulthomas">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />&nbsp;
                                    LinkedIn profile
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

/* 
 * Copyright (c) 2016-2019, Mike Thomas
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';

import SocialLink from './SocialLink';
import { IconName } from '@fortawesome/free-brands-svg-icons';

import './Navigation.scss';

interface SocialItem {
    project?: string
    user: string
}

interface Props {
    [key: string]: SocialItem;
}

interface State {
    isOpen: boolean;
}

export default class Navigation extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <div className="Navigation">
                <a className="github-banner d-none d-md-block" href={this.getGitHubProjectUrl()}>
                    <img src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub" />
                </a>
                <Navbar color="dark" dark={true} expand="md" fixed="top">
                    <NavbarBrand href="/">Mike Thomas</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="mr-auto" navbar={true}>
                            {
                                Object.keys(this.props).map((type, key) =>
                                    <SocialLink key={key} type={type as IconName} {...this.props[type]} />
                                )
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    private getGitHubUrl(): string {
        return "https://github.com/" + this.props.github.user;
    }

    private getGitHubProjectUrl(): string {
        return this.getGitHubUrl() + "/" + this.props.github.project;
    }

    private toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

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
import * as React from 'react';
import {
    NavItem,
    NavLink
} from 'reactstrap';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
    type: IconName
    user: string
}

export default class SocialLink extends React.Component<IProps> {

    public render() {
        return (
            this.props.user ?
            <NavItem>
                <NavLink href={ this.getUrl() }>
                    <FontAwesomeIcon icon={ ['fab', this.props.type] } />&nbsp;
                    { this.getLinkText() }
                </NavLink>
            </NavItem>
            : ""
        );
    }

    private getLinkText(): string {
        let name = "Unknown";
        switch (this.props.type) {
            case "facebook":
                name = "Facebook";
                break;
            case "github":
                name = "GitHub";
                break;
            case "instagram":
                name = "Instagram";
                break;
            case "linkedin":
                name = "LinkedIn";
                break;
            case "twitter":
                name = "Twitter";
                break;
        }
        return name + " Profile"
    }

    private getUrl(): string {
        let url = "";
        switch (this.props.type) {
            case "facebook":
                url = "https://facebook.com/"
                break;
            case "github":
                url = "https://github.com/"
                break;
            case "instagram":
                url = "https://instagram.com/"
                break;
            case "linkedin":
                url = "https://www.linkedin.com/in/"
                break;
            case "twitter":
                url = "https://www.twitter.com/"
                break;
        }
        return url + this.props.user;
    }
}

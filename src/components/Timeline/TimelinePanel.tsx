/* 
 * Copyright (c) 2016-2018, Mike Thomas
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
import Moment from 'react-moment';
import ReactWOW from 'react-wow'

import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IExperienceItem {
    title: string,
    startDate: Date,
    endDate?: Date,
    city: string,
    location: string,
    url: string,
    description: string,
    color: string,
    icon: IconName,
    inverted?: boolean
}

export default class TimelinePanel extends React.Component<IExperienceItem> {
    constructor(props: IExperienceItem) {
        super(props);
    }

    public render() {
        return (
            <ReactWOW animation={ this.props.inverted ? "zoomInRight" : "zoomInLeft" } duration='0.5s'>
                <li className={ this.props.inverted ? "timeline-inverted" : "" }>
                    <div className={ "timeline-badge " + this.props.color }>
                        <FontAwesomeIcon icon={ this.props.icon } />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="timeline-title">{ this.props.title }</h4>
                                <small className="mb-1 text-muted">
                                    <FontAwesomeIcon icon="calendar-alt" />&nbsp;
                                    <Moment date={ this.props.startDate } format="MMMM YYYY" />
                                    &nbsp;-&nbsp;
                                    { this.props.endDate === undefined ? "Present" : <Moment date={ this.props.endDate } format="MMMM YYYY" /> }
                                    &nbsp;(
                                    <Moment date={ this.props.endDate } diff={ this.props.startDate } filter={ this.formatMonths } unit="months" />
                                    )
                                </small>
                            </div>
                            <div className="timeline-body">
                                <a href={ this.props.url } target="_blank">
                                    <h5 className="mt-2">{ this.props.location } ({ this.props.city })</h5>
                                </a>
                                <div dangerouslySetInnerHTML={ { __html: this.props.description } } />
                            </div>
                        </div>
                    </li>
            </ReactWOW>
        );
    };

    private formatMonths(monthCount: string) {
        const months = Number(monthCount) % 12;
        const years = Math.floor(Number(monthCount) / 12)
        let out = "";
            if (years > 0) {
                out += years + " year";
                if (years > 1) {
                    out += "s";
                }
            }

            if (months > 0) {
                if (years > 0) {
                    out += ", ";
                }
                out += months + " month";
                if (months > 1) {
                    out += "s";
                }
            }
            return out;
    }
};

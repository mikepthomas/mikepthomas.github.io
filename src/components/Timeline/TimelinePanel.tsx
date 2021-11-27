/*
 * Copyright (c) 2016-2021, Mike Thomas
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
import React from 'react';
import Moment from 'react-moment';
import ReactWOW from 'react-wow';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as DateUtils from '../../js/dateUtils';

export interface ExperienceItem {
  title: string;
  startDate: string;
  endDate?: string;
  city: string;
  location: string;
  url?: string;
  description?: string;
  color?: string;
  icon: string | string[];
  inverted?: boolean;
}

export default function TimelinePanel(props: ExperienceItem) {
  return (
    <ReactWOW
      animation={props.inverted ? 'zoomInRight' : 'zoomInLeft'}
      duration="0.5s"
    >
      <li className={props.inverted ? 'timeline-inverted' : ''}>
        <div className={`timeline-badge ${props.color}`}>
          <FontAwesomeIcon icon={props.icon as IconName} />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">{props.title}</h4>
            <small className="mb-1 text-muted">
              <FontAwesomeIcon icon="calendar-alt" />
              &nbsp;
              <Moment date={props.startDate} format="MMMM YYYY" />
              &nbsp;-&nbsp;
              {props.endDate === undefined ? (
                'Present'
              ) : (
                <Moment date={props.endDate} format="MMMM YYYY" />
              )}
              &nbsp;(
              <Moment
                date={props.endDate}
                diff={props.startDate}
                filter={DateUtils.formatMonths}
                unit="months"
              />
              )
            </small>
          </div>
          <div className="timeline-body">
            <a href={props.url} rel="noopener noreferrer" target="_blank">
              <h5 className="mt-2">
                {props.location} ({props.city})
              </h5>
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: props.description as string
              }}
            />
          </div>
        </div>
      </li>
    </ReactWOW>
  );
}

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
import { renderToString } from 'react-dom/server';
import { HashLink } from 'react-router-hash-link';
import ReactWOW from 'react-wow';

export default function getRenderers() {
  return {
    heading: (props: any): JSX.Element => {
      const text = renderToString(props.children[0]);
      const formatted = text.toLowerCase().replace(/\W/g, '-');
      return React.createElement(
        'h' + props.level,
        { id: formatted },
        props.children
      );
    },
    image: (props: HTMLImageElement): JSX.Element => {
      return (
        <ReactWOW offset={-200} animation="fadeIn">
          <img alt={props.alt} src={props.src} />
        </ReactWOW>
      );
    },
    link: (props: HTMLAnchorElement): JSX.Element => {
      if (props.href.match(/^(https?:)?\/\//)) {
        return (
          <a href={props.href} rel="noopener noreferrer" target="_blank">
            {props.children}
          </a>
        );
      } else {
        return (
          <HashLink
            scroll={el =>
              window.scroll({ behavior: 'smooth', top: el.offsetTop + 10 })
            }
            to={props.href}
          >
            {props.children}
          </HashLink>
        );
      }
    }
  };
}

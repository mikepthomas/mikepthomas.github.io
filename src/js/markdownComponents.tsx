/*
 * Copyright (c) 2016-2022, Mike Thomas
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
import { Table } from 'reactstrap';
import { HashLink } from 'react-router-hash-link';
import ReactWOW from 'react-wow';

export function getComponents() {
  return {
    a: ({ ...props }) => {
      if (props.href?.match(/^(https?:)?\/\//)) {
        return (
          <a href={props.href} rel="noopener noreferrer" target="_blank">
            {props.children}
          </a>
        );
      } else {
        return (
          <HashLink
            scroll={(el) =>
              window.scroll({ behavior: 'smooth', top: el.offsetTop - 52 })
            }
            to={props.href || ''}
          >
            {props.children}
          </HashLink>
        );
      }
    },
    blockquote: ({ ...props }) => (
      <blockquote className="blockquote">{props.children}</blockquote>
    ),
    h1: ({ ...props }) => (
      <h1 id={createId(props.children.toString())}>{props.children}</h1>
    ),
    h2: ({ ...props }) => (
      <h2 id={createId(props.children.toString())}>{props.children}</h2>
    ),
    h3: ({ ...props }) => (
      <h3 id={createId(props.children.toString())}>{props.children}</h3>
    ),
    img: ({ ...props }) => (
      <ReactWOW offset={-200} animation="fadeIn">
        <img
          className="img-fluid img-thumbnail"
          alt={props.alt}
          src={props.src}
        />
      </ReactWOW>
    ),
    table: ({ ...props }) => <Table responsive>{props.children}</Table>,
  };
}

const createId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[(|)|+]/g, '')
    .replace(/\W/g, '-');
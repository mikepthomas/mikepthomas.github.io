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
import React, { Component } from 'react';
import Markdown from 'react-markdown';
import { match } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import remarkGfm from 'remark-gfm'

import { getComponents } from '../js/markdownComponents';
import './Projects.scss';

interface ProjectProps {
  project: string;
}

interface Props {
  match: match<ProjectProps>;
}

interface State {
  file: string;
  markdown: string;
}

export default class Projects extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      file: '',
      markdown: ''
    };
  }

  public componentDidMount() {
    this.componentDidUpdate();
  }

  public componentDidUpdate() {
    let url =
      'https://raw.githubusercontent.com/' +
      'mikepthomas/mikepthomas.github.io/develop/src/data/markdown/' + 
      this.props.match.params.project + '.md';
    if (this.state.file !== url) {
      fetch(url)
        .then(response => {
          return response.text();
        })
        .then(text => {
          window.scrollTo(0, 0);
          this.setState({
            file: url,
            markdown: text
          });
        });
    }
  }

  public render() {
    return (
      <Container className="nav-padding projects-page">
        <Row>
          <Col className="markdown" sm="8">
            <Markdown
              children={this.state.markdown}
              components={getComponents()}
              remarkPlugins={[remarkGfm]}
            />
          </Col>
          <Col className="sidebar" sm={{ size: 3, offset: 1 }}>
            <div className="sidebar-module sidebar-module-inset">
              <h4>About</h4>
              <p>
                Here you can find information about a select few projects I am
                currently working on.
              </p>
              <div className="sidebar-module">
                <h4>Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <Link to="/projects/printer">3D Printer</Link>
                  </li>
                  <li>
                    <Link to="/projects/guitar">Guitar</Link>
                  </li>
                  <li>
                    <Link to="/projects/openrc">OpenRC F1</Link>
                  </li>
                </ol>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

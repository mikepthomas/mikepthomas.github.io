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
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { match } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import remarkGfm from 'remark-gfm';

import { getComponents } from '../js/markdownComponents';
import './Projects.scss';

interface ProjectProps {
  project: string;
}

interface Props {
  match: match<ProjectProps>;
}

const Projects = (props: Props) => {
  const [markdown, setMarkdown] = useState('markdown');
  const [file, setFile] = useState('file');

  const location = useLocation();
  React.useEffect(() => {
    let filename = props.match.params.project;
    // Do not allow markdown files outside the project
    filename = filename.replaceAll('../', '');
    if (!filename?.endsWith('.md')) {
      filename += '.md';
    }
    let url = 'data/markdown/' + filename;
    if (window.location.hostname === 'localhost') {
      url = require('../' + url);
    } else {
      url =
        'https://raw.githubusercontent.com/' +
        'mikepthomas/mikepthomas.github.io/develop/src/' +
        url;
    }
    if (file !== url) {
      setMarkdown('# Loading project...');
      fetch(url)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          window.scrollTo(0, 0);
          setMarkdown(text);
          setFile(url);
        });
    }
  }, [file, location, props]);

  return (
    <Container className="nav-padding projects-page">
      <Row>
        <Col className="markdown" md="8">
          <Markdown
            children={markdown}
            components={getComponents()}
            remarkPlugins={[remarkGfm]}
          />
        </Col>
        <Col md={{ size: 4 }}>
          <div className="position-sticky">
            <div className="p-4 mb-3 bg-light rounded">
              <h2>About</h2>
              <p>
                Here you can find information about a select few projects I am
                currently working on.
              </p>
            </div>
            <div className="p-4">
              <h3>Elsewhere</h3>
              <ol className="list-unstyled">
                <li>
                  <Link to="/projects/printer">3D Printer</Link>
                  <ul>
                    <li>
                      <Link to="/projects/printer-printed-upgrades">
                        3D Printed Upgrades
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/printer-skr-upgrade">
                        SKR 1.4 Turbo Upgrade
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/printer-filament">
                        3D Printer Filament
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/projects/openrc-f1">OpenRC F1</Link>
                </li>
                <li>
                  <Link to="/projects/openrc-truggy">OpenRC Truggy</Link>
                </li>
                <li>
                  <Link to="/projects/openrc-mini-quad">OpenRC Mini Quad</Link>
                </li>
                <li>
                  <Link to="/projects/guitar">Guitar</Link>
                </li>
                <li>
                  <Link to="/projects/red-rocket">Red Rocket Truck Stop</Link>
                </li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Projects;

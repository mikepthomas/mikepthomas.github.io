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
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import remarkEmoji from 'remark-emoji';
import remarkFrontmatter from 'remark-frontmatter';
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
        <Col className="markdown" lg="8">
          <Markdown
            children={markdown}
            components={getComponents()}
            remarkPlugins={[remarkEmoji, remarkFrontmatter, remarkGfm]}
          />
        </Col>
        <Col lg="4">
          <div className="position-sticky">
            <div className="p-4 mb-3 bg-light rounded">
              <p>
                Some projects I am working on and I have planned over the next
                few <s>months</s> <s>years</s> decades...
              </p>
              <ul>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer">
                    Anet A8
                  </a>
                  <ul>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-failures">
                        Failures
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-printed-upgrades">
                        3D Printed Upgrades
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-enclosure">
                        3D Printer Enclosure
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-hardware-upgrades">
                        Hardware Upgrades
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-am8">
                        AM8 Switchwire
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/projects/printer-hypercube">
                    <s>Hypercube CoreXY Upgrade</s>
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer-rook">
                    Rook 2020
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer-voron-0.2">
                    Voron 0.2
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer-voron-1.8">
                    Voron 1.8
                  </a>
                  <ul>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-voron-1.8-mods">
                        Voron 1.8 Mods
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mikethomas.info/projects/printer-enraged-rabbit-carrot-feeder">
                        Enraged Rabbit Carrot Feeder
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer-polyformer">
                    Polyformer
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/3d-lab-print-piper-cub">
                    3D LabPrint Piper Cub
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/3d-sets-landy">
                    3D Sets Landy
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/3d-sets-accessories">
                    3D Sets Accessories
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/openrc-f1">
                    OpenRC F1
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/openrc-truggy">
                    OpenRC Truggy
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/openrc-mini-quad">
                    OpenRC Mini Quad
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/guitar">
                    Guitar
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/red-rocket">
                    Red Rocket Truck Stop
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/sanctuary-hills">
                    Sanctuary Hills House
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer-filament">
                    3D Printer Filament
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/eurorack-modular-synth">
                    Eurorack Modular Synth
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/printer-klipper-fan-hat">
                    Klipper Fan Hat
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/macro-pi">
                    Macro Pi
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/solar-wifi-weather-station">
                    Solar Wifi Weather Station
                  </a>
                </li>
                <li>
                  <a href="https://www.mikethomas.info/projects/single-board-computers">
                    Single Board Computers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Projects;

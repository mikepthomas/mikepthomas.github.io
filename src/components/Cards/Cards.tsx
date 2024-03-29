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
import { Col, Container, Row } from 'reactstrap';

import Card from './Card';
import F1 from '../../img/cards/openrc-hero.jpg';
import Guitar from '../../img/cards/guitar-hero.jpg';
import RedRocket from '../../img/cards/red-rocket-hero.jpg';
import Truggy from '../../img/cards/truggy-hero.jpg';

export default function Links() {
  return (
    <>
      <Container>
        <h2 className="mb-3" id="software-projects">
          Software projects
        </h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <Col>
            <Card
              name="FAHView"
              link="https://fahview.mikethomas.info/"
              target="_blank"
              archived={true}
            >
              Final year University project. Viewer application to display
              information from a Folding@Home client.
            </Card>
          </Col>
          <Col>
            <Card
              name="FAHWeb"
              link="https://fahweb.mikethomas.info/"
              target="_blank"
              archived={true}
            >
              Extension of work on FAHView. To create a web front end to control
              Folding@Home v7 clients.
            </Card>
          </Col>
          <Col>
            <Card
              name="FAHServices"
              link="https://fahservices.mikethomas.info/"
              target="_blank"
            >
              Extension of work on FAHWeb. To create a REST API to be used by a
              web front end to control Folding@Home v7 clients.
            </Card>
          </Col>
          <Col>
            <Card
              name="jFold"
              link="https://jfold.mikethomas.info/"
              target="_blank"
            >
              Java 11 Library to connect and call functions of the Client Remote
              Interface in a Folding@Home v7 Client.
            </Card>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <h2 className="mb-3" id="3d-printing-projects">
          3D printing projects
        </h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <Col>
            <Card
              name="OpenRC F1"
              link="https://www.mikethomas.info/projects/openrc-f1"
              image={F1}
            >
              Printing a Formula 1 style remote control car.
            </Card>
          </Col>
          <Col>
            <Card
              name="OpenRC Truggy"
              link="https://www.mikethomas.info/projects/openrc-truggy"
              image={Truggy}
            >
              Logical advancement from the OpenRC F1.
            </Card>
          </Col>
          <Col>
            <Card
              name="Guitar"
              link="https://www.mikethomas.info/projects/guitar"
              image={Guitar}
            >
              Building a guitar with a 3D printed body.
            </Card>
          </Col>
          <Col>
            <Card
              name="Red Rocket"
              link="https://www.mikethomas.info/projects/red-rocket"
              image={RedRocket}
            >
              3D Printing the Red Rocket Truck Stop from Fallout 4.
            </Card>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <h2 className="mb-3" id="3d-printers">
          3D printers
        </h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <Col>
            <Card
              name="Anet A8"
              link="https://www.mikethomas.info/projects/printer"
            >
              My first 3D printer.
            </Card>
          </Col>
          <Col>
            <Card
              name="Rook 2020"
              link="https://www.mikethomas.info/projects/printer-rook"
            >
              3D Printing a cheap CoreXY 3D Printer.
            </Card>
          </Col>
          <Col>
            <Card
              name="Voron 0.2"
              link="https://www.mikethomas.info/projects/printer-voron-0.2"
            >
              Printing parts to assemble a Voron 0.2 3D printer.
            </Card>
          </Col>
          <Col>
            <Card
              name="Voron 1.8"
              link="https://www.mikethomas.info/projects/printer-voron-1.8"
            >
              Printing parts to assemble a Voron 1.8 3D printer.
            </Card>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

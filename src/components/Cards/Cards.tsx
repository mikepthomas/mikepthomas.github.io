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
import { CardColumns, Container } from 'reactstrap';

import Card from './Card';
import F1 from '../../img/openrc-f1/openrc-hero.jpg';
import Guitar from '../../img/guitar/12-almost-there.jpg';
import Truggy from '../../img/openrc-truggy/truggy-hero.jpg';
import Printer from '../../img/printer/printed-items.jpg';

import './Cards.scss';

export default function Links() {
  return (
    <>
      <Container>
        <h2 className="mb-2" id="projects">
          Software projects
        </h2>
        <CardColumns>
          <Card name="jFold" link="/jfold">
            Java 11 Library to connect and call functions of the Client Remote
            Interface in a Folding@Home v7 Client.
          </Card>
          <Card name="FAHServices" link="/fahservices">
            Extension of work on FAHWeb. To create a REST API to be used by a
            web front end to control Folding@Home v7 clients.
          </Card>
          <Card name="FAHWeb" link="/fahweb" archived={true}>
            Extension of work on FAHView. To create a web front end to control
            Folding@Home v7 clients.
          </Card>
          <Card name="FAHView" link="/fahview" archived={true}>
            Final year University project. Viewer application to display
            information from a Folding@Home client.
          </Card>
        </CardColumns>
        <hr />
      </Container>
      <Container>
        <h2 className="mb-2" id="projects">
          3D printing projects
        </h2>
        <CardColumns>
          <Card name="3D Printer" link="/#/projects/printer" image={Printer}>
            3D Printing upgrades for a 3D printer.
          </Card>
          <Card name="OpenRC F1" link="/#/projects/openrc-f1" image={F1}>
            Printing a Formula 1 style remote control car.
          </Card>
          <Card
            name="OpenRC Truggy"
            link="/#/projects/openrc-truggy"
            image={Truggy}
          >
            Logical advancement from the OpenRC F1.
          </Card>
          <Card name="Guitar" link="/#/projects/guitar" image={Guitar}>
            Building a guitar with a 3D printed body.
          </Card>
        </CardColumns>
        <hr />
      </Container>
    </>
  );
}
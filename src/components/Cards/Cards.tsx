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
import React from 'react';
import { CardColumns, Container } from 'reactstrap';

import Card from './Card';

import './Cards.scss';

export default function Links() {
  return (
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
          Extension of work on FAHWeb. To create a REST API to be used by a web
          front end to control Folding@Home v7 clients.
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
  );
}

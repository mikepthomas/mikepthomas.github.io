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
import { Container, Jumbotron } from 'reactstrap';

import './Intro.scss';

export default function Intro() {
  return (
    <Jumbotron>
      <Container>
        <h1>Hello, world!</h1>
        <p>
          I'm a Software Engineer in Cardiff with broad knowledge of all aspects
          of the software development lifecycle, skilled in eliciting
          requirements, designing, coding and testing complex software systems
          using modern techniques and technologies.
        </p>
        <p className="d-none d-md-block">
          Experienced in a number of programming languages including C, Java,
          Ruby and Python and have a deep understanding of desktop operating
          systems, Windows and UNIX like, such as, Linux and Mac OS X and
          mobile, iOS and Android. Have worked within an agile team environment
          using the source control tools Subversion and Git and am familiar with
          continuous integration tools such as Jenkins and Hudson.
        </p>
      </Container>
    </Jumbotron>
  );
}

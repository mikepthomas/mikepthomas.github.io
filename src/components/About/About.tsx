/* 
 * Copyright (c) 2016-2018, Mike Thomas
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
import * as React from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap';

export default class About extends React.Component {
    public render() {
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <h2 className="mt-2">This is me!</h2>
                        <img src="https://avatars3.githubusercontent.com/u/13928052?v=3&amp;s=150" width="150" height="150" className="img-responsive" alt="It's-a-Me!" />
                    </Col>
                    <Col md="5">
                        <h2 className="mt-2">Interests and Achievements</h2>
                        <p>
                            A keen interest in the Royal Air Force and the military
                            in general; I have flown a winch powered glider, have
                            taken part in aerobatics in a fixed-wing aircraft and
                            completed an Accelerated Free Fall Skydiving course in
                            which I have skydived 13 times.
                            In the past I have been a member of the Royal Naval
                            Reserves to fill my spare time, and contributor to
                            SkydiveUWE and the Technology society at University.
                        </p>
                        <p>
                            My other hobbies include music, I am currently
                            learning to play bass guitar, computer games
                            modification, Virtual reality and motorbikes.
                            Most recently I have recently been getting into 3D
                            printing and 3D modelling.
                        </p>
                    </Col>
                    <Col md="4">
                        <h2 className="mt-2">Key Skills</h2>
                        <ul>
                            <li>Software design using UML</li>
                            <li>Java, C, Python and Ruby Programming</li>
                            <li>XML Technologies such as XQuery, XSLT &amp; XPath</li>
                            <li>Knowledge of SOAP and RESTful web services</li>
                            <li>Web Server Admin with Apache, MySQL &amp; PHP</li>
                            <li>Web Development, XHTML, CSS &amp; JavaScript</li>
                            <li>Source Control using Git and Subversion</li>
                            <li>Unit testing with JUnit and PHPUnit</li>
                            <li>Web page test automation using Selenium Grid</li>
                            <li>Extensive knowledge of Windows, Linux and Mac</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
            </Container>
        );
    };
};

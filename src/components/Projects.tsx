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
import { renderToString } from 'react-dom/server'
import * as Markdown from 'react-markdown';
import { match } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ReactWOW from 'react-wow';
import {
  Col,
  Container,
  Row
} from 'reactstrap';

import './Projects.css';

interface IProjectProps {
  project: string;
}

interface IProps {
  match: match<IProjectProps>;
}

interface IState {
  file: string;
  markdown: string;
}

export default class Projects extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  
    this.state = {
        file: "",
        markdown: ""
    }
  }

  public componentDidMount() {
    this.componentDidUpdate();
  }

  public componentDidUpdate() {
    let url = "data/markdown/" + this.props.match.params.project + ".md";
    if (window.location.hostname === "localhost") {
      url = require("../" + url)
    } else {
      url = "https://raw.githubusercontent.com/" +
      "mikepthomas/mikepthomas.github.io/develop/src/" + url;
    }
    if (this.state.file !== url) {
      fetch(url)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          file: url,
          markdown: text
        })
      })
    }
  }

  public render() {
    return (
      <Container className="nav-padding projects-page">
        <Row>
          <Col className="markdown" sm="8">
                <Markdown source={ this.state.markdown } renderers={{heading: this.headingRenderer, image: this.imageRenderer, link: this.linkRenderer}} />
          </Col>
          <Col className="sidebar" sm={{ size: 3, offset: 1 }}>
          <div className="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>
              Here you can find information about a select few projects I am currently working on.
            </p>
          <div className="sidebar-module">
            <h4>Elsewhere</h4>
            <ol className="list-unstyled">
              <li><Link to="/projects/printer">3D Printer</Link></li>
              <li><Link to="/projects/guitar">Guitar</Link></li>
              <li><Link to="/projects/openrc">OpenRC F1</Link></li>
            </ol>
          </div>
          </div>
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }

  private headingRenderer(props: any): JSX.Element {
    const text = renderToString(props.children[0]);
    const formatted = text.toLowerCase().replace(/\W/g, '-');
    return React.createElement('h' + props.level, { id: formatted }, props.children);
  }

  private imageRenderer(props: HTMLImageElement): JSX.Element {
      return <ReactWOW offset={ -200 } animation="fadeIn" ><img alt= { props.alt } src={ props.src } /></ReactWOW>
  }

  private linkRenderer(props: HTMLAnchorElement): JSX.Element {
    if (props.href.match(/^(https?:)?\/\//)) {
      return <a href={props.href} target="_blank">{props.children}</a>
    } else {
      // tslint:disable-next-line jsx-no-lambda
      return <HashLink scroll={ el => window.scroll({ behavior: "smooth", top: el.offsetTop + 10}) } to={ props.href }>{ props.children }</HashLink>
    }
  }
}

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
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
} from 'reactstrap';

import styles from './Card.module.scss';

interface Props {
  archived?: boolean;
  children: string;
  image?: string;
  link: string;
  target?: string;
  name: string;
}

export default function Link(props: Props) {
  return (
    <Card className="h-100" color="light">
      <CardHeader tag="h3">{props.name}</CardHeader>
      {props.image ? (
        <CardLink
          href={props.link}
          target={props.target}
          className={styles['zoom']}
        >
          <CardImg src={props.image} />
        </CardLink>
      ) : null}
      <CardBody>
        {props.archived ? (
          <CardSubtitle className="text-muted" tag="h4">
            Archived:
          </CardSubtitle>
        ) : null}
        <CardText>{props.children}</CardText>
      </CardBody>
      <CardFooter className="text-end">
        <CardLink
          className="btn btn-outline-primary"
          href={props.link}
          target={props.target}
        >
          View details »
        </CardLink>
      </CardFooter>
    </Card>
  );
}

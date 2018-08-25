import * as React from 'react';
import {
    Jumbotron
} from 'reactstrap';

export default class Intro extends React.Component {
    public render() {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    I'm a Software Engineer in Cardiff with broad knowledge of
                    all aspects of the software development lifecycle, skilled
                    in eliciting requirements, designing, coding and testing
                    complex software systems using modern techniques and
                    technologies.
                </p>
                <p className="hidden-sm-down">
                    Experienced in a number of programming languages including
                    C, Java, Ruby and Python and have a deep understanding of
                    desktop operating systems, Windows and UNIX like, such as,
                    Linux and Mac OS X and mobile, iOS and Android. Have worked
                    within an agile team environment using the source control
                    tools Subversion and Git and am familiar with continuous
                    integration tools such as Jenkins and Hudson.
                </p>
            </Jumbotron>
        );
    };
};

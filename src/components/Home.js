import React, { Component } from "react";
import {
  NameWrapper,
  GitHubLogoLink,
  LinkedInLogoLink,
  LogosWrapper,
  Separator,
  ResumeLink,
} from "../styles";
import { GitHub, LinkedIn } from "../images";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NameWrapper>mariel hoepelman</NameWrapper>
        <ResumeLink
          href="https://mhpersonal.s3.amazonaws.com/Mariel+Hoepelman+SWE.pdf"
          target="blank"
          rel="external"
        >
          resume
        </ResumeLink>
        <LogosWrapper>
          <div>
            <LinkedInLogoLink
              href="https://www.linkedin.com/in/mariel-hoepelman/"
              target="blank"
              rel="external"
            >
              <img src={LinkedIn} alt="LinkedIn Logo White" />
            </LinkedInLogoLink>
          </div>
          <Separator>|</Separator>
          <div>
            <GitHubLogoLink
              href="https://github.com/MarielJHoepelman"
              target="blank"
              rel="external"
            >
              <img src={GitHub} alt="GitHub Logo White" />
            </GitHubLogoLink>
          </div>
        </LogosWrapper>
      </div>
    );
  }
}

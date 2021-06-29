import styled from "styled-components";

const NEONPINK = "#fe019a";

export const BodyContainer = styled.div`
  background: black;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const NameWrapper = styled.h1`
  font-size: 4em;
  font-family: "Montserrat", sans-serif;
  transition: all 1s ease-in;
  :hover {
    color: ${NEONPINK};
  }
`;

export const H2Wrapper = styled.h2`
  font-size: 3em;
  font-family: "Poppins", sans-serif;
`;

export const GitHubLogoLink = styled.a`
  img {
    width: 80px;
    transition: all 0.25s;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const LinkedInLogoLink = styled.a`
  img {
    width: 100px;
    transition: all 0.25s;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const LogosWrapper = styled.div`
  padding-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.div`
  margin: 0 20px;
`;

export const ResumeLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 auto;
  font-size: 1.5em;
  transition: all 1s ease-in;
  :hover {
    color: ${NEONPINK};
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: all 1s ease-in;
  :hover {
    color: ${NEONPINK};
  }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px 0;
`;

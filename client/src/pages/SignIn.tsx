import styled from "styled-components";
import backgroundImage from "../assets/backgroundOne.svg";
import { Col, Row, Layout } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Column from "../components/Column";
import Logo from "../components/Logo";
import Button from "../components/Button";
import SignInForm from "../sections/auth/signin/SignInForm";

const LoginWrapper = styled(Layout)`
  background-image: url(${backgroundImage});
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  align-self: center;
  width: 85%;
  height: 75vh;
`;

const ColTwo = styled(Col)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInFormContainer = styled.div`
  width: 50%;
`;

const OrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineLeft = styled.div`
  width: 15%;
  height: 1px;
  background: #fff;
  display: inline-block;
`;

const OrText = styled.span`
  color: #fff;
  padding: 0 5px 0 5px;
`;

const LineRight = styled.div`
  width: 15%;
  height: 1px;
  background: #fff;
  display: inline-block;
`;

export default function SignIn() {
  return (
    <LoginWrapper>
      <LoginContainer>
        <Row>
          <Col span={12}>
            <Column
              columnstyle={{
                position: "relative",
                height: "75vh",
                backgroundImage:
                  "https://app.ad-lib.io/static/media/login_bg.cc32e048.svg",
                backgroundSize: "cover",
                display: "flex",
                width: "100%",
                rightRadius: "unset",
                leftRadius: "10px",
              }}
            >
              <Logo
                logoStyles={{
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  position: "absolute",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: "81.07px",
                  width: "254.84px",
                  top: "25%",
                }}
              />
              <Button title="Sign Up" />
            </Column>
          </Col>
          <ColTwo span={12}>
            <SignInFormContainer>
              <SignInForm />
              <OrContainer>
                <LineLeft />
                <OrText>Or</OrText>
                <LineRight />
              </OrContainer>
              <Button icon={<GoogleOutlined />} title="Sign in with Google" />
            </SignInFormContainer>
          </ColTwo>
        </Row>
      </LoginContainer>
    </LoginWrapper>
  );
}

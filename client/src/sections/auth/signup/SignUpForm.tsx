import { Layout, Form, Button, Input, notification } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useState } from "react";
import apiService from "../../../api/apiService";

const SignUpFormWrapper = styled(Layout)`
  background: transparent;
  width: 50%;
  height: auto;
  margin: 25vh auto;
  padding: 10px;
`;

const SignUpFormInputIconMailOutlined = styled(MailOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignUpFormInputIconLockOutlined = styled(LockOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignUpFormInputIconEyeOutlined = styled(EyeOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignUpFormInputIconEyeInvisibleOutlined = styled(EyeInvisibleOutlined)`
  color: rgba(203, 43, 134, 1);
`;

const SignUpFormInputUsernamePassword = styled(Input)`
  &.ant-input-affix-wrapper {
    border-color: transparent;
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: transparent !important;
  }
`;

const SignUpFormButton = styled(Button)`
  width: 100%;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(203, 43, 134, 1) 0%,
    rgba(155, 30, 124, 1) 35%,
    rgba(99, 16, 105, 1) 100%
  );
  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none !important;
    outline-offset: unset !important;
    transition: none !important;
  }
`;

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const onFinish = async (values) => {
    try {
      const request = await apiService.post("/signup", values);
      if (request.data.success)
        api["success"]({
          message: "Sign Up Successfully",
          description: "You are successfully sign up!",
        });
    } catch (error) {
      api["error"]({
        message: "Sign Up Failed",
        description: error.response.data.error,
      });
    }
  };

  return (
    <SignUpFormWrapper>
      {contextHolder}
      <Form
        name="Sign Up"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              type: "email",
              message: "The input is not valid Email!",
            },
          ]}
        >
          <SignUpFormInputUsernamePassword
            prefix={<SignUpFormInputIconMailOutlined />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <SignUpFormInputUsernamePassword
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            prefix={<SignUpFormInputIconLockOutlined />}
            suffix={
              showPassword ? (
                <SignUpFormInputIconEyeOutlined onClick={handleShowPassword} />
              ) : (
                <SignUpFormInputIconEyeInvisibleOutlined
                  onClick={handleShowPassword}
                />
              )
            }
          />
        </Form.Item>
        <Form.Item>
          <SignUpFormButton type="primary" htmlType="submit">
            Sign Up
          </SignUpFormButton>
        </Form.Item>
      </Form>
    </SignUpFormWrapper>
  );
}

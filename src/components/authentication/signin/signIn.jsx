import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import Link from "next/link";
import MPrimaryBtn from "../../../core/ui-kit/buttons/primaryBtn";

export default function MCSignIn() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return(
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
            layout={'vertical'}
        >
            <Form.Item
                name={['user', 'email']}
                rules={[{required: true, message: 'Please input your email address'}]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email Address" size="large"/>
            </Form.Item>
            <Form.Item
                name={['user', 'password']}
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size="large"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>
            <Form.Item key={'submitBtn'}>
                <MPrimaryBtn type="primary" htmlType="submit" className="login-form-button" key={'signInBtn'}/>
            </Form.Item>
            Or <Link key={'linkToSignUp'} href={"/auth/signup"}><a key={'goToSignUp'}>Register now!</a></Link>
        </Form>
    )
}
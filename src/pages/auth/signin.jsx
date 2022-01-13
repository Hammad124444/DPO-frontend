import MAuthLayout from "../../layout/layout-auth"
import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from 'next/link'

export default function MSignIn() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return(
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            <Form.Item
                name="useremail"
                rules={[{required: true, message: 'Please input your email address'}]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email Address" size="large"/>
            </Form.Item>
            <Form.Item
                name="password"
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
            <Form.Item>
                <Button type="success" htmlType="submit" className="login-form-button">
                Sign in
                </Button>
                Or <Link href="/auth/register"><a>Register now!</a></Link>
            </Form.Item>
        </Form>
    )
}

MSignIn.getLayout = function getLayout(page) {
    return (
        <MAuthLayout>
            { page }
        </MAuthLayout>
    )
}
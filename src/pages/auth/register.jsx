import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import MAuthLayout from '../../layout/layout-auth';

export default function MRegisterUser() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return(
        <Form
            name="normal_register"
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
            <Form.Item
                name="confirmpassword"
                rules={[{ required: true, message: 'Confirm your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                size="large"
                />
            </Form.Item>
            <Form.Item>
                <Button type="danger" htmlType="submit" className="login-form-button">
                Register
                </Button>
                Already have account ? <Link href="/auth/signin"><a>Sign In</a></Link>
            </Form.Item>
        </Form>
    )
}

MRegisterUser.getLayout = function getLayout(page) {
    return (
        <MAuthLayout>
            { page }
        </MAuthLayout>
    )
}
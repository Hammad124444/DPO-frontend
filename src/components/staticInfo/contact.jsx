import {Form, Row, Col, Input, Select} from 'antd';
import MTextArea from "../../core/ui-kit/inputs/textarea";
import MKCheckBox from "../../core/ui-kit/inputs/checkbox";
import { agreeItems } from "../../core/data/config/contactinfo";
import MKRecaptcha from "../../core/ui-kit/recaptcha/recaptcha";
import MButtonWithIcon from "../../core/ui-kit/buttons/iconButton";
import {SendOutlined} from "@ant-design/icons";
import {
    validateMessages,
    onAgreeChange,
    onFinish
} from "../../services/staticInfo/contact";
import {useState} from "react";

const { Option } = Select;

export default function MCContact() {
    const [disabled, setDisabled] = useState(true);
    return(
        <>
            <Row className='container pt-50'>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>

                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} >
                    <h1 className={'mt-30 c-green font-32 font-bold text-center'}>Contact Us</h1>
                    <Form name={"contactus-form"} onFinish={onFinish} validateMessages={validateMessages}
                          layout={'vertical'}
                          initialValues={{role: '2'}}
                    >
                        <Form.Item name={['user', 'name']}
                                   label={'Name'}
                                   rules={[
                                       {
                                           required: true
                                       }
                                   ]}
                        >
                            <Input size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true
                                },
                            ]}
                        >
                            <Input size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            name={['user', 'role']}
                            label={'Your Role'}
                            rules={[
                                {
                                    required: true
                                }
                            ]}
                        >
                            <Select size={'large'} >
                                <Option value={'1'}>Investor</Option>
                                <Option value={'2'}>Issuer</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['user', 'phoneNumber']}
                            label={'Phone Number'}
                        >
                            <Input size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            name={['user', 'message']}
                            label={'Message'}
                            rules={[
                                {
                                    // TODO: Need to fix textarea validation
                                    // required: true
                                }
                            ]}
                        >
                            <MTextArea placeholder={'Enter A Message'}/>
                        </Form.Item>
                        <Form.Item
                            name={['user', 'agreement']}
                        >
                            <MKCheckBox label={agreeItems.storeInfo} action={() => setDisabled(onAgreeChange)}/>
                        </Form.Item>
                        <Form.Item className={'text-center'} >
                            <MButtonWithIcon label={'Send Message'} type={'danger'} size={'large'} htmlType={'submit'}
                                icon={<SendOutlined />} disabled={disabled}
                            />
                        </Form.Item>
                        <MKRecaptcha action={() => console.log('asdfasdf')}/>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

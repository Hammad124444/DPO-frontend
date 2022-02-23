import {useState} from "react";
import {Form, Row, Col, Input, Select, Card, Typography} from 'antd';
import {SendOutlined} from "@ant-design/icons";
//Static Data
import { agreeItems } from "../../core/data/config/contactinfo";
import {DTRegisterTypes} from "../../core/data/config/registerType";
//Ui Kits
import MTextArea from "../../core/ui-kit/inputs/textarea";
import MKCheckBox from "../../core/ui-kit/inputs/checkbox";
import MKRecaptcha from "../../core/ui-kit/recaptcha/recaptcha";
import MButtonWithIcon from "../../core/ui-kit/buttons/iconButton";
//Service
import {
    validateMessages,
    onAgreeChange,
    onFinish
} from "../../services/staticInfo/contact";
import {useRouter} from "next/router";

const { Option } = Select;
const { Meta } = Card;
const { Title } = Typography;

export default function MCContact() {
    const [disabled, setDisabled] = useState(true);
    const router = useRouter();
    return(
        <>
            <Row className='container pt-50 pb-30'>
                <Col xs={24} sm={24} md={12} lg={9} xl={7}
                     className={'pr-40 d-flex flex-column justify-content-space-around'}
                >
                    {
                        DTRegisterTypes.map((el) => (
                            <Card
                                key={el.id}
                                className={'mb-20'}
                                actions={[
                                    <MButtonWithIcon key={'custom'} icon={<SendOutlined />}  type={'danger'} label={el.button.label}
                                         action={() => router.push(el.button.routerLink)}
                                    />
                                ]}
                            >
                                <Meta
                                    className="text-center"
                                    title={ <Title level={5}>{el.title}</Title> }
                                    description={ el.process.map((el, index) => (
                                        <p key={index} style={{color: 'black !important'}}>{index + 1}.{el}</p>
                                    )) }
                                />
                            </Card>
                        ))
                    }
                </Col>
                <Col xs={24} sm={24} md={12} lg={15} xl={17} >
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

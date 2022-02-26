import { Row, Col, Divider, Layout } from 'antd';
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "../core/data/config/contactinfo";
import {MailFilled, PhoneFilled } from "@ant-design/icons";
import { footerOptions } from "../core/data/config/footerOptions";

const { Footer } = Layout;
export default function MFooter() {
    return(
        <Footer className={'bg-white pv-40'} style={{boxShadow: '0px -2px 5px #d1d1d1'}}>
            <Row className={'container'}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Image src="/assets/images/dpo-logo-footer.png" alt={'Footer Logo'} width={220} height={120}/>
                    <Link href={'tel:' + contactInfo.mobile} >
                        <a className={'d-flex align-items-center font-18 pt-10'}>
                            <PhoneFilled className={'c-green font-28 mr-10'}/>
                            {contactInfo.mobile}
                        </a>
                    </Link>
                    <Link href={'mailto:' + contactInfo.email}>
                        <a className={'d-flex font-18 align-items-center pt-10'}>
                            <MailFilled className={'c-green font-28 mr-10'}/>
                            {contactInfo.email}
                        </a>
                    </Link>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className={'d-flex flex-column align-items-center'}>
                    <h1 className={'font-24 font-bold c-green'}>{footerOptions.list.label}</h1>
                    {
                        footerOptions.list.children.map((el, index) => (
                            <Link href={el.url} key={'listing' + index}>
                                <a className={'font-18 pt-10'}>{el.label}</a>
                            </Link>
                        ))
                    }
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className={'d-flex flex-column align-items-center'}>
                    <h1 className={'font-24 font-bold c-green'}>{footerOptions.information.label}</h1>
                    {
                        footerOptions.information.children.map((el, index) => (
                            <Link href={el.url} key={'information' + index}>
                                <a className={'font-18 pt-10'}>{el.label}</a>
                            </Link>
                        ))
                    }
                </Col>
            </Row>
            <Divider />
            <p className={'text-center font-14'}>© 2022 Direct Private Offers All Rights Reserved.
                <Link href={'/information/terms'}>
                    <a className={'font-bold'}> Terms of Use </a>
                </Link>
                  |
                <Link href={'/information/privacy'}>
                    <a className={'font-bold'}> Privacy Policy</a>
                </Link>
            </p>
        </Footer>
    )
}
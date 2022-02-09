import {Divider, Layout} from 'antd';
import Image from "next/image";
import Link from "next/link";
import {contactinfo} from "../core/data/config/contactinfo";
import {MailFilled, PhoneFilled } from "@ant-design/icons";
import { footerOptions } from "../core/data/config/footerOptions";

const { Footer } = Layout;
export default function MFooter() {
    return(
        <Footer className={'bg-white pv-40'} style={{boxShadow: '0px -2px 5px #d1d1d1'}}>
            <div className={'container ant-row'}>
                <div className={'ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-8'}>
                    <Image src="/assets/images/dpo-logo-footer.png" alt={'Footer Logo'} width={250} height={150}/>

                    <Link href={'tel:' + contactinfo.mobile} >
                        <a className={'d-flex align-items-center font-20 pt-10'}>
                            <PhoneFilled className={'c-green font-28 mr-10'}/>
                            {contactinfo.mobile}
                        </a>
                    </Link>
                    <Link href={'mailto:' + contactinfo.email}>
                        <a className={'d-flex font-20 align-items-center pt-10'}>
                            <MailFilled className={'c-green font-28 mr-10'}/>
                            {contactinfo.email}
                        </a>
                    </Link>
                </div>
                <div className={'ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-8 d-flex flex-column align-items-center'}>
                    <h1 className={'font-24 font-bold c-green'}>{footerOptions.list.label}</h1>
                    {
                        footerOptions.list.children.map((el, index) => (
                            <Link href={el.url} key={'listing' + index}>
                                <a className={'font-20'}>{el.label}</a>
                            </Link>
                        ))
                    }
                </div>
                <div className={'ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-8 d-flex flex-column align-items-center'}>
                    <h1 className={'font-24 font-bold c-green'}>{footerOptions.information.label}</h1>
                    {
                        footerOptions.information.children.map((el, index) => (
                            <Link href={el.url} key={'information' + index}>
                                <a className={'font-20'}>{el.label}</a>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <p className={'text-center font-14'}>© 2022 Direct Private Offers All Rights Reserved.
                <Link href={'/information/termsandconditions'}>
                    <a>Terms of Use</a>
                </Link>
                 |
                <Link href={'/information/termsandconditions'}>
                    <a>Privacy Policy</a>
                </Link>
            </p>
        </Footer>
    )
}
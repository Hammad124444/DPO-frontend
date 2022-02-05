import { Layout } from 'antd';
import Image from "next/image";
import Link from "next/link";
import {contactinfo} from "../core/data/config/contactinfo";
import {MailFilled, PhoneFilled, PhoneOutlined} from "@ant-design/icons";

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
                    <Link href={'mailto' + contactinfo.email}>
                        <a className={'d-flex font-20 align-items-center pt-10'}>
                            <MailFilled className={'c-green font-28 mr-10'}/>
                            {contactinfo.email}
                        </a>
                    </Link>
                </div>
            </div>
        </Footer>
    )
}
import Image from "next/image";
import MKNTypography from "../core/ui-kit/typography/nTypography";
import { aboutInfo, mission, vision, approach } from "../core/data/static/aboutInfo";
import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";
import { useRouter } from "next/router";
import { Divider } from "antd";
import MKAboutItem from "../core/ui-kit/card/aboutItem";




export default function MSAbout() {
    const router = useRouter();
    const navigateToHowItWorks = async () => {
        await router.push('/how-it-works');
    }

    const aboutItems = [ mission, vision, approach ]

    return(
        <div className="container pt-30">
            <div className="ant-row">
                <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-12 d-flex flex-column justify-content-center">
                    <Image src="/assets/images/about.jpg" alt="about" width={500} height={400}/>
                    <MPrimaryBtn type="primary" label="How It Works" size="large"
                        action={() => navigateToHowItWorks() }
                    />
                </div>
                <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-12 ph-20 pt-30">
                    <MKNTypography title={aboutInfo.title} content={aboutInfo.content}/>
                </div>
            </div>
            <Divider dashed />
            {
                aboutItems.map((el) => (
                    <MKAboutItem key={el.id} info={el} background={el.background}/>
                ))
            }
        </div>
    )
}
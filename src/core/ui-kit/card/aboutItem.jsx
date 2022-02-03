import MKNTypography from "../typography/nTypography";

export default function MKAboutItem({ background, info }) {

    return(
        <div className={"ant-row mt-30 pv-30 " + background }>
            <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6 ant-col-xl-6 d-flex justify-content-center align-items-center">
                { info.icon }
            </div>
            <div className="ph-20 ant-col-xs-24 ant-col-sm-12 ant-col-md-16 ant-col-lg-18 ant-col-xl-18">
                <MKNTypography title={info.title} content={info.content} color="c-white"/>
            </div>
        </div>
    )
}
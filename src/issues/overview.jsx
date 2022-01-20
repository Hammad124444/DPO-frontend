
export default function MIssueOverView({issues}) {
    return(
        <div className="container ant-row bg-white">
            {
                issues.map((el) => (
                    <div className="ant-col-6 ant-col-sm-24 ant-col-md-8 ant-col-xl-6" key={el.id}>

                    </div>
                ))
            }
        </div>

)
}


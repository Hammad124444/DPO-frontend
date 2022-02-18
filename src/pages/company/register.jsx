import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function MPRegisterCompany() {
    return(
        <h1>Register Company</h1>
    )
}

MPRegisterCompany.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}
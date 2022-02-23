import {listing} from "../../core/data/static/listing";

export default function MSListing({ listId }) {
    const pageInfo = listing[listId];
    return(
        <div className={'container pt-40 pb-30'}>
            <p className={'d-block text-center c-green font-40 font-bold'}>{pageInfo.title}</p>
            <p className={'d-block c-red font-24'}>“{pageInfo.subTitle}”</p>
            {
                pageInfo.paragraphs.map((el, index) => (
                    <p key={index} className={'font-20'}>{el}</p>
                ))
            }
        </div>
    )
}
import {  } from 'antd';
import Image from 'next/image';
import { detaildIssueInfo } from '../../core/data/issues_detailed';

export default function MIssuesById() {
    const exampleData = detaildIssueInfo[0];
    return(
        <div className="container">
        {
            exampleData ? (
                <div>
                    <Image src={exampleData.background} 
                        alt={exampleData.title}
                    />
                    <p>{exampleData.description}</p>
                </div>
            ) : (
                <h1>Empty</h1>
            )
        }
         </div>
    )
}
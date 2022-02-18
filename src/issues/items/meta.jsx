import {Form, Upload} from "antd";
import MEditInput from "../../core/ui-kit/inputs/editInput";
import MTextArea from "../../core/ui-kit/inputs/textarea";
import ImgCrop from "antd-img-crop";
import {useState} from "react";

export default function MNewIssueMeta() {
    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return(
        <>
            <Form.Item label={'Issue Avatar'}>
                <ImgCrop rotate>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                    >
                        {fileList.length < 1 && '+ Upload'}
                    </Upload>
                </ImgCrop>
            </Form.Item>
            <Form.Item label="Issue Name">
                <MEditInput  placeholder="Issue Name"/>
            </Form.Item>
            <Form.Item label="Description">
                <MTextArea placeholder="Description about the issue"/>
            </Form.Item>
        </>
    )
}
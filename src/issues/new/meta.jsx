import {formLayout} from "../../core/data/config/ui-config";
import {Form} from "antd";
import MEditInput from "../../core/ui-kit/inputs/editInput";
import MTextArea from "../../core/ui-kit/inputs/textarea";
import ImgCrop from "antd-img-crop";
import {useState} from "react";

export default function MNewIssueMeta() {
    return(
        <Form {...formLayout}>
            <Form.Item label="Issue Name">
                <MEditInput  placeholder="Issue Name"/>
            </Form.Item>
            <Form.Item label="Description">
                <MTextArea placeholder="Description about the issue"/>
            </Form.Item>
        </Form>
    )
}
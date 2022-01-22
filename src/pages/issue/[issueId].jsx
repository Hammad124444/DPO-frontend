import React, {useState, useEffect} from 'react';
import MEditableIssue from "../../issues/editableIssue";
import MReadableIssue from "../../issues/readableIssue";

export default function MIssuesById() {
    const [role, setRole] = useState('admin');
    // Role Management whether Admin or Investor
    useEffect(() => {
        const tempRole = localStorage.getItem('role');
        if (tempRole) {
            setRole(tempRole);
        }
    }, [])

    if (role == 'admin') {
        return(
            <MEditableIssue/>
        )
    } else {
        return(
            <MReadableIssue/>
        )
    }
}
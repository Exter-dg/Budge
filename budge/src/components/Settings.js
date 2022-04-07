import React from "react";
import Signup from "./Signup";
import { List, Switch } from 'antd-mobile'
import { Navigate } from "react-router-dom";
import {
    UnorderedListOutline,
    PayCircleOutline,
    SetOutline,
} from 'antd-mobile-icons'


export default function Settings(props) {
    const [settingsLink, setSettingsLink] = React.useState("settingslist");
    const [data, rty] = React.useState();
    if (data) {
        return <Navigate to={settingsLink}>click to redirect</Navigate>;
      }


    return (
        <div>
            <List>
                <List.Item prefix={<UnorderedListOutline />} onClick={()=>{ }}>
                    Profile
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
                    Configuration
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => { }}>
                    Accounts
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => { }}>
                    Privacy & Security
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => { }}>
                    Feedback
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => { }}>
                    Recommend
                </List.Item>
                <List.Item prefix={<UnorderedListOutline />} extra={<Switch defaultChecked />}>
                    Toggle Theme
                </List.Item>
                <List.Item prefix={<SetOutline />} onClick={() => {setSettingsLink("signup"); rty(true); }}>
                    Login
                </List.Item>
            </List>
        </div>

    )
}

// References

// https://codesandbox.io/s/nervous-night-dybdu?file=/src/teams/team.js
// https://stackoverflow.com/questions/64291991/nested-routing-is-not-working-in-react-router-v6


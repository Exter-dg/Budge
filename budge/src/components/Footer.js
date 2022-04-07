import React , {useCallback, useEffect} from "react";
import { Badge, TabBar, Tabs } from 'antd-mobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChartArea, faPiggyBank, faList, faC } from '@fortawesome/free-solid-svg-icons'
import {Link, Outlet, useNavigate} from "react-router-dom";

import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'

export default function Footer(props) {
    
    const navigate = useNavigate();
    // ! why does changing state doesn't call this?
    // const redirect = useCallback(() => navigate(navLink, {replace: true}), [navigate, navLink]);
    
    useEffect(() => {
        // redirect();
        navigate(props.navLink, { replace: true });
    }, [props.navLink]);

    const tabs = [
        {
            key: 'transactions',
            title: 'Transactions',
            icon: <FontAwesomeIcon icon={faBook} />,
        },
        {
            key: 'charts',
            title: 'Charts',
            icon: <FontAwesomeIcon icon={faChartArea} />,
        },
        {
            key: 'accounts',
            title: 'Accounts',
            // icon: (active) =>
            //     active ? <FontAwesomeIcon icon={faPiggyBank} /> : <FontAwesomeIcon icon={faPiggyBank} />,
            icon: <FontAwesomeIcon icon={faPiggyBank} />
        },
        {
            key: 'settings',
            title: 'Settings',
            icon: <FontAwesomeIcon icon={faList} />,
        },
    ];
    return (
        // https://stackoverflow.com/questions/8824831/make-div-stay-at-bottom-of-pages-content-all-the-time-even-when-there-are-scrol
        <div style={{"width" : "100%", "position": "absolute", "left": "0", "bottom": "0"}}>
            <TabBar activeKey={props.navLink} onChange={(key)=>{props.setNavLink(key);}}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}>
                    </TabBar.Item>
                ))}
            </TabBar>
            
        </div>
    )
}


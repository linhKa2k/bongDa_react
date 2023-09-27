import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import { items } from './NavBarConfig';
import "./NavBarStyle.scss";

export default function Navbar() {
    const navigate = useNavigate();
    let location = useLocation();
    const [current, setCurrent] = useState('lineup');
    const onClick = (e) => {
        setCurrent(e.key);
        localStorage.setItem("selectedKey", e.key);
        navigate(`${e.key}`);
    };
    useEffect(() => {
        const localData = localStorage.getItem("selectedKey");
        if (localData !== null && location.pathname !== '/cho-tot/lineup') {
            setCurrent(localData)
            navigate(`${localData}`);
        }
        return;
    }, [])
    return (
        <Menu
            items={items}
            mode="horizontal"
            className="navbar"
            onClick={onClick} selectedKeys={[current]}
        />
    );
}

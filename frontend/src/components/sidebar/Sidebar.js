import React, { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://avatars.githubusercontent.com/u/45389833?v=4?s=400" alt="me" />
                <p>Myself doning bestie</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link"><li className="sidebarListItem">{c.name}</li></Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-purple-beautiful-sunset-xishan-beautiful-scenery-background-design-viewsunset-backgroundmountainsunset-west-image_66858.jpg" alt="myimg" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>User Name</label>
                    <input type="text" placeholder="username" />
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

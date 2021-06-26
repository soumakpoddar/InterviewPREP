import React from 'react';
import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://images.hindustantimes.com/tech/img/2020/08/10/960x540/google_ht_1596569117624_1596569137627_1597039273676.png" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-angle-double-up"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

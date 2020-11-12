import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import './ZoomMeeting.css';

let apiKeys = {
    apiKey: process.env.REACT_APP_ZOOM_API_KEY,
    apiSecret: process.env.REACT_APP_ZOOM_API_SECRET_KEY,
};

let meetConfig = {
    apiKey: apiKeys.apiKey,
    leaveUrl: "https://ps-xmas-zoom.netlify.app",
    meetingNumber: "94800471949",
    userName: "Jane Doe",
    userEmail: "example@example.com",
    passWord: "0hZeCd",
    role: 0,
};

const ZoomMeeting = () => {

    const joinMeeting = (signature, meetConfig, userName) => {
        ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            isSupportAV: true,
            success: function (success) {
                console.log("Init Success ", success);
                ZoomMtg.join({
                    meetingNumber: meetConfig.meetingNumber,
                    userName: userName,
                    signature: signature,
                    apiKey: meetConfig.apiKey,
                    passWord: meetConfig.passWord,

                    success: (success) => {
                        console.log('init success', success);
                    },

                    error: (error) => {
                        console.log('init error', error);
                    },
                });
            },
        });
    }

    const initialiseZoom = (userName) => {
        ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.1/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();

        ZoomMtg.generateSignature({
            meetingNumber: meetConfig.meetingNumber,
            apiKey: meetConfig.apiKey,
            apiSecret: apiKeys.apiSecret,
            role: meetConfig.role,
            success: function (res) {
                console.log("res", res);

                setTimeout(() => {
                    joinMeeting(res.result, meetConfig, userName);

                    document.getElementById('zmmtg-root').style.display = 'block';
                }, 1000);
            },
        });
    }

    const onFormSubmit = (e) => {
        const userName = document.getElementById('userName').value;

        e.preventDefault();
        initialiseZoom(userName);
    }

    useEffect(() => {
        document.getElementById('userName').focus();
    }, []);

    return (
        <div className="ZoomMeeting">
            <form onSubmit={onFormSubmit}>
                <h4>Enter your name</h4>
                <input id="userName" name="userName" type="text" autocomplete="off"
                    required />
                <button>Join meeting</button>
            </form>
        </div>
    );
}

export default ZoomMeeting;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayBackgroundImage from '../images/DisplayBackgroundImage';
import { PreviewImage } from "../images/PreviewImage";

interface getUserProp{
    username:string;
    setUsername:(uname:string)=>void;
}

function Home(props:getUserProp) {

    //const [username, setUsername] = useState("");
    const [submitStatus, setSubmitStatus] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus(true);
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/quiz'; 
        navigate(path);
  }

    const homeBackgroundImage = DisplayBackgroundImage();

    return (
        <>
            <main className="home-content" style={{ backgroundImage: `url(${homeBackgroundImage})` }}>

                {/* Other components and content */}
                <form onSubmit={handleSubmit}>
                    <label>Enter name:
                        <input type="text"
                            value={props.username}
                            //onChange={username => setUsername(username.target.value)}
                            onChange={(username) => {props.setUsername(username.target.value)}}
                        />
                    </label>
                    <button type="submit">Submit</button>
                    {submitStatus ? <p>Welcome {props.username}!</p> : null}
                </form>

                <PreviewImage />

                <button className="startQuizButton" onClick={routeChange}>
                     Start quiz 
                </button>

            </main>
        </>
    )
}

export default Home;
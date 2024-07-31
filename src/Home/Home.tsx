import React, { useState } from "react";
import DisplayBgImage from '../images/DisplayBgImage';

function Home() {

    const [username, setUsername] = useState(""); 
    const [submitStatus, setSubmitStatus] = useState(false);  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus(true);
    }

    return (
        <>
        <main>
        <DisplayBgImage />
        <div className="home-content">
        {/* Other components and content */}
            <form onSubmit={handleSubmit}>
                <label>Enter name: 
                    <input type="text"
                    value={username}
                    onChange={username => setUsername(username.target.value)} 
                    />
                </label>
                <button type="submit">Submit</button>
                {submitStatus ? <p>Welcome {username}!</p> : null }
            </form>
            </div>

            </main>
        </>
    )
}

export default Home;
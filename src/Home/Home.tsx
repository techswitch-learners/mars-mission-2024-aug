import { useState } from "react";

function Home() {

    const [username, setUsername] = useState(""); 
    const [submitStatus, setSubmitStatus] = useState(false);  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus(true);
    }

    return (
        <>
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
        </>
    )
}

export default Home;
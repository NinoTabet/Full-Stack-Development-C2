import { useState } from "react";

const ApiCalls = () => {

    const [inputValue, setInputValue] = useState();
    const [apiResponse, setApiResponse] = useState();

    const [movieTitle, setmovieTitle] = useState();

    const url = process.env.API_URL;

    const handleSubmission = async () => {
        try {
            const response = await fetch(`http://localhost:3000/Search?movieName=${inputValue}`,{
                method: 'GET',
                headers:{'Content-Type': 'application/json'}
            });

            if(response.ok){

                const data = await response.json();

                console.log(data)
                setApiResponse(data[0].movie_title);
            }

        } catch (err) {
            console.error(err)
        }
    }

    const handleSubmissionPost = async () => {
        try {
            const response = await fetch(`http://localhost:3000/Create`,{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({movieTitle})
            });

            if (response.ok){

                const data = await response.json();

                console.log(data.message)
            }

        } catch (err) {
            console.error(err)
        }
    }

    return(
        <div>
            <div>
                <input type="search" placeholder="Enter something to search..." onChange={(e) => setInputValue(e.target.value)}></input>
                <button type="submit" onClick={handleSubmission}>Click me to submit the input value</button>
                <p><strong>input value is: </strong> {apiResponse}</p>
            </div>
            <div>
            <input type="text" placeholder="Enter something to post..." onChange={(e) => setmovieTitle(e.target.value)}></input>
                <button type="submit" onClick={handleSubmissionPost}>Click me to submit the input value</button>
            </div>
        </div>
    )
}

export default ApiCalls;
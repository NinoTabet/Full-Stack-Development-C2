import axios from 'axios';
import { useState } from 'react';

const AxiosRequests = () => {

    const [catFact, setCatFact] = useState('');

    const handleClick = async () => {
        const response = await axios.get('https://catfact.ninja/fact')
        
        // const gender = await axios.post('https://api.genderize.io/',
        // {
        //     title: '',
        //     description: ''
        // },
        // {
        //     params:{
        //        name: 'Nino' 
        //     },
        //     headers:{
        //         Authorization: `bearer ${apikey}`
        //     }
        // })
        console.log(response)
        setCatFact(response.data.fact);
    }

    return(
        <div>
            <button onClick={()=>{handleClick()}}>Click me for a cat fact</button>
            <p>This is a random cat fact: {catFact}</p>
        </div>
    );
}
export default AxiosRequests;
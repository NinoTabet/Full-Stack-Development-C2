import axios from 'axios';
import { useState } from 'react';

const AxiosRequests = () => {

    const [catFact, setCatFact] = useState('');

    const handleClick = async () => {
        const response = await axios.get('https://catfact.ninja/fact')
        
        const gender = await axios.post('https://api.genderize.io/',
        {
            title: '',
            description: ''
        },
        {
            params:{
               name: 'Nino' 
            },
            headers:{
                Authorization: `bearer ${apikey}`
            }
        })

        setCatFact(response);
    }

    return(
        <div>
            <button onClick={()=>{handleClick()}}>Click me for a cat fact</button>
            <p>{catFact}</p>
        </div>
    );
}
export default AxiosRequests;
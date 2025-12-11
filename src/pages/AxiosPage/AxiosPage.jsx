import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataCard from '../../common/component/DataCard/DataCard';
import { Box } from '@mui/material';


export default function AxiosPage() {

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        postData();
    }, []);

    const [data, setData] = useState([]);

    //methana data tika st karagena thiyenne
    const [ids, setId] = useState('');
    const [titles, setTitle] = useState('');
    const [dess, setDes] = useState('');

    function getData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    function postData() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            id: ids,
            title: titles,
            body: dess,
        })
            .then(function (response) {
                console.log(response);
                setId('');
                setTitle('');
                setDes('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h2>heloooooo.....!</h2>

            <label htmlFor="text">register</label><br />
            <input type="text" value={ids} name="text" placeholder='id' onChange={(val) => setId(val.target.value)} /><br />
            <input type="text" value={titles} name="text" placeholder='title' onChange={(val) => setTitle(val.target.value)} /><br />
            <input type="text" value={dess} name="text" placeholder='description' onChange={(val) => setDes(val.target.value)} /><br />
            <button onClick={postData}>submit</button>

            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {data.map((val, index) => (
                    <DataCard head={val.id} body={val.body} bottom={val.title} />
                ))}
            </Box>

        </div >
    )
}

import { Navigation, Password } from '@mui/icons-material';
import TextField from '../../common/component/TextField/TextField'
import CustomizedSwitches from '../../common/component/Togglele/Togglele'
import './Register.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {

    useEffect(() => {
        postData
    }, []);
   
    const navigate = useNavigate();

    const [username2, setUsername] = useState("");
    const [password2, setPassword] = useState("");
    const [confirmPassword2, setConfirmPassword] = useState("");
    const [email2, setEmail] = useState("");

    function postData() {
        axios
            .post('https://student-api.acpt.lk/api/register', {
                name: username2,
                Password: password2,
                email: email2,
            })
            .then(function (response) {
                console.log(response);
                setUsername('');
                setPassword('');
                setConfirmPassword('');
                setEmail('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="Register-page">
            <CustomizedSwitches />
            <h1 className="Register">Register Page</h1>
            <TextField value={username2} className="text" color={"white"} placeholder={'Username'} type={'text'} onChange={(val) => setUsername(val.target.value)} />
            <TextField value={password2} className="text" color={"white"} placeholder={'Password'} type={'password'} onChange={(val) => setPassword(val.target.value)} />
            <TextField value={confirmPassword2} className="text" color={"white"} placeholder={'confirm Password'} type={'password'} onChange={(val) => setConfirmPassword(val.target.value)} />
            <TextField value={email2} className="text" color={"white"} placeholder={'email'} type={'email'} onChange={(val) => setEmail(val.target.value)} />

            <button onClick={postData} className="Register-button" >Register</button>

            <button onClick={() => navigate('/login')} className="Register-button" >Go to login</button>

        </div>
    )
}
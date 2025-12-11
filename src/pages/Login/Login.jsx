import React, { useEffect, useState } from "react";
import "./Login.css";
import CustomizedSwitches from '../../common/component/Togglele/Togglele'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {

    useEffect(() => {
        postData
    }, []);

    const [email1, setEmail] = useState("");
    const [password1, setPassword] = useState("");


    function postData() {
        axios
            .post('https://student-api.acpt.lk/api/login', {
                email: email1,
                password: password1,

            })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('afsd', response.data.token)
                window.location.reload()
                setEmail('');
                setPassword('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Box
            className="boxx"
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
            }}
        >
            <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                <CustomizedSwitches />
            </Box>

            <Card className="login-card" sx={{
                minWidth: 500,
                maxWidth: 500,
                borderRadius: 5,

            }}>
                <CardContent>
                    <Typography className="h4" variant="h4" gutterBottom>
                        Login
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                        <TextField
                            className="input"
                            id="demo-helper-text-aligned"
                            label="email"
                            value={email1}
                            onChange={(val) => setEmail(val.target.value)}
                            fullWidth
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2
                    }}>
                        <TextField
                            className="input2"
                            id="demo-helper-text-aligned-password"
                            label="Password"
                            type="password"
                            value={password1}
                            onChange={(val) => setPassword(val.target.value)}
                            fullWidth
                        />
                    </Box>

                    <Stack className="button1" spacing={2} direction="row" sx={{ padding: 2 }}>
                        <Button className="button3" variant="contained" fullWidth onClick={postData}>
                            Login
                        </Button>
                    </Stack>
                </CardContent>

                <CardActions className="button2" sx={{ marginLeft: 20, marginBottom: 1 }}>
                    <Button size="small">Forget Password</Button>
                </CardActions>

                {/* direct component ekakta yanna use karanne meka */}
                <Link to={'/register'}>
                    <Stack className="button1" spacing={2} direction="row" sx={{ padding: 2 }}>
                        <Button className="button3" variant="contained" fullWidth >
                            go to register
                        </Button>
                    </Stack>
                </Link>

            </Card>
        </Box>
    );
}
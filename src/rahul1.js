import React, { useState, useEffect } from 'react';
//import "../Styles/CA1.css";
import { Box, TextField, FormControl, Input, InputLabel, FormHelperText } from '@mui/material';
import "./rahul1.css";

function CA1() {

    //Initial helper texts
    const [untxt, setUntxt] = useState("");
    const [pwtxt, setPwtxt] = useState("");
    const [pwlength, setPwlength] = useState("");
    const [cpwtxt, setCpwtxt] = useState("");

    //To check the Confirm Password
    const [pw, setPw] = useState("");

    //To change color based on Input
    const [uc, setUc] = useState("c0");
    const [pwc, setPwc] = useState("c0");
    const [cpwc, setCpwc] = useState("c0");

    //Handling the UserName Input
    const handleUn = (event) => {
        const val = event.target.value;

        if (val === "") {
            setUntxt("Please enter your UserName");
            setUc("c0");
        }
        else if (val === "Rahul") {
            setUntxt("Nice name");
            setUc("c4");
        }
        else {
            
            setUc("c9");
        }
    }
    //Handling email
    const handleEm = (event) => {
        const val = event.target.value;

        if (val === "") {
            setUc("c0");
        }
        else if (val === "Rahul@gmail.com") {
            setUc("c4");
        }
        else {
            setUc("c9");
        }
    }

    //Handling the Password Input
    const handlePw = (event) => {
        const val = event.target.value;
        setPw(val);
        // handleCpw();

        if (val.length < 8) {
            setPwlength("At least 8 characters");
        }
        else if (val.length >= 8) {
            setPwlength("");
        }

        if (val === "") {
            setPwtxt("Please enter your Password");
            setPwc("c0");
        }
        else if (pwValidate(event.target.value) === 1) {
            setPwtxt("Password is weak");
            setPwc("c1");
        }
        else if (pwValidate(event.target.value) === 2) {
            setPwtxt("Password is Good");
            setPwc("c2");
        }
        else if (pwValidate(event.target.value) === 3) {
            setPwtxt("Password is strong");
            setPwc("c3");
        }
        else if (pwValidate(event.target.value) === 4 && val.length >= 8) {
            setPwtxt("Password is very strong");
            setPwc("c4");
        }

    }

    //Handling the ConfirmPassword Input
    const handleCpw = (event) => {
        const val = event.target.value;

        if (val === "") {
            setCpwtxt("Confirm your Password");
            setCpwc("c0");
        }
        else if (val === pw) {
            setCpwtxt("Passwords Matched");
            setCpwc("c4");
        }
        else {
            setCpwtxt("Passwords don't match");
            setCpwc("c2");
        }
    }

    //Validating the password
    const pwValidate = (pw) => {
        let strength = 0;

        if (pw.match(/(?=.*[a-z])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[A-Z])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[0-9])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[!@#\$%\^&\*])/)) {
            strength++;
        }

        return strength;
    }

    //Component to be rendered
    return (
        <Box className='box' sx={{
            backgroundColor: 'green',
            width: 450,
            height: 520,
            borderRadius: 25
        }}>
            <div className='box-conts'>

                <FormControl variant="standard">
                    <InputLabel htmlFor="uname">UserName</InputLabel>
                    <Input
                        id="uname"
                        onChange={handleUn}
                    />
                    <FormHelperText id={uc} sx={{ color: "red" }}>{untxt}</FormHelperText>
                </FormControl>
                <br /><br />

                <FormControl variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        onChange={handleEm}
                    />
                    <FormHelperText></FormHelperText>
                </FormControl>
                <br /><br />


                <FormControl variant="standard">
                    <InputLabel htmlFor="pw">Password</InputLabel>
                    <Input
                        type="password"
                        id="pw"
                        onChange={handlePw}
                    />
                    <FormHelperText id="pwl-text" sx={{ color: "red" }}>{pwlength}</FormHelperText>
                    <FormHelperText id={pwc} sx={{ color: { pwc } }}>{pwtxt}</FormHelperText>
                </FormControl>
                <br /><br />

                <FormControl variant="standard">
                    <InputLabel htmlFor="cpw">Confirm Password</InputLabel>
                    <Input
                        type="password"
                        id="cpw"
                        onChange={handleCpw}
                    />
                    <FormHelperText id={cpwc} sx={{ color: "red" }}>{cpwtxt}</FormHelperText>
                </FormControl>

            </div>
        </Box>
    )
}

export default CA1;
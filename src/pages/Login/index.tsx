import Box from '@mui/material/Box';
import ContainerStyled from "./styles"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {BiUser} from "react-icons/bi"

import { useForm, useFormState } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import 'react-toastify/dist/ReactToastify.css';

const Login = () =>{    
    const schema = yup.object().shape({
        account: yup.string().required("UID obrigatório"),
        password: yup.string().required("Cliente obrigatória"),
        holder: yup.string().required("Token obrigatória")
    })
    const {register,handleSubmit, formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    console.log(errors)

    return(
        <ContainerStyled
            
            sx={{padding:"0",
            width:"100vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
            
            }} >
            <Box 
                sx={{ bgcolor: '#cfe8fc', 
                height: '100vh',
                maxWidth:"450px", 
                padding:"20px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
                }} >

                <BiUser size="60px" color="#1166d2"/>
                    <h1>Sign in</h1>
                    <Box component="form" maxWidth="400px" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="account"
                            label="Account"
                            autoComplete="account"
                            autoFocus
                            {...register("account")}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register("password")}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Holder"
                            type="holder"
                            id="holder"
                            autoComplete="holder"
                            {...register("holder")}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={()=>console.log("show it!")}
                            sx={{ mt: 3, mb: 2 }}
                        >Sign In
                        </Button>   
                    </Box>
            </Box>
        </ContainerStyled>
    )
}
export default Login

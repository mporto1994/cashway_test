
import  {useState, useEffect}  from 'react';
import * as React from 'react';

import { useForm, useFormState } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import { Button, Input, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';

import { Header } from '../../components/Header';
import DashboardStyled from './styles';
import { TransactionCard } from '../../components/TransactionCard';

import axios from "axios"
import {api} from "../../services/api";

const Dashboard = () =>{

    interface clientDataInterface{
        uid:string,
        client:string,
        acessToken:string
    }
    interface transactionsInterface{
        date:string,
        description:string,
        complement:string,
        amount:number
    }
    
    const [auth, setAuth] = useState(false)
    const [alignment, setAlignment] = useState('Semana');
    const [showBalance, setShowBalance] = useState(false)
    const [periodData, setPeriodData] = useState([])
    
    const [transactions, setTransactions] = useState<transactionsInterface[]>([])
    const [semana, setSemana] = useState<transactionsInterface[]>([])
    const [quinze, setQuinze] = useState<transactionsInterface[]>([])
    const [mes, setMes] = useState<transactionsInterface[]>([])
    const [filtrado, setFiltrado] = useState<transactionsInterface[]>([])
    
    
    
    const schema:yup.SchemaOf<clientDataInterface> = yup.object().shape({
        uid: yup.string().required("UID obrigatório"),
        client: yup.string().required("Cliente obrigatória"),
        acessToken: yup.string().required("Token obrigatória")
    })
    
    const {register,handleSubmit, formState:{errors}}=useForm<clientDataInterface>({
        resolver:yupResolver(schema)
    })

    type makeLoginInterface = (data:clientDataInterface)=>void
    
    const makeLogin = (data:clientDataInterface) =>{
        axios.post(`${api}/validate_token?uid={{user_uid}}&client={{user_client}}&access-token={{user_access_token}}`,data)
        .then((response)=>{
            setAuth(true);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    useEffect(()=>{
        api.get(`/semana`)   
            .then((response)=>{
                console.log(response.data)
                setSemana(response.data)
            })
            .catch((error)=>console.log(error.message))

        api.get(`/quinze`)   
        .then((response)=>{
            console.log(response.data)
            setQuinze(response.data)
        })
        .catch((error)=>console.log(error.message))

        api.get(`/mes`)   
        .then((response)=>{
            console.log(response.data)
            setMes(response.data)
        })
        .catch((error)=>console.log(error.message))
    },[])

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
        ) => {
            if (newAlignment?.length) {
                setAlignment(newAlignment);
        }
      };

    return(
        <DashboardStyled
            sx={{
                padding:"0",
                width:"100vw",
                height:"100%"
                }}>
            <Header/>
            <div className='body'>
                <Box className="boxClientForm" >
                    <h2>Cliente</h2>
                    <form onSubmit={handleSubmit(makeLogin)}>
                        <input type="text" placeholder='ID'  {...register("uid")}/>
                        <input type="text" placeholder='Cliente'  {...register("client")}/>
                        <input type="text" placeholder='Token'  {...register("acessToken")}/>
                    <Button type="submit" variant="contained">Procurar</Button>
                    </form>
                </Box>
                <Box className="boxBalance">
                    <h2>Balance</h2>
                    <Button 
                        sx={{height:"40px"}}
                        variant="contained"
                        onClick={()=>setShowBalance(true)}>

                        <SavingsIcon 
                        sx={{marginRight:"15px"}}/>
                        {showBalance?<p className='showing'>R$35142,00</p>:<p className='hidden'>******</p>}
                    </Button>
                    
                </Box>
                <Box className="boxTransactions">
                    <h2>Transactions</h2>
                    <div className='transactions'>
                    <ToggleButtonGroup
                        sx={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexWrap:"wrap"}}

                        className="ToggleButtonGroup"
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        >
                        <ToggleButton onClick={()=>setTransactions(semana)} value="semana">Semana</ToggleButton>
                        <ToggleButton  onClick={()=>setTransactions(quinze)} value="quinze">Quinze dias</ToggleButton>
                        <ToggleButton  onClick={()=>setTransactions(mes)} value="mes">Mes</ToggleButton>
                        <ToggleButton  onClick={()=>setTransactions(quinze)} className="filterInput" sx={{padding:"5px 11px"}} value="Filtro">Filtrar período
                            <div>
                            <input type="text" placeholder='Data Inicial' />
                            <input type="text" placeholder='Data Final'/>

                            </div>
                            <Button type='submit' variant="contained" ><SearchIcon /></Button>
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <div className='TransactionsContainer'>
                        {transactions.map((transaction=>(<TransactionCard transactionData={transaction}></TransactionCard>)))}
                    </div>    

                    </div>
                </Box>
            </div>
            
        </DashboardStyled>
    )
}
export default Dashboard

import LogoutIcon  from '@mui/icons-material/Logout';
import HeaderStyled from "./styles"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <HeaderStyled>
            <AccountBalanceIcon/>
            <Link to="/"><LogoutIcon sx={{color:'#111'}}/></Link>
        </HeaderStyled>
    )
}
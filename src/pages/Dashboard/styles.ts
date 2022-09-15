
import styled from "styled-components";
import Container, {ContainerProps} from '@mui/material/Container';

const DashboardStyled = styled(Container)`
    background-color:var(--lightBlue1);
    height:100%;

    .body{
        display:block;
        max-width:800px;
        width:100%;
        flex-direction:column;
        padding:40px 20px 5px 20px;
        background-color:var(--lightBlue1);

        .boxClientForm{
            padding:20px 0;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            
            h2{
                padding-bottom:10px
            }
            form{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-wrap:wrap;

            }
            input{
                margin:5px;
                height:30px;
            }
            button{
                margin:5px;
            }

        }

        .boxTransactions{
            padding-top:30px;
            border-top:1px solid grey;
            
        }


        .boxBalance{
            border-top:1px solid grey;
            width:100%;
            height:100px;
            padding:20px 0;
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-wrap:wrap;

            
            .showing{
                font-size:20px;
                font-weight:700;
            }
            .hidden{
                font-size:30px;
            }
        }
        .transactions{
            
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-wrap:wrap;
            flex-direction:column;
        }

        .ToggleButtonGroup{
            padding:20px 0;
        }

        input{
            border:none;
            height:30px;
            width:80px;
            margin:5px;
            padding:10px;
            border-radius:3px;
            text-align:center;
        }

        .TransactionsContainer{
            padding-top:20px;
            border-top:1px solid grey;
            width:100%
        }            

        @media (max-width: 350px){
            padding-left:5px;
            padding-right:5px;
            
            .boxBalance {
                h2{
                    padding-left:10px;
                }
                Button{
                    padding-right:10px;

                }
            }
            .boxTransactions{
                h2{
                    padding-left:10px;

                }
            }

        }

`
export default DashboardStyled
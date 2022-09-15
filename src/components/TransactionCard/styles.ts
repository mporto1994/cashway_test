import styled from "styled-components";

export const TransactionCardStyled = styled.div`
    border:none;
    font-size:;
    color:;
    font-weight:;
    height:100px;
    width:100%;
    margin:3px;
    padding:10px;
    border-radius:3px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    div{
        width:100%;
    }
    
    /* Descrition and complement */
    div:nth-child(1) {
        height:100%;
        width:100%;
        display:flex;
        align-items:flex-start;
        justify-content:center;
        flex-direction:column;
        p:nth-child(1){
            font-size:20px;
            color:;
            font-weight:600;
        }
        p:nth-child(2){
            font-size:;
            color:grey;
            font-weight:;
        }
    }
    /* Date */
    div:nth-child(2) {
        font-weight:600;
        color:grey;
        height:100%;
        display:flex;
        justify-content:flex-start;
        flex-direction:column;
    }
    /* Amount */
    div:nth-child(3) {
        height:100%;
        display:flex;
        align-items:flex-end;
        justify-content:center;
        flex-direction:column;
        p{
            font-size:30px;
            color:grey;
            font-weight:;
        }
    }
    :nth-child(2n -1) {
        background-color:#FFF;
    }
`
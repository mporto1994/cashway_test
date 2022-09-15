import { TransactionCardStyled } from "./styles"

interface transactionDataInterface{
    transactionData: {
        date:string,
        description:string,
        complement:string,
        amount:number
    }
}

export const TransactionCard = ({transactionData}:transactionDataInterface) =>{
    const {date,description,complement,amount} = transactionData
    return(
        <TransactionCardStyled className="TransactionCardStyled">
            <div>
                <p>{description}</p>
                <p>{complement}</p>
            </div>
            <div><p>{date}</p></div>
            <div>
                <p>R${amount}</p>
            </div>
            
        </TransactionCardStyled>
    )    
}
import style from "./style.module.css"

export function CreditCard (props){
    let divStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`
    }

    return (
        <div className={style.creditCard} style={divStyle}>
            <p>type:{props.type}</p>
            <p>number: {props.number}</p>
            <p>month: {props.expirationMonth}</p>
            <p>year: {props.expirationYear}</p>
            <p>bank: {props.bank}</p>
            <p>owner: {props.owner}</p>
        </div>
    )
}
import style from "./style.module.css"

export function Random (props){
    return <div className={style.box}>
        <text>Random value between {`${props.min}`} and {`${props.max}`} => {`${(props.min+props.max)/2}`}</text>
    </div>
}
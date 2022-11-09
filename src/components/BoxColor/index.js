import style from "./style.module.css"

export function BoxColor (props){
    // BoxColor.setAttribute(background-color, {`rgb ${props.r}${props.g}${props.b}`})
    return <div className={style.div} background-color={`rgb ${props.r}${props.g}${props.b}`}>S</div>
}
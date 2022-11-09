import style from "./style.module.css"

export function Greetings (props){
    if (props.lang === "en"){
        return (
            <div className={style.box}>
                <text>Goodmorning {props.children}</text>
            </div>
        );
    }
    if  (props.lang === "fr"){
        return(
            <div className={style.box}>
                <text>Bonjour {props.children}</text>
            </div>
        );
    }
    if  (props.lang === "de"){
        return(
            <div className={style.box}>
                <text>Guten Morgen {props.children}</text>
            </div>
        );
    }
    if  (props.lang === "es"){
        return(
            <div className={style.box}>
                <text>Buenos dias {props.children}</text>
            </div>
        );
    }
}
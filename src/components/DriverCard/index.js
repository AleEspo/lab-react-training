import style from "./style.module.css"
import carImg from "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"


export function DriverCard (props){
    return(
        <div className={style.box}>
            name: {props.name} <br/>
            rating: {props.rating} <br/>
            car: {props.model} - {props.licencePlate} <br/>

            <img src={props.img} alt="#" /> <br/>

        </div>
    )
}
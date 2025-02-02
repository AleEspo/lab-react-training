import { IdCard } from "./components/IdCard";
import { Greetings } from "./components/Greetings"
import { Random } from "./components/Random";
import { BoxColor } from "./components/BoxColor"
import { CreditCard } from "./components/CreditCard"
import { Rating } from "./components/Rating"
import {DriverCard} from "./components/DriverCard"

function App() {
  return (
    <div className="App">
      <IdCard
      firstName = "John"
      lastName = "Doe"
      gender = "male"
      height = "178"
      birth = ""
      picture = "https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Random min={1} max={6}/>
      <BoxColor r={255} g={0} b={0} />
      <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
      />
      <Rating>1.49</Rating>
      <DriverCard
      name="Dara Khosrowshahi"
      rating={4.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }}
/>
    </div>
  );
}

export default App;

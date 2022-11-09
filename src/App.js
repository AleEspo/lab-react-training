import { IdCard } from "./components/IdCard";
import { Greetings } from "./components/Greetings"
import { Random } from "./components/Random";

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
      {/* <Greetings lang="de">Ludwig</Greetings> */}
      <Random min={1} max={6}/>
    </div>
  );
}

export default App;

import Countdown from "./CountDownTimer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Count Down Timer</h1>
      <Countdown targetDate="2024-05-28T12:00:00" />
      <span> Timer value will end at 28 May 2024 12:00:00</span>
    </div>
  );
}

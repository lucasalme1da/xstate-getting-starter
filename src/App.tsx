import { useMachine } from "@xstate/react";
import "./App.css";
import { trafficLightMachine } from "./machine";

function App() {
  const [current, send] = useMachine(trafficLightMachine);

  return (
    <div className="main__container">
      <div className="main__traffic-light">
        <input
          type="checkbox"
          readOnly
          className="light red"
          checked={current.matches({ ON: "red" })}
        />
        <input
          type="checkbox"
          readOnly
          className="light yellow"
          checked={current.matches({ ON: "yellow" })}
        />
        <input
          type="checkbox"
          readOnly
          className="light green"
          checked={current.matches({ ON: "green" })}
        />
        <button
          type="button"
          className="next-button"
          onClick={() => {
            send("NEXT");
          }}
        >
          NEXT
        </button>
        <button
          type="button"
          className="next-button"
          onClick={() => {
            send("TURN_ON");
          }}
        >
          TURN ON
        </button>
        <button
          type="button"
          className="next-button"
          onClick={() => {
            send("TURN_OFF");
          }}
        >
          TURN OFF
        </button>
      </div>
    </div>
  );
}

export default App;

import ReactDOM from "react-dom";
import UserSearch from "./state/UserSearch";

import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>
        <UserSearch />
        <EventComponent />
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

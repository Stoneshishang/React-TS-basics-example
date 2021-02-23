import ReactDOM from "react-dom";
import UserSearch from "./state/UserSearch";
import UserSearchClass from "./classbasedcomponents/UserSearch";

import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>
        <UserSearch />
        <EventComponent />
        <UserSearchClass />
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

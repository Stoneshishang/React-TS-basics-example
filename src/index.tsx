import ReactDOM from "react-dom";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <h1>
        <UserSearch />
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

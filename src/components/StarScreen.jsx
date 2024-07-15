import { Link } from "react-router-dom";
function StarScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
      <br />
      <Link to="/instructions" className="btn btn-ui">
        Instructions
      </Link>
    </div>
  );
}

export default StarScreen;

function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  restart,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === maxPossiblePoints) emoji = "👌";
  if (percentage >= 100 && percentage < 200) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.floor(percentage)}%) points
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;

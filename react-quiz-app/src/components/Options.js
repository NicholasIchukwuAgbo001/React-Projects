const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const isSelected = index === answer;
        const isCorrect = index === question.correctOption;

        let className = "btn btn-option";

        if (hasAnswered) {
          if (isSelected) className += " answer";
          if (isCorrect) className += " correct";
          else if (isSelected && !isCorrect) className += " wrong";
        }

        return (
          <button
            key={option}
            className={className}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;

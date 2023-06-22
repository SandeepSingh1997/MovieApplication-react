import Style from "./SuggestionBox.module.scss";

function SuggestionBox({ suggestions, onSuggestionSelect }) {
  const showSuggestions = () => {
    return suggestions.map((suggestion) => (
      <li
        className={Style.item}
        key={suggestion.id}
        onClick={() => onSuggestionSelect(suggestion.id)}
      >
        {suggestion.title}
      </li>
    ));
  };

  return (
    <ul type="none" className={Style.container}>
      {showSuggestions()}
    </ul>
  );
}

export default SuggestionBox;

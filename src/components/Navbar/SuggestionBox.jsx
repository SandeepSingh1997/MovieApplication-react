function SuggestionBox({ suggestions, onSuggestionSelect }) {
  const showSuggestions = () => {
    return suggestions.map((suggestion) => (
      <li key={suggestion.id} onClick={() => onSuggestionSelect(suggestion.id)}>
        {suggestion.title}
      </li>
    ));
  };
  return (
    <ul type="none" style={{ border: "1px solid black" }}>
      {showSuggestions()}
    </ul>
  );
}

export default SuggestionBox;

function SuggestionBox({ suggestions }) {
  const showSuggestions = () => {
    return suggestions.map((suggestion) => <li>suggestion#1</li>);
  };
  return (
    <ul type="none" style={{ border: "1px solid black" }}>
      {showSuggestions()}
    </ul>
  );
}

export default SuggestionBox;

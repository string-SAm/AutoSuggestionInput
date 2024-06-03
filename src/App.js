import Autocomplete from "./components/autocomplete";

export default function App() {
  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Network response is not ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <div className="App">
      <h1>AutoComplete/TypeHead</h1>
      <Autocomplete
        placeholder={"Enter Recipe..."}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading...</>}
        onSelect={(res) => {}}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyle={{}}
      />
    </div>
  );
}

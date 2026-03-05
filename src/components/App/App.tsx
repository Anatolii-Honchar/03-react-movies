import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearchSubmit} />
    </div>
  );
}

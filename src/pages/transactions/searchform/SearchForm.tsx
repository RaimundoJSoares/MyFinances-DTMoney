import { MagnifyingGlass } from "phosphor-react";
import { SearchFormStyle } from "./SearchFormStyle";

export function SearchForm() {
  return (
    <SearchFormStyle>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormStyle>
  );
}

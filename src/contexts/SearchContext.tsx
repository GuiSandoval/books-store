import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

interface ISearchContext {
  searchValue: string;
  setSearchValue: (search: string) => void;
}

interface ISearchProvider {
  children: React.ReactNode;
}

const SearchContext = createContext<ISearchContext>({
  searchValue: "",
  setSearchValue: () => { },
});

function SearchProvider({ children }: ISearchProvider) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  console.log(queryParams)
  const searchParam = queryParams.get("q") || "";

  const [searchValue, setSearchValue] = useState(searchParam);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };

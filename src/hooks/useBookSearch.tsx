import { createContext, useContext, useState } from "react";
import { IBook, IBookSearch } from "../interfaces/boook";
import { useBooks } from "../services/hooks/useBooks";
import { useSearch } from "../contexts/SearchContext";

interface IFilterValues {
  price0To30: boolean;
  price31To50: boolean;
  price51To100: boolean;
  price100: boolean;
  isAvailable: boolean;
  isUnavailable: boolean;
  epub: boolean;
  pdf: boolean;
}

const FILTER_PARAMS = {
  price0To30: (book: IBookSearch) => book.price > 0 && book.price < 30,
  price31To50: (book: IBookSearch) => book.price > 30 && book.price < 50,
  price51To100: (book: IBookSearch) => book.price > 50 && book.price < 100,
  price100: (book: IBookSearch) => book.price > 100,
  isAvailable: (book: IBookSearch) => book.isAvailable,
  isUnavailable: (book: IBookSearch) => !book.isAvailable,
  epub: (book: IBookSearch) => book.format.includes('epub'),
  pdf: (book: IBookSearch) => book.format.includes('pdf'),
} as const;

type FilterParams = keyof typeof FILTER_PARAMS;

interface ISearchValueContext {
  queryBooks: any;
  booksFiltered: IBookSearch[];
  filterValues: IFilterValues;
  updateFilterValues: (value: string, checked: boolean) => void;
  clearFilterValues: () => void;
}

const SearchValueContext = createContext<ISearchValueContext>({
  queryBooks: {},
  booksFiltered: [],
  filterValues: {},
  updateFilterValues: () => { },
  clearFilterValues: () => { }
} as any);


function SearchValueProvider({ children }: any) {
  const { searchValue } = useSearch();
  const queryBooks = useBooks(searchValue);
  const { data } = queryBooks;
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    price0To30: false,
    price31To50: false,
    price51To100: false,
    price100: false,
    isAvailable: false,
    isUnavailable: false,
    epub: false,
    pdf: false,
  });


  function clearFilterValues() {
    setFilterValues(prev => ({
      ...prev,
      price0To30: false,
      price31To50: false,
      price51To100: false,
      price100: false,
      isAvailable: false,
      isUnavailable: false,
      epub: false,
      pdf: false,
    }));
  }

  function updateFilterValues(value: string, checked: boolean) {
    setFilterValues(prev => ({
      ...prev,
      [value]: checked,
    }));
  }

  const booksFormatted = data?.pages.reduce((acc, page) => ([...acc, ...page]), [])
  const booksFiltered = booksFormatted?.filter(book => {
    const filterKeys = Object.keys(filterValues);
    const filterValuesArray = Object.values(filterValues);
    const filterKeysChecked = filterKeys.filter((_, index) => filterValuesArray[index]) as FilterParams[];
    if (filterKeysChecked.length === 0) return true;

    return filterKeysChecked.some(key => FILTER_PARAMS[key](book));
  }) as IBookSearch[];

  return (
    <SearchValueContext.Provider
      value={{
        queryBooks,
        booksFiltered,
        filterValues,
        updateFilterValues,
        clearFilterValues
      }}>
      {children}
    </SearchValueContext.Provider>
  );
}

function useBookSearch() {
  const context = useContext(SearchValueContext);

  return context;
}

export { SearchValueProvider, useBookSearch };
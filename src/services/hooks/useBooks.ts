import { useInfiniteQuery, useQuery } from "react-query";
import { apiUrl } from "../apiUrl";
import { IBook } from "../../interfaces/boook";

// https://www.googleapis.com/books/v1/volumes?q=a+subject:adventure&startIndex=0&maxResults=10

async function getBooks(query: string, pageParam: number): Promise<IBook[]> {
  const { data } = await apiUrl.get("/volumes", {
    params: {
      q: query,
      startIndex: pageParam,
      maxResults: 40,
    },
  });

  const formattedData = data.items.map((book: any) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      image: book.volumeInfo.imageLinks?.thumbnail,
      author: book.volumeInfo.authors,
    };
  });

  return formattedData;
}
async function getBooksCategory(category: string): Promise<IBook[]> {
  const { data } = await apiUrl.get("/volumes", {
    params: {
      q: `a+subject:${category}`,
      startIndex: 0,
      maxResults: 10,
    },
  });

  const formattedData = data.items.map((book: any) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      image: book.volumeInfo.imageLinks.thumbnail,
      author: book.volumeInfo.authors,
    };
  });

  return formattedData;
}

export function useBooksCategory(category: string) {
  return useQuery(
    ["booksCategory", category],
    () => getBooksCategory(category),
    {
      staleTime: Infinity,
    }
  );
}
export function useBooks(query: string) {
  return useInfiniteQuery(
    ["books", query],
    ({ pageParam = 0 }) => getBooks(query, pageParam),
    {
      staleTime: Infinity,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length ? pages.length * 40 : false;
      },
    }
  );
}

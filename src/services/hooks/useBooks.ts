import { useInfiniteQuery, useQuery } from "react-query";
import { apiUrl } from "../apiUrl";
import { IBook, IBookSearch } from "../../interfaces/boook";

// https://www.googleapis.com/books/v1/volumes?q=a+subject:adventure&startIndex=0&maxResults=10

async function getBooks(
  query: string,
  pageParam: number
): Promise<IBookSearch[]> {
  const { data } = await apiUrl.get("/volumes", {
    params: {
      q: query,
      startIndex: pageParam,
      maxResults: 40,
    },
  });

  function getFormat(book: any) {
    let allowFormats = [];

    if (book.accessInfo?.pdf.isAvailable) allowFormats.push("pdf");
    if (book.accessInfo?.epub.isAvailable) allowFormats.push("epub");

    return allowFormats;
  }

  const formattedData = data.items.map((book: any) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      image: book.volumeInfo.imageLinks?.thumbnail,
      author: book.volumeInfo.authors,
      price: book.saleInfo.listPrice?.amount,
      isAvailable: book.saleInfo.isEbook,
      format: getFormat(book),
    };
  });

  return formattedData;
}
async function getBooksCategory(category: string): Promise<IBook[]> {
  const { data } = await apiUrl.get("/volumes", {
    params: {
      q: category !== "featured" ? `a+subject:${category}` : "a",
      startIndex: 0,
      maxResults: 10,
      orderBy: category === "featured" ? "newest" : "relevance",
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
      enabled: false,
      staleTime: Infinity,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length ? pages.length * 40 : false;
      },
    }
  );
}

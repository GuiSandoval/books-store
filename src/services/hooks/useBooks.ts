import { useQuery } from "react-query";
import { apiUrl } from "../apiUrl";
import { IBook } from "../../interfaces/boook";

// https://www.googleapis.com/books/v1/volumes?q=a+subject:adventure&startIndex=0&maxResults=10

async function getBooks(category: string): Promise<IBook[]> {
  console.log("chegou aqui no getBooks");
  console.log(category);

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
  return useQuery(["books", category], () => getBooks(category), {
    staleTime: Infinity,
  });
}

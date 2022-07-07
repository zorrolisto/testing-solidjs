import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";

interface IBookshelfProps {
  name: string;
}
export type Book = {
  title: string;
  author: string;
};
const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function BookShelf(props: IBookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks);
  const totalBooks = () => books().length;
  return (
    <div>
      <h1>Bookshelf of {props.name}</h1>
      <p>Total of books: {totalBooks}</p>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
}

const root = document.getElementById("root");

root && render(() => <BookShelf name="Julio" />, root);

import { createSignal, JSX, Setter } from "solid-js";
import { Book } from "./App";

interface IAddBookProps {
  setBooks: Setter<Book[]>;
}
const emptyBook: Book = { title: "", author: "" };

export function AddBook(props: IAddBookProps) {
  const [newBook, setNewBook] = createSignal(emptyBook);
  const addBook: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (event) => {
    event.preventDefault();
    props.setBooks((currentBooks) => [...currentBooks, newBook()]);
    setNewBook(emptyBook);
  };
  return (
    <form>
      <div>
        <label for="title">Book name</label>
        <input
          id="title"
          value={newBook().title}
          onInput={(e) =>
            setNewBook({ ...newBook(), title: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <label for="author">Author</label>
        <input
          id="author"
          value={newBook().author}
          onInput={(e) =>
            setNewBook({ ...newBook(), author: e.currentTarget.value })
          }
        />
      </div>
      <button type="submit" onClick={addBook}>
        Add book
      </button>
    </form>
  );
}

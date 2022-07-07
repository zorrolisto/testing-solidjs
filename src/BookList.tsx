import { createSignal, For } from "solid-js";
import { Book } from "./App";

interface IBookListProps {
  books: Book[];
}

export function BookList(props: IBookListProps) {
  return (
    <ul>
      <For each={props.books}>
        {(book) => (
          <li>
            {book.title}{" "}
            <span style={{ "font-style": "italic" }}>({book.author})</span>
          </li>
        )}
      </For>
    </ul>
  );
}

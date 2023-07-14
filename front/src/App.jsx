import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { getAll } from "./service/books";

function App() {
  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: getAll,
  });

  console.log(data)

  return (
    <>
      <h1>Books</h1>
      {data?.data?.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
        </div>
      ))}
    </>
  );
}

export default App;

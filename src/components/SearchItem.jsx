import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import UseDebounce from "./UseDebounce";
import data from "../Data";

console.log(data);

const SearchItem = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchItem = UseDebounce(keyword, 500);

  useEffect(() => {
    if (debouncedSearchItem) {
      setLoading(true);

      setResults(
        data.filter((o) =>
          o.superhero.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
        )
      );
      setLoading(false);
    } else {
      setLoading(false);
      setResults([]);
    }
  }, [debouncedSearchItem]);

  return (
    <div className="flex flex-col justify-center items-center rounded ">
      <div className="flex flex-row bg-purple-200 py-2 rounded-tl rounded-tr px-4 rounded-2xljustify-between itens-center ">
        <input
          placeholder="Type your Superhero Here "
          className="bg-transparent text-blue-700 border-none outline-none mr-2 w-full "
          onChange={(e) => setKeyword(e.target.value)}
        />

        <AiOutlineSearch
          size={30}
          className="text-blue-500 hover:cursor-pointer"
        />
      </div>

      {results?.map((item) => (
        <div className="bg-purple-100 w-full flex justify-start px-4  py-1 text-blue-800">
          {item.superhero}
        </div>
      ))}
    </div>
  );
};

export default SearchItem;

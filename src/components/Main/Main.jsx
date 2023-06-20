import { useContext } from "react";
import { SearchContext } from "./SearchProvider";

export default function Main() {
  const searchText = useContext(SearchContext);
  return <main>{searchText}</main>;
}

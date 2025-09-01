import { selectSearchSuggestion } from "@/features/products/store/productSelectors";
import {
  setSearchQuery,
  setSelectedGender,
} from "@/features/products/store/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import Search from "@public/icons/icon-search.svg";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SelectGender = "all" | "men" | "women";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const suggestionListRef = useRef<HTMLUListElement>(null);

  const dispatch = useAppDispatch();
  const { selectedGender, searchQuery } = useAppSelector(
    (state) => state.products,
  );
  const suggestions = useAppSelector(selectSearchSuggestion);
  const router = useRouter();

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedGender(event.target.value as SelectGender));
    setActiveSuggestionIndex(-1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
    setActiveSuggestionIndex(-1);
  };

  const performSearch = () => {
    if (searchQuery.trim().length > 0) {
      router.push("/search");
    }
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performSearch();
  };

  const handleSuggestionClick = (title: string) => {
    dispatch(setSearchQuery(title));
    performSearch();
    setIsFocused(false);
    setActiveSuggestionIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0,
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeSuggestionIndex !== -1) {
        handleSuggestionClick(suggestions[activeSuggestionIndex]);
      } else {
        performSearch();
      }
    }
  };

  useEffect(() => {
    if (activeSuggestionIndex !== -1 && suggestionListRef.current) {
      const activeElement = suggestionListRef.current.children[
        activeSuggestionIndex
      ] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeSuggestionIndex]);
  return (
    <div className="relative">
      <form
        onSubmit={handleSearchSubmit}
        className="flex h-[48px] w-full max-w-[577px] items-center justify-evenly gap-[10px] bg-white px-[8px] py-[6px] text-stone-300"
      >
        <select
          className="rounded-2xl bg-stone-100 px-[15px] py-[5px] font-medium text-black"
          onChange={handleGenderChange}
          value={selectedGender}
          aria-label="Filter products by gender"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <div className="flex w-full items-center gap-[10px] rounded-2xl bg-stone-100 px-[10px] py-[5px]">
          <button type="submit" className="cursor-pointer" aria-label="Search">
            <Search
              width={24}
              height={24}
              className="fill-stone-400 xl:h-[20px] xl:w-[20px]"
            />
          </button>
          <input
            type="search"
            className="focus:border-primary w-full max-w-[500px] text-black outline-none focus:border-b"
            placeholder="Search for products..."
            onChange={handleSearchChange}
            value={searchQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setActiveSuggestionIndex(-1);
              setIsFocused(false);
            }}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isFocused}
            aria-controls="suggestions-list"
            aria-activedescendant={
              activeSuggestionIndex !== -1
                ? `suggestion-${activeSuggestionIndex}`
                : undefined
            }
          />
        </div>
      </form>
      {isFocused && suggestions.length > 0 && searchQuery.length > 0 && (
        <ul
          ref={suggestionListRef}
          className="absolute z-10 w-full max-w-[700px] rounded-b-md border-t-0 bg-white p-2 shadow-lg"
          role="listbox"
          id="suggestions-list"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              id={`suggestion-${index}`}
              className={clsx(
                "cursor-pointer p-2",
                index === activeSuggestionIndex
                  ? "bg-gray-200"
                  : "hover:bg-gray-100",
              )}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseDown={(event) => {
                event.preventDefault();
                handleSuggestionClick(suggestion);
              }}
              role="option"
              aria-selected={index === activeSuggestionIndex}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

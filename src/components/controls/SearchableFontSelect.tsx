import React, { useState, useRef, useEffect } from "react";
import { ControlChangeHandler } from "../../types";

interface SearchableFontSelectProps {
  value: string;
  onChange: ControlChangeHandler<string>;
  fontFamilies: string[];
}

export const SearchableFontSelect: React.FC<SearchableFontSelectProps> = ({
  value,
  onChange,
  fontFamilies,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter fonts based on search term
  const filteredFonts = fontFamilies.filter((font) =>
    font.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && dropdownRef.current) {
      const highlightedElement = dropdownRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [highlightedIndex]);

  const handleSelect = (font: string) => {
    onChange(font);
    setIsOpen(false);
    setSearchTerm("");
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === "Enter" || e.key === "ArrowDown")) {
      e.preventDefault();
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredFonts.length - 1 ? prev + 1 : prev,
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;

      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredFonts[highlightedIndex]) {
          handleSelect(filteredFonts[highlightedIndex]);
        }
        break;

      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm("");
        setHighlightedIndex(-1);
        break;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setHighlightedIndex(-1);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleInputClick = () => {
    setIsOpen(true);
    if (searchInputRef.current) {
      searchInputRef.current.select();
    }
  };

  return (
    <div className="font-control-group" ref={containerRef}>
      <label className="font-control-label">Font Family</label>
      <div className="font-control-searchable-select">
        <input
          ref={searchInputRef}
          type="text"
          className="font-control-input font-control-search-input"
          value={isOpen ? searchTerm : value}
          onChange={handleSearchChange}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          placeholder="Search fonts..."
          style={{ fontFamily: isOpen ? "inherit" : value }}
        />

        {isOpen && (
          <div className="font-control-dropdown" ref={dropdownRef}>
            {filteredFonts.length > 0 ? (
              filteredFonts.map((font, index) => (
                <div
                  key={font}
                  className={`font-control-dropdown-item ${
                    index === highlightedIndex ? "highlighted" : ""
                  } ${font === value ? "selected" : ""}`}
                  onClick={() => handleSelect(font)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  style={{ fontFamily: font }}
                >
                  {font}
                </div>
              ))
            ) : (
              <div className="font-control-dropdown-item no-results">
                No fonts found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

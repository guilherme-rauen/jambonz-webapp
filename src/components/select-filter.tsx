import React, { useState } from "react";
import { classNames } from "jambonz-ui";

import { Icons } from "src/components/icons";

import type { SelectorOption } from "./forms/selector";

type SelectFilterProps = {
  id: string;
  label?: string;
  options: SelectorOption[];
  filter: [string, React.Dispatch<React.SetStateAction<string>>];
  handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectFilter = ({
  id,
  label,
  options,
  filter: [filterValue, setFilterValue],
  handleSelect,
}: SelectFilterProps) => {
  const [focus, setFocus] = useState(false);
  const classes = {
    smsel: true,
    "smsel--filter": true,
    "select-filter": true,
    focused: focus,
  };

  return (
    <div className={classNames(classes)}>
      {label && <label htmlFor={id}>{label}:</label>}
      <div>
        <select
          id={id}
          name={id}
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);

            if (handleSelect) {
              handleSelect(e);
            }
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <span>
          <Icons.ChevronUp />
          <Icons.ChevronDown />
        </span>
      </div>
    </div>
  );
};

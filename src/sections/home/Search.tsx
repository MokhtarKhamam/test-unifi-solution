import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch, handleSearch }) => {
  const [value, setValue] = useState<Dayjs | null>(null);


  return (
    <div className="container mx-auto mt-10">
      <h6 className="text-4xl uppercase text-[#0F4683] text-center">
        SEARCH FOR NEARBY STOLEN BIKES
      </h6>
      <div className="flex justify-between items-stretch mt-6">
        <div className="basis-[85%] flex flex-col gap-y-2">
          <input
            type="text"
            placeholder="search bike description"
            className="w-full border border-gray-400 px-2 py-1 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-col md:flex-row mt-6 gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Start date" />
              <DatePicker
                label="End date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div onClick={handleSearch} className="basis-[12%] cursor-pointer bg-[#3498DB] hover:bg-[#217DBB] rounded-md flex items-center justify-center">
          <SearchIcon
            style={{
              width: "50px",
              height: "50px",
              color: "#fff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

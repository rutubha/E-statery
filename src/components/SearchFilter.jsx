import React, { useEffect, useState } from "react";
import "./searchFilter.css";
import { properties } from "../rentProperty";

const SearchFilter = (props) => {
  const [searchProperty, setSearchProperty] = useState("");
  const [filter, setFilter] = useState({
    location: "",
    date: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "Home",
  });

  console.log(filter);

  const handleChange = (e) => {
    setSearchProperty(e.target.value);
  };

  const date1 = new Date(filter.date);
  console.log(date1);

  // Filter
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setProperty(() =>
      properties.filter((element) => {
        const filterData = {
          location: element.city,
          date: new Date(element.availableDate),
          price: element.price,
        };
        if (
          filterData.location.includes(filter.location) &&
            filterData.price >= filter.minPrice && filterData.price <= filter.maxPrice
        ) {
          return element;
        }
      })
    );
  };

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // searchbar
  useEffect(() => {
    props.setProperty(() =>
      properties.filter((element) => {
        return element.city.includes(searchProperty);
      })
    );
  }, [searchProperty]);

  return (
    <div>
      <div className="search">
        <h3>Search porties to rent</h3>
        <div>
          <input
            type="text"
            placeholder="Search with searchBar"
            value={searchProperty}
            onChange={handleChange}
          />
        </div>
      </div>
      <form className="filter-search" onSubmit={handleSubmit}>
        <div className="loaction">
          <div>Loactions</div>
          <div>
            <input
              type="text"
              value={filter.location}
              name="location"
              onChange={handleFilter}
            />
          </div>
        </div>
        <div className="date-container">
          <div>When</div>
          <div>
            <input
              type="date"
              value={filter.date}
              name="date"
              id="date"
              onChange={handleFilter}
            />
          </div>
        </div>
        <div className="">
          <div>Price</div>
          <div>
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              value={filter.minPrice}
              placeholder="min"
              onChange={handleFilter}
            />
            <input
              type="number"
              name="maxPrice"
              id="maxPrice"
              value={filter.maxPrice}
              placeholder="max"
              onChange={handleFilter}
            />
          </div>
        </div>
        <div className="property-type">
          <div>Property Type</div>
          <div>
            <select name="propertyType" onChange={handleFilter}>
              <option value="Home" selected>
                Home
              </option>
              <option value="Appartment">Appartment</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
        </div>
        <div className="submit">
          <button type="submit" className="btn fill">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;

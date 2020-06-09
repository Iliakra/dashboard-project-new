import React, { useState } from "react";
import BannerItem from "./BannerItem";

export default function BannerList({ data }) {
  const [bannerType, setBanner] = useState(["backupPath", ["240x400"], ["aw"]]);
  let bunnerTypeSelect = (e) => {
    let selections = document.getElementsByName("typeOfBanners")[0];
    setBanner((prev) => {
      return [
        selections.options[selections.selectedIndex].value,
        prev[1],
        prev[2],
      ];
    });
  };

  let bunnerFormatNameFilter = (e) => {
    let formatFilters = document.getElementsByName("formatName")[0];
    setBanner((prev) => {
      let newVal = formatFilters.options[
        formatFilters.selectedIndex
      ].value.split(" ");
      return [prev[0], newVal, prev[2]];
    });
  };

  let bunnerFeedFilter = (e) => {
    let feedFilters = document.getElementsByName("feed")[0];
    setBanner((prev) => {
      let newVal = feedFilters.options[feedFilters.selectedIndex].value.split(
        " "
      );
      return [prev[0], prev[1], newVal];
    });
  };
  return (
    <div className="main-container">
      <div className="main-container__select-container">
        <select
          onChange={bunnerTypeSelect}
          name="typeOfBanners"
          className="select-container__type-select select-element"
        >
          <option value="backupPath">banners</option>
          <option value="frames">frames</option>
          <option value="demoPath">demo</option>
        </select>
        <select
          onChange={bunnerFormatNameFilter}
          name="formatName"
          className="select-container__formatname-select select-element"
        >
          <option value="240x400">240x400</option>
          <option value="728x90">728x90</option>
          <option value="240x400 728x90">All</option>
        </select>
        <select
          onChange={bunnerFeedFilter}
          name="feed"
          className="select-container__feed-select select-element"
        >
          <option value="aw">aw</option>
          <option value="ba">ba</option>
          <option value="cd">cd</option>
          <option value="di">di</option>
          <option value="aw ba cd di">All</option>
        </select>
      </div>
      <div className="main-container__banners-container">
        <BannerItem banner={bannerType} />
      </div>
    </div>
  );
}

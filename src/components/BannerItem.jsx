import React from "react";
import { data } from "../report";
import BannerItemVisual from "./BannerItemVisual";

export default function BannerItem(props) {
  let bannerArray = Object.values(data.creatives);
  let resultBan = [];
  let buildBan = [];
  for (let i = 0; i < props.banner[1].length; i++) {
    let formats = bannerArray.filter(
      (item) => item.formatName === props.banner[1][i]
    );
    buildBan = buildBan.concat(formats);
  }
  for (let j = 0; j < props.banner[2].length; j++) {
    let feeds = buildBan.filter((item) => item.feed === props.banner[2][j]);
    resultBan = resultBan.concat(feeds);
  }
  let pathName = props.banner[0];
  let bannerVisualType = [];
  for (let i = 0; i < resultBan.length; i++) {
    if (pathName === "frames") {
      let reg = resultBan[i].framesPath;
      for (let j = 0; j < resultBan[i].frames.length; j++) {
        bannerVisualType.push(`${reg}${resultBan[i].frames[j]}`);
      }
    } else {
      let bannerItemPath = resultBan[i][pathName];
      bannerVisualType.push(bannerItemPath);
    }
  }

  return (
    <ul className="banners-container__banners-list">
      {bannerVisualType.map((o) => (
        <BannerItemVisual
          key={bannerVisualType.indexOf(o)}
          item={o}
          pathName={pathName}
        />
      ))}
    </ul>
  );
}

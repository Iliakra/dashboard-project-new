import React from "react";

export default function BunnerItemVisual(props) {
  let bannerPath = props.item;
  let src = `./banner-images/${bannerPath}`;
  console.log(src);
  if (props.pathName === "demoPath") {
    return (
      <li className="bunner-item">
        <iframe src={src} frameBorder="0" height="400" name="iframe"></iframe>
      </li>
    );
  }

  return (
    <li className="bunner-item">
      <img src={src} alt="Рекламное изображения автомобиля Toyota Camry" />
    </li>
  );
}

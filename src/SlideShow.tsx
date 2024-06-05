import "./SlideShow.css";

// function SlideShow() {
//   return (
//     <img
//       className="slide-image"
//       src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_gift_pc.webp"
//       alt="Slide Show"
//     />
//   );
// }

// export default SlideShow;

import React, { useState, useEffect } from "react";

const images = [
  "https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_gift_pc.webp",
  "https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_life_pc.webp",
];

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3秒毎に画像を切り替え

    return () => clearInterval(intervalId); // クリーンアップ
  }, []);

  return (
    <div className="slide-show">
      <img
        src={images[currentIndex]}
        alt="Slide Show"
        className="slide-image"
      />
    </div>
  );
}

export default SlideShow;

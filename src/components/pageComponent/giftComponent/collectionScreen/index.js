import React from "react";

import ListSuperStar from "./childCollection/listSuperStar";
import ListYoungStar from "./childCollection/listYoungStar";
import "../giftStyle/collectionScreen.scss"

export default function index() {
  return (
    <div className="collection-container">
      <div>
        <ListSuperStar />
      </div>
      <div>
        <ListYoungStar />
      </div>
    </div>
  );
}

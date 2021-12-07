import reactDom from "react-dom";
import React, { Fragment, useEffect, useState } from "react";

import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "MkyNa4w10AVotdDPoVOYJnZ9_2f8h6hcT2XRl3bcaUo",
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img classNAme="img" src={urls.regular} alt="sky"/>
      <a
        className="credit"
        target="noopener"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

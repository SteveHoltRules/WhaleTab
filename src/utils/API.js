//Medium article explains it differently. Why doesn't the example call have the api.unsplash.com listed anywhere?

// import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import "../utils/style.css";
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
      <img className="img" src={urls.regular} alt="sky"/>
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

const Body = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cabin", orientation: "landscape", page: 2 })
      .then((result) => {
        console.log(result);
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    console.log(data.response.results[0].urls.full)
    return (
      <div className="feed">
        <ul className="columnUl">
        {/* This is where the photos are input */}
          {data.response.results.map((photo) => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const Home = () => {
  return (
    <main className="root">
      <Body />
    </main>
  );
};


export default Home;

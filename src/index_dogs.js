import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// 1. Import *useState* and *useEffect*

function Imagen({ subimg }) {
  // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
  // We're setting the default value of dogImage to null, so that while we wait for the
  // fetch to complete, we dont attempt to render the image
  let [dogImage, setDogImage] = useState(null)

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${subimg}`)
      .then(response => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setDogImage(data.message))
  }, [subimg])

  return (
    <div className="App">
      {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
      {dogImage && dogImage.map(
        (dog) => <img
          width={"200px"}
          height={"200px"}
          src={dog}
          alt="Perritos">
        </img>)}
    </div>
  );
}

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState("reactjs");
  const [subimg, setSubreddit] = useState(inputValue);
  // Update the subreddit when the user presses enter
  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <Imagen subimg={subimg} />
    </>
  );
}


ReactDOM.render(<App />, document.querySelector("#root")
);

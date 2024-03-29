import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Imagen({ subimg }) {
  // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
  
  let [cuadroImage, setCuadroImage] = useState(null)

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${subimg}`)
      .then(response => response.json())
      // 4. Setting *Image* to the image url that we received from the response above
      .then(data => {
        setCuadroImage(data.url)
        console.log("Data?: ", data.url)
      })
  }, [subimg])

  return (
    <div className="App">
      {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
      {<img
          width={"200px"}
          height={"200px"}
          src={cuadroImage}
          alt="Perritos">
        </img>}
    </div>
  );
}

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState("1");
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

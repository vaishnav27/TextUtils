import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleUpClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const handleOnClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-5 ghan"
        // style={{
        //   backgroundColor: props.mode === "light" ? "#e4d8d8" : "black",
        // }}
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "light" ? "#e4d8d8" : "black",
        }}
      >
        <h1 className="text-center stylehead">{props.heading}</h1>
        <div className="mb-3 ">
          <label htmlFor="mybox" className="form-label"></label>
          <textarea
            className="form-control "
            id="mybox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-sm btn-success mx-2 my-3"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-sm btn-success mx-2 "
          onClick={handleUpClick2}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-sm btn-success mx-2"
          onClick={handleOnClear}
        >
          Clear All
        </button>
      </div>

      <div
        className="container my-5 "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>

        <p
          className="styleCom"
          style={{
            backgroundColor: props.mode === "light" ? "#e4d8d8" : "black",
          }}
        >
          WordsCount={text.length === 0 ? 0 : text.split(" ").length} <br />{" "}
          CharactersCount=
          {text.length} <br />
          Time to read={text.length === 0 ? 0 : 0.008 * text.split(" ").length}
        </p>

        <h2>Preview</h2>
        <p
          className="styleCom"
          style={{
            backgroundColor: props.mode === "light" ? "#e4d8d8" : "black",
          }}
        >
          {text.length > 0 ? text : "Enter Something to view "}
        </p>
      </div>
    </>
  );
}

import React, { useState } from "react";
import html2canvas from "html2canvas";

const App = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [imagen, setImagen] = useState("");

  const changeLine1 = ({ target }) => {
    setLine1(target.value);
  };
  const changeLine2 = ({ target }) => {
    setLine2(target.value);
  };

  const changeSelect = ({ target }) => {
    setImagen(target.value);
  };

  const exportMeme = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let image = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = image;
      link.click();
    });
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          <h1 className="text-center">Meme Creator</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 offset-md-3">
          <select className="form-control" name="meme" onChange={changeSelect}>
            <option value="">Elije una imagen</option>
            <option value="anakin">Anakin</option>
            <option value="fire">Fire</option>
            <option value="history">History</option>
          </select>
          <br />
          <input
            type="text"
            className="form-control mb-2"
            value={line1}
            onChange={changeLine1}
            placeholder="Line 1"
          />
          <input
            type="text"
            className="form-control"
            value={line2}
            onChange={changeLine2}
            placeholder="Line 2"
          />
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-primary" onClick={exportMeme}>
              Exportar
            </button>
          </div>
          <div id="meme" className="meme">
            <p>{line1}</p>
            <p>{line2}</p>
            <img
              src={imagen && `http://localhost:3000/image/${imagen}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

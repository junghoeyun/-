import React, { useState } from "react";
import MapContainer from "./Mapcontainer";
import "../css/LandingPage.css";
function LandingPage() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <MapContainer searchPlace={Place} />
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
}

export default LandingPage;

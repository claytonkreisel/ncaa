import React from "react";

function htmlEntities(str) {
  var txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

function School(props){
  const headerStyle = {
    backgroundColor: props.color
  };

  return (
    <div className="school">
        <h1 style={headerStyle}>{htmlEntities(props.name)}</h1>
      <ul>
        <li><span>Mascot:</span><span className="values">{htmlEntities(props.mascot)}</span></li>
        <li className="two-lines"><span>Conference:</span><span className="values">{htmlEntities(props.conference)}</span></li>
        <li><span>Division:</span><span className="values">NCAA Division {htmlEntities(props.division)}</span></li>
        <li><span>City:</span><span className="values">{htmlEntities(props.city)}</span></li>
        <li><span>State:</span><span className="values">{htmlEntities(props.state)}</span></li>
      </ul>
    </div>
  )
}

export default School;

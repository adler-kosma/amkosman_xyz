import React from "react";

function WorksComponent({projectName, durata, format, link, linkName, description}) {
  return (
    <div>
        <div className="text-title" style={{marginLeft: "30px", top: "5px"}} >{projectName}</div>
        {durata && <p className="text-body" style={{marginLeft: "60px", top: "0px"}}>durata: {durata}</p>}
        {format && <p className="text-body" style={{marginLeft: "60px", top: "0px"}}>format: {format}</p>}
        {description && <p className="text-body" style={{marginLeft: "60px", top: "0px"}}>{description}</p>}
    </div>
  );
}

export default WorksComponent;

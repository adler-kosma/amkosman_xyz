import React from "react";
import WorksComponent from "../components/WorksComponent";

function Works() {
  return (
    <div>
      <div className="box">
      <h1 style={{backgroundColor: 'rgb(255, 253, 253, .0)', color: 'white', boxShadow: 'none'}}>Works</h1>
      {WORKS.map(({ year, projects }) => {
          return (
            <div key={year}>
               <p className="text-header" style={{color: "#d8a7b1", top: "10px"}}>{year}</p>
               {projects.map(({ projectName, format, description }) => {
                return (
                    <div key={projectName}>
                        <WorksComponent projectName={projectName} format={format} description={description} />
                    </div>
                );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const WORKS = [
    {year: "2026", projects: [
        { projectName: "Cité internationale des arts", format: "residency", description: "Artist residency in Paris."},
        { projectName: "Mini Works at Sound of Stockholm", format: "performance", description: "Ensemble: vocal trio and dancer Anna Fitoussi."},
        { projectName: "Speaking (to the sea)", format: "commission", description: "Choir piece commissioned by Art Inside Out as a part of a collaboration with Signe Johannessen and her video work Havskoloni."},
    ]},
    {year: "2025", projects: [
        { projectName: "Enter", format: "commission", description: "Choir piece commissioned by Konstmusiksystrar. Premiered at Eric Ericssonhallen by Tusen Tungor."},
    ]},
    {year: "2024", projects: [
        { projectName: "Cité internationale des arts", format: "residency", description: "Artist residency in Paris."},
        { projectName: "Time is My Body", format: "sound installation", description: "4-channel sound piece for installation by Signe Johannessen. Premiered at Bohusläns Museum."},
    ]},
    {year: "2023", projects: [
        { projectName: "Prey/Pray", format: "art film", description: "Sound piece for video work by Signe Johannessen. Exhibited at Örebro Art Museum."},
        { projectName: "Echo & Altar Records", format: "record label", description: "Co-founded with Arvid Kraft, Saga Fagerström and Anton Berglund."},
    ]},
    {year: "2022", projects: [
        { projectName: "Sound Sculpture I – Agonia", format: "sound sculpture", description: "Live performance and electronics for sculpture. Exhibited in 'On The Verge' at Wetterling Gallery."},
        { projectName: "Pumping Gas – You've touched on more water", format: "installation", description: "Collaboration with artist Fathia Mohidin. Premiered at Nevven Gallery and exhibited at the Prague Biennale."},
    ]},
    {year: "2021", projects: [
        { projectName: "WAVE", format: "installation", description: "Sound piece in 6 channels for installation by Fathia Mohidin. Exhibited at Luleå Biennalen."},
    ]}

  ];

export default Works;

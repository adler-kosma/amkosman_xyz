import React from "react";
import WorksComponent from "../components/WorksComponent";

function Installations() {
  return (
    <div>
      <div className="box">
      <h1 style={{backgroundColor: 'rgb(255, 253, 253, .0)', color: 'white', boxShadow: 'none'}}>Installations</h1>
      {INSTALLATION.map(({ year, projects }) => {
          return (
            <div>
               <p className="text-header" style={{color: "red", top: "10px"}}>{year}</p>
               {projects.map(({ projectName, durata, format, description }) => {
                return (
                    <div>
                        <WorksComponent projectName={projectName} durata={durata} format={format} description={description} />
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

const INSTALLATION = [
    {year: "2023", projects: [
        { projectName: "Prey/Pray", durata: "12'", format: "video with stereo sound",link: "https://signejohannessen.se/prey-pray-2023/", linkName: "www.signeJohannessen.se", description: "Video work by Signe Johanessen, sound and music by Adele Kosman. Exhibited at Örebro Konsthall 01.04.23-28.05.23 and Oslo Kunstforening 10.08.23—17.09.23"},
    ]},
    {year: "2022", projects: [
        { projectName: "Sound Sculpture I-Agonia", durata:"23'", format: "mono", link: "<a href=https://www.wetterlinggallery.com/exhibitions/wg-project-29 target='_blank'>", description: "Exhibited in 'On The Verge' curated by Jeanette Gunnarsson and Lauren Johnson at Wetterling Gallery 06.10.22-05.11.22. In collaboration with Noa Sköldin. Ceramics by Noa Sköldin, eletronics and music by Adele Kosman."},
        { projectName: "Pumping Gas – You've Touched on More Water", durata:"20'", format: "4.0", link: "<a href=https://nevvengallery.com/exhibitions/pumping-gas-youve-touched-on-more-water/ target='_blank'>", description: "Exhibited at Nevven Gallery 10.03.22-17.04.22. Exhibited at Prague Biennale Matter of Art 21.07.22-23.10.22. In collaboration with Fathia Mohidin. Quadrophonic sound piece, concrete blocks, licking stone and blue light."},
    ]},
    {year: "2021", projects: [
        { projectName: "wave", durata:"10'", format:"6.0", description: "Sound piece for installation by Fathia Mohidin. Exhibited at Luleå Biennalen"},
    ]},
    {year: "2019", projects: [
        { projectName: "Hypersea", durata:"30'", format: "2 dancers, stereo sound", link: "<a href=https://youtu.be/3xbedU33AjI target='_blank'>See documentation here.</a>", description: "A collaboration with Sara Skoglund and Klara SjöblomPerformed and exhibited in Henningsvær Lofoten Norway"},
        { projectName: "For Dancemusic You’d Emit to Formless", durata:"35'", format: "4.0", description: "Ljudbänken for Stockholm Konst"},
    ]}

  ];

export default Installations;

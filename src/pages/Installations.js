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
               <p className="text-header" style={{color: "#d8a7b1", top: "10px"}}>{year}</p>
               {projects.map(({ projectName, durata, format, link, linkName, description }) => {
                return (
                    <div>
                        <WorksComponent projectName={projectName} durata={durata} format={format} link={link} linkName={linkName} description={description} />
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
    {year: "2026", projects: [
        { projectName: "The Sea Colony (Havskolonin)", format: "video work", link: "https://signejohannessen.se/the-sea-colony/", linkName: "signejohannessen.se", description: "Video work by Signe Johannessen with new music by Adele Marcia Kosman. Produced with support from Art Inside Out. Exhibited in 'Road Signs (Vägmärken) – 10 Years of Art Inside Out' at Halland Art Museum 17.10.26-17.01.27."},
    ]},
    {year: "2024", projects: [
        { projectName: "Time is My Body", durata: "9' 36", format: "4.0", link: "https://signejohannessen.se/time-is-my-body-2025/", linkName: "signejohannessen.se", description: "4-channel sound piece for installation by Signe Johannessen. Premiered at Bohusläns Museum."},
    ]},
    {year: "2023", projects: [
        { projectName: "Prey/Pray", durata: "12'", format: "video with stereo sound",link: "https://signejohannessen.se/prey-pray-2023/", linkName: "signejohannessen.se", description: "Video work by Signe Johanessen, sound and music by Adele Kosman. Exhibited at Örebro Konsthall 01.04.23-28.05.23 and Oslo Kunstforening 10.08.23—17.09.23"},
    ]},
    {year: "2022", projects: [
        { projectName: "Sound Sculpture I-Agonia", durata:"23'", format: "mono", link: "https://www.wetterlinggallery.com/exhibitions/wg-project-29", linkName: "wetterlinggallery.com", description: "Exhibited in 'On The Verge' curated by Jeanette Gunnarsson and Lauren Johnson at Wetterling Gallery 06.10.22-05.11.22. In collaboration with Noa Sköldin. Ceramics by Noa Sköldin, eletronics and music by Adele Kosman."},
        { projectName: "Pumping Gas – You've Touched on More Water", durata:"20'", format: "4.0", link: "https://nevvengallery.com/exhibitions/pumping-gas-youve-touched-on-more-water/", linkName: "nevvengallery.com", description: "Exhibited at Nevven Gallery 10.03.22-17.04.22. Exhibited at Prague Biennale Matter of Art 21.07.22-23.10.22. In collaboration with Fathia Mohidin. Quadrophonic sound piece, concrete blocks, licking stone and blue light."},
    ]},
    {year: "2021", projects: [
        { projectName: "wave", durata:"10'", format:"6.0", description: "Sound piece for installation by Fathia Mohidin. Exhibited at Luleå Biennalen"},
    ]},
    {year: "2019", projects: [
        { projectName: "Hypersea", durata:"30'", format: "performance, 2 dancers, stereo sound", link: "https://youtu.be/3xbedU33AjI", linkName: "See documentation here", description: "Composition and concept by Adele Kosman. A collaboration with dancers Sara Skoglund and Klara Sjöblom. Performed and exhibited in Henningsvær, Lofoten, Norway."},
        { projectName: "For Dancemusic You’d Emit to Formless", durata:"35'", format: "4.0", description: "Sound piece for 4 channels for Ljudbänken by Stockholm Konst. Public sound installation in Hässelby torg."},
    ]}

  ];

export default Installations;

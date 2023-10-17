import React from "react";
import WorksComponent from "../components/WorksComponent";

function Sounds() {
  return (
    <div>
      <div className="box">
      <h1 style={{backgroundColor: 'rgb(255, 253, 253, .0)', color: 'white', boxShadow: 'none'}}>Multichannel</h1>
      {SOUNDS.map(({ year, projects }) => {
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

const SOUNDS = [
    {year: "2020", projects: [
        { projectName: "Degree concert 'Give/Take/in concert'", durata: "35'", format: "4.1", description: "Live coding live performance live concert. Along with my thesis 'The Live Concert as a Compositional Tool in Electro Acoustic Music' I have create tools for live compostion in SuperCollider. These tools were used in my degree concert at KMH on the 9th of September 2020."},
        { projectName: "Lead You Home", durata: "6' 45", format: "22.1", description:"This is a gift to Marcus, a friend whom I shared everything with. As I did not have time to tell him just how much this meant and came to mean for me I interpreted one of our creations from 2014 to try and honor that everything which we once shared. This is a new and a last and a lonely For BDK. Through me alone and through that which I am today. I take your hand, I am going to lead you home. Rest in peace dear. Brown and white noise with pop-song deconstructed. Pop-song: “Lead You Home” by For BDK. Realised in SuperCollider and mixed for 22.1 speakers in reaper."},
    ]},
    {year: "2019", projects: [
        { projectName: "now that you are done: Formless", durata:"6' 15", format: "29.4", description: "In the aftermath of the previous piece – A formless moving stream of sound. Again the piece follows rigid iterations, now with continuous hits without repetition where the meeting point for the material changes at every instance."},
        { projectName: "EMiT", durata:"20'", format: "29.4", description: "EMIT I – Language and seconds and 'Jag frågade mig själv men glömde svara' and arrivals. Came together and back for this piece. This will give rise to yet something new. EMIT II – Then they came back and back again. This is something new"},
    ]},
    {year: "2018", projects: [
        { projectName: "if it were for me you'd piece me up", durata:"6' 20'", format: "29.4", description: "The simple and rigid controls the mass of sound. The rich and colourful bends for the iterations. In mutual understanding, mutual pleasure, the two worlds of material meet. Misunderstandings occur, but at no loss. Between every hit there is a window, an opening, and in every glance I have found something new. I have thoroughly searched to find the very core of this place, my findings will be presented in 'if it were for me you'd piece me up'"},
        { projectName: "dancemusic", durata:"7' 20", format: "29.4", description: "Clap, woodblock, rhythm, space, bell, pattern, cluster. Explore."},
    ]}

  ];

export default Sounds;

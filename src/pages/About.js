import React from "react";
import AdlerImage from "../img/adler.jpg"

function About() {

    //window.history.pushState({}, '', '/about');

    let textHeader = "Electroacoustic composer, performer, and vocalist Adele Marcia Kosman explores sound and space primarily through field recordings, synthesis, algorithmic composition, and vocals, along with precise audio editing. Their latest compositions delve into concepts such as emotional connections to time, chopping, glitch, formlessness, and intense turbulence. Below follows a brief biography:";
    let textBody = "Swedish composer Adele Marcia Kosman brings to life sweeping transformations of pleasure, disruption, and persistence in the form of dissected voice and pump organ performances—enhanced with sparse field recordings and algorithmically handled synthesis. Emotive potentialities of time-passing are explored with a striking balance between revelation and suggestion. Drawing from a multi-versed background ranging from stints in major-label-signed electronic pop and electroacoustic academic endeavours to experiences as a back-end developer, the flesh of Kosman’s world enfolds the listener in a process of potent instability and delicate re-iteration..In the upcoming fall of 2023, Adele Marcia Kosman is set to release her first solo album, titled 'VOLVM 2. pieces.' This album will be launched under the experimental music label Echo & Altar Records, a venture she co-founded with fellow composers Anton Berglund, Saga Fagerström, and Arvid Kraft. xoxo Adler ";
    let textCreditsDesign = "Joakim Aronsson – Design ";
    let textCreditsCode = "Adele Kosman – Code";

    let textContact = "hello [ at ] amkosman.xyz";

    return (
        <div className="box">
            <p className="text-header" style={{fontSize: "1.5vw"}}>{textHeader}</p>
            <p className="text-body" style={{fontSize: "1vw"}}>{textBody}</p>
            <img src={AdlerImage} alt="Pic of Adler" style={{width:"467px"}} ></img>
            <p className="text-body">Credits:</p>
            <p className="text-body">{textCreditsDesign}</p>
            <p className="text-body">{textCreditsCode}</p>
            <p className="text-body">Contact:</p>
            <p className="text-body">{textContact}</p>
            
        </div>
    );
}


export default About;

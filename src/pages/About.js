import React from "react";

function About() {

    //window.history.pushState({}, '', '/about');

    let textHeader = "Composer, vocalist and computer developer Adele Marcia Kosman works across vocal music, sound installations, acousmatic composition and live performance. Here follows a short bio:";
    let textBody = "Adele Marcia Kosman is a composer, vocalist and computer developer educated in electroacoustic composition at the Royal College of Music in Stockholm. Her practice spans vocal music, sound installations, acousmatic composition and live performance. Alongside her solo practice, she fronts the alternative rock band Kid08 with composer Arvid Kraft. As a mezzo-soprano, she performs with the contemporary choir Tusen Tungor and recently co-founded Mini Works together with dancer and vocalist Anna Fitoussi, an interdisciplinary ensemble in which three voices and a dancer perform intimate contemporary works, drawing inspiration from the choreographic language of Blake Works by William Forsythe and the music of David Lang and Caroline Shaw. The ensemble performs short pieces for voice and dance that aim to serve music and movement with uniform virtue.";
    let textCreditsDesign = "Joakim Aronsson – Design ";
    let textCreditsCode = "Adele Kosman – Code";
    let textCreditsPhoto = "Yi-Chen Lee – Photo";

    return (
        <div className="box">
            <h1 style={{backgroundColor: 'rgb(255, 253, 253, .0)', color: 'white', boxShadow: 'none'}}>About</h1>
            <p className="text-title" style={{color: "black"}}>{textHeader}</p>
            <p className="text-body" style={{}}>{textBody}</p>
            <div className="credits">
                <p className="text-body credits-label">Credits</p>
                <p className="text-body">{textCreditsDesign}</p>
                <p className="text-body">{textCreditsCode}</p>
                <p className="text-body">{textCreditsPhoto}</p>
            </div>
            
        </div>
    );
}


export default About;

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
            <p className="text-title" style={{color: "black"}}>Education</p>
            <p className="text-body">2020 – Royal College of Music in Stockholm, Bachelor degree in Electroacoustic Composition. Erasmus exchange at Universität der Künste Berlin. Thesis: The Live Concert as a Compositional Tool in Electro Acoustic Music</p>
            <p className="text-body">2020 – Blekinge Institute of Technology, Programming in Python and JavaScript</p>
            <p className="text-title" style={{color: "black"}}>Grants &amp; accomplishments</p>
            <p className="text-body">2023 – Echo &amp; Altar Records, co-founder</p>
            <p className="text-body">2022 – The Society of Swedish Composers (FST), elected member</p>
            <p className="text-body">2022 – Swedish Arts Council, phonogram support</p>
            <p className="text-body">2022 – Swedish Arts Grants Committee, one-year working grant</p>
            <p className="text-body">2021 – Konstmusiksystrar, elected chair person</p>
            <p className="text-body">2021 – Swedish Performing Rights Society, scholarship holder</p>
            <p className="text-body">2021 – Swedish Arts Grants Committee, crisis funding round 3</p>
            <p className="text-body">2020 – Swedish Arts Grants Committee, crisis funding round 2</p>
            <p className="text-body">2020 – UNM Finland, selected as participating composer</p>
            <p className="text-body">2020 – Royal College of Music Stockholm, grant</p>
            <p className="text-body">2019 – Swedish Performing Rights Society, scholarship holder</p>
            <p className="text-body">2019 – Stockholm City, grant for young people in culture</p>
            <p className="text-body">2018 – Stockholm City, grant for young people in culture</p>
            <p className="text-body">2015 – Stockholm City, grant for young people in culture</p>
            <p className="text-body">2013 – Record deal with Warner Music Sweden, with the band For BDK</p>
            <p className="text-body">2012 – Publishing deal with Sony ATV Sweden</p>
            <p className="text-title" style={{color: "black"}}>Residencies</p>
            <p className="text-body">2027 – Circolo Scandinavo, Rome</p>
            <p className="text-body">2026 – Cité internationale des arts, Paris</p>
            <p className="text-body">2024 – Cité internationale des arts, Paris</p>
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

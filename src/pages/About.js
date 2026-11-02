import React from "react";
import EndMark from "../components/EndMark";

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
            <p className="text-body"><span className="year">2020</span> – Royal College of Music in Stockholm, Bachelor degree in Electroacoustic Composition. Erasmus exchange at Universität der Künste Berlin. Thesis: The Live Concert as a Compositional Tool in Electro Acoustic Music</p>
            <p className="text-body"><span className="year">2020</span> – Blekinge Institute of Technology, Programming in Python and JavaScript</p>
            <p className="text-title" style={{color: "black"}}>Grants &amp; accomplishments</p>
            <p className="text-body"><span className="year">2023</span> – Echo &amp; Altar Records, co-founder</p>
            <p className="text-body"><span className="year">2022</span> – The Society of Swedish Composers (FST), elected member</p>
            <p className="text-body"><span className="year">2022</span> – Swedish Arts Council, phonogram support</p>
            <p className="text-body"><span className="year">2022</span> – Swedish Arts Grants Committee, one-year working grant</p>
            <p className="text-body"><span className="year">2021</span> – Konstmusiksystrar, elected chair person</p>
            <p className="text-body"><span className="year">2021</span> – Swedish Performing Rights Society, scholarship holder</p>
            <p className="text-body"><span className="year">2021</span> – Swedish Arts Grants Committee, crisis funding round 3</p>
            <p className="text-body"><span className="year">2020</span> – Swedish Arts Grants Committee, crisis funding round 2</p>
            <p className="text-body"><span className="year">2020</span> – UNM Finland, selected as participating composer</p>
            <p className="text-body"><span className="year">2020</span> – Royal College of Music Stockholm, grant</p>
            <p className="text-body"><span className="year">2019</span> – Swedish Performing Rights Society, scholarship holder</p>
            <p className="text-body"><span className="year">2019</span> – Stockholm City, grant for young people in culture</p>
            <p className="text-body"><span className="year">2018</span> – Stockholm City, grant for young people in culture</p>
            <p className="text-body"><span className="year">2015</span> – Stockholm City, grant for young people in culture</p>
            <p className="text-body"><span className="year">2013</span> – Record deal with Warner Music Sweden, with the band For BDK</p>
            <p className="text-body"><span className="year">2012</span> – Publishing deal with Sony ATV Sweden</p>
            <p className="text-title" style={{color: "black"}}>Residencies</p>
            <p className="text-body"><span className="year">2027</span> – Circolo Scandinavo, Rome</p>
            <p className="text-body"><span className="year">2026</span> – Cité internationale des arts, Paris</p>
            <p className="text-body"><span className="year">2024</span> – Cité internationale des arts, Paris</p>
            <p className="text-title" style={{color: "black"}}>Interviews</p>
            <p className="text-body"><span className="year">2023</span> – <a href="https://odalisquemagazine.com/2023/12/21/interview-with-adele-marcia-kosman/" target="_blank" rel="noopener noreferrer">Odalisque Magazine, interview on VOLVM 2. pieces</a></p>
            <p className="text-body"><span className="year">2022</span> – <a href="https://www.youtube.com/watch?v=dgBFeYWbfK8" target="_blank" rel="noopener noreferrer">SITE Zones, video interview</a></p>
            <p className="text-body"><span className="year">2017</span> – <a href="https://www.facebook.com/reel/1572343309478032" target="_blank" rel="noopener noreferrer">BON, video interview</a></p>
            <div className="credits">
                <p className="text-body credits-label">Credits</p>
                <p className="text-body">{textCreditsDesign}</p>
                <p className="text-body">{textCreditsCode}</p>
                <p className="text-body">{textCreditsPhoto}</p>
            </div>
            <EndMark />
            
        </div>
    );
}


export default About;


function Contact()  {
    return(
        <div className="contactBox" style={{boxShadow: "0px 0px 10px black", position: "absolute", alignItems: "center"}}>
            <h1 style={{backgroundColor: 'rgb(255, 253, 253, .0)', color: 'white', boxShadow: 'none'}}>Contact</h1>
            <div style={{marginLeft: '30px'}}>
            <div className="text-body" style={{position: "relative", padding: "6px", marginLeft: "0px", textShadow: "0px 0px 5px white", color: "black"}}>
                Instagram:
                <a style={{}} href="https://www.instagram.com/adelemarcia/" rel='noopener'> @adelemarcia</a>
            </div>
            <div className="text-body" style={{bottom: "6px", position: "relative", padding: "6px", marginLeft: "0px", textShadow: "0px 0px 5px white"}}>
                <p style={{color:'black'}}> Email: hello [@] amkosman . xyz</p>
            </div>
            </div>
        </div>
    );
}

export default Contact;

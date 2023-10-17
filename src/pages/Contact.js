
function Contact()  {
    return(
        <div className="contactBox" style={{boxShadow: "0px 0px 10px black", position: "absolute", alignItems: "center"}}>
            <div className="text-body" style={{top: "6px", position: "relative", padding: "6px", marginLeft: "0px", textShadow: "0px 0px 5px white", color: "black"}}>
                Instagram:
                <a style={{}} href="https://www.instagram.com/adelemarcia/" rel='noopener'> @adelemarcia</a>
            </div>
            <div className="text-body" style={{top: "6px", bottom: "6px", position: "relative", padding: "6px", marginLeft: "0px", textShadow: "0px 0px 5px white"}}>
                <p style={{color:'black'}}> Email: hello [@] amkosman . xyz</p>
            </div>
        </div>
    );
}

export default Contact;

import React from "react";

function Discography() {
  return (
    <div>
      <div className="box">
        <h1 style={{backgroundColor: 'rgb(255, 253, 253, .0)', color: 'white', boxShadow: 'none'}}>Discography</h1>
        <div style={{marginLeft: '30px', top: '30px', lineHeight: 2}}>
          <p class="text-header" style={{top: '30px'}}>VOLVM 1. turbulence</p>
          <p class="header" style={{margin: '10px'}}>08.05.2018</p>
          <iframe title='1' style={{border: 0, width: '100%', height: '120px', boxShadow: '0px 0px 10px black'}} src="https://bandcamp.com/EmbeddedPlayer/album=277515953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://amkosman.bandcamp.com/album/volvm-1-turbulence">VOLVM 1.turbulence by Adele Marcia Kosman</a></iframe>
        </div>
        <div style={{marginLeft: '30px', top: '30px'}}>
          <p class="text-header" style={{top: '30px', lineHeight: 2}}>Comfort</p>
          <p class="header" style={{margin: '10px'}}>13.02.2017</p>
          <iframe title='2' style={{border: 0, width: '100%', height: '120px', boxShadow: '0px 0px 10px black'}} src="https://bandcamp.com/EmbeddedPlayer/track=103385570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://amkosman.bandcamp.com/track/comfort">comfort by Adele Marcia Kosman</a></iframe>
          </div>
          <div style={{marginLeft: '30px', top: '30px', whiteSpace: 'normal'}}>
          <p class="text-header" style={{top: '30px', lineHeight: 2}}>No One Notice</p>
          <p class="header" style={{margin: '10px'}}>14.03.2016</p>
          <iframe title='3' style={{border: 0, width: '100%', height: '120px', boxShadow: '0px 0px 10px black'}} src="https://bandcamp.com/EmbeddedPlayer/track=3128159752/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://amkosman.bandcamp.com/track/no-one-notice">No One Notice by Adele Marcia Kosman</a></iframe>
        </div>
      </div>
    </div>
  );
}



export default Discography;

import React, { Component } from 'react';

class Projects extends Component {

  constructor() {
    super()
    this.state = {
      showcase: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    }
  }
  render() {
    return (
      <main>
        <div>
          <h1>Projects</h1>
        </div>
        <section className="services container">




          <div>

            <br />
            <br />
            <br />

          </div>



          <div className="row">
            <div className="col-sm-4">
              <a href="https://globalfoodcuisine.netlify.com/" target="_blank"><img src="http://clipart-library.com/images/8i6oe7e6T.jpg" width="292" height="220" /></a>
            </div>

            <div className="col-sm-4">
              <a href="https://lifencounters.herokuapp.com/" target="_blank"><img src="http://clipart-library.com/images/6Trodqb7c.gif" width="292" height="220" /></a>
            </div>

            <div className="col-sm-4">
              <a href="https://graceinc.herokuapp.com/" target="_blank"><img src="http://clipart-library.com/images/kcMnErABi.jpg" width="292" height="220" /></a>
            </div>




          </div>


          <div>

            <br />
            <br />


          </div>


          <div className="row">
            <div className="col-sm-4">

              <a href="https://africanstyle.herokuapp.com/index.html" target="_blank" title="Africa Art Gif"><img alt="Africa Art Gif" height="220" src="http://image.blingee.com/images19/content/output/000/000/000/824/872646422_1764802.gif" title="Africa Art Gif" width="167" /></a><br /><a href="http://blingee.com/pictures/art-gif" target="_blank" title="art gif pictures"><font size="2">art gif pictures</font></a><br /><br />


            </div>

            <div className="col-sm-4">
              <a href="http://clipart-library.com/clipart/Mdi9d77c7.htm" target="_blank"><img src="https://art.ngfiles.com/images/218000/218746_zetrystan_face-recognition.gif?f1349065693" width="292" height="220" /></a>
            </div>



            <div className="col-sm-4">
              <a href="https://maverickwit.herokuapp.com/" target="_blank"><img src="http://clipart-library.com/image_gallery/n1246948.png" width="292" height="220" /></a>
            </div>


          </div>

          <div className="row">
            <div className="col-sm-4">
              <a href="http://clipart-library.com/clipart/ki8okn9BT.htm" target="_blank"><img src="http://clipart-library.com/images/ki8okn9BT.jpg" width="292" height="220" /></a>
            </div>

            <div className="col-sm-4">
              <a href="http://clipart-library.com/clipart/8cA6oEnxi.htm" target="_blank"><img src="http://clipart-library.com/images/8cA6oEnxi.jpg" width="292" height="220" /></a>
            </div>

            <div className="col-sm-4">
              <a href="https://mobilepurchase.netlify.com/" target="_blank"><img src="http://clipart-library.com/images/8Tz5pLyTp.jpg" width="292" height="220" /></a>
            </div>




          </div>




        </section>
      </main>

    )
  }
}

export default Projects;
import React, { Component } from 'react';
import Iframe from 'react-iframe'

class Contact extends Component {



  render() {
    return (
      <main>
        <div>
          <h1>CONTACT</h1>
        </div>
        <section className="container" >

          <div className="row">
            <div className="col-sm-6">

              <iframe width="450" height="450" src="https://www.youtube.com/embed/rdfkuVb2TBU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <div className="col-sm-6" style={{
              align: "center",
              display: "initial",
              position: "relative"
            }}>
              <a href="https://www.latlong.net/c/?lat=40.601410&long=-73.991060" target="_blank"><img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" width="450" height="450" /></a>
            </div>

          </div>
          <h4 style={{ textAlign: 'center' }}>Telephone: +1 929 355 8730</h4>
          <h4 style={{ textAlign: 'center' }}>Email: aremufemmy02@gmail.com</h4>
        </section >
      </main>
    )
  }
}

export default Contact;



/*



<div>
          <a href="https://marvelapp.com/static/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a-537cd.jpg"><img src="https://marvelapp.com/static/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a-537cd.jpg" width="292" height="220" /></a>
        </div>



        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.2903171979365!2d-73.99323768478857!3d40.60141787934411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24506edf3862f%3A0xd4a3bf3162485bb6!2s8428+23rd+Ave%2C+Brooklyn%2C+NY+11214!5e0!3m2!1sen!2sus!4v1562181324648!5m2!1sen!2sus" width="300" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>


        <a href="https://github.com/holarmyde">
          <img
            className="fork-img"
            src="https://github.com/holarmyde"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"


          />
        </a>   */
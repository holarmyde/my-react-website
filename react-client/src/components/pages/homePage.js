import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      logo: "http://www.eatlogos.com/business_logos/png/vector_business_globe.png",
      showcase: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

    }
  }

  render() {

    return (
      <div>
        <div className="showcase" >
          <div className="content">

            <img src={this.state.logo} />
            <div className="title">
              Welcome To My Portfolio
              </div>
            <div className="text">
              <p>If you have it within yourself to work twice as hard why aren't you doing it now....</p>
              <div className="row">
                <div className="col-sm-6">
                  <a class="btn btn-full" href="https://calendly.com/aremufemmy02/15min?month=2019-07"> Contact Me</a>
                </div>
                <div className="col-sm-6">
                  <a class="btn btn-ghost" href="https://www.dropbox.com/home?preview=Femi+Aremu_Resumedocx.docx">Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="services">
          <div className="container grid-3 center">
            <div>
              <i className="fab fa-youtube fa-3x"></i>
              <h3>YouTube</h3>
              <p>My learning process involves sharing information within my knowledgebase</p>
            </div>
            <div>
              <i className="fas fa-chalkboard-teacher fa-3x"></i>
              <h3>Courses</h3>
              <p>A few classes and courses which I have attended and changed my life</p>
            </div>
            <div>
              <i className="fas fa-briefcase fa-3x"></i>
              <h3>Research Work</h3>
              <p>This is an aspiring part of me. I have it in my plans to do Research.</p>
            </div>
          </div>
        </section>



        <section className="about bg-light">
          <div className="container">
            <div className="grid-2">
              <div className="center">
                <i className="fas fa-laptop-code fa-10x"></i>
              </div>
              <div>
                <h3>About</h3>
                <p>I have always carried the passion to impact humanity in every way. I am a full stack developer and I also do UI/UX design. I do believe life has a lot to do with creativity and inovation. Simplicity is an important philosophy for me in design. Please do enjoy what am privileged to offer.</p>
              </div>
            </div>
          </div>
        </section>



      </div>
    )
  }
}

export default HomePage;
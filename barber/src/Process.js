import React, {Component} from 'react';

class Process extends Component{
  render () {
    return (
        <div> 
        <section className="page-section" id="Process">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Process</h2>
          <h3 className="section-subheading text-muted">The Steps in Barber Shop</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/about/cuting.png" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>STEP 1</h4>
                  <h4 className="subheading">THE CUT</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">  Tell us how you want your hair cut and we’ll take it from there. Snip, snip, clip, clip... “Sir, you are looking studly.“</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/about/hottt.png" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>STEP 2</h4>
                  <h4 className="subheading">HOT TOWEL</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Nothing’s better than a hot towel on your face after a fresh hair cut. Lay back and relax, but please, try not to fall asleep. </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/about/wash.png" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>STEP 3</h4>
                  <h4 className="subheading">WASH</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted"> Nobody likes an itchy neck. We wash you down and scrub your scalp with exfoliating menthol based shampoo.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="images/about/massage.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>STEP 4</h4>
                  <h4 className="subheading">MASSAGE</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Just when you thought it couldn’t get any better, we top off your haircut with a relaxing shoulder massage. You’ll leave one relaxed fellow.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part Of Our Shop!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </div>
        
    )
  }
}
    
  


export default Process;
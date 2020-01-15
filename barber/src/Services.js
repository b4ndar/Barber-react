import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="Services">
    <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Services Offered may vary by locatin</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-cut fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">MALE CUT</h4>
          <p className="text-muted">Includes: Wash, Massage, and Hot Towel</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fab fa-keybase fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">KID CUT</h4>
          <p className="text-muted">Under 10 age, Hair cut only</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fab fa-jenkins fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">BEARD TRIM</h4>
          <p className="text-muted">Everyone have own tools</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-paint-brush fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">COLOR</h4>
          <p className="text-muted">There are exlusive haircolor with treatment</p>
        </div>

        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-mask fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">WAX</h4>
          <p className="text-muted">National ingredients and easy to wash</p>
        </div>

        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fas fa-tint fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">FACIAL</h4>
          <p className="text-muted">Spa treatments</p>
        </div>

      </div>
    </div>
  </section>
            </div>
        );
    }
}


export default Services;
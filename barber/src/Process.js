import React, {Component} from 'react';

class Process extends Component {
  render () {
    return (
<header className="steps">
      <div className="steps1">
    <h1>Step 1</h1>
    <h2> THE CUT</h2>
    <p>Tell us how you want your hair cut and we’ll take it from there. Snip, snip, clip, clip... “Sir, you are looking studly.”</p>
      </div>
         <div className="steps2">
         <h1>Step 2</h1>
         <h2> HOT TOWEL</h2>
         <p>Nothing’s better than a hot towel on your face after a fresh hair cut. Lay back and relax, but please, try not to fall asleep.</p>
           </div>

<div className="steps3">
<h1>Step 3</h1>
<h2> WASH</h2>
<p>Nobody likes an itchy neck. We wash you down and scrub your scalp with exfoliating menthol based shampoo.</p>
  </div>

<div className="steps3">
<h1>Step 4</h1>
<h2> MASSAGE</h2>
<p>Just when you thought it couldn’t get any better, we top off your haircut with a relaxing shoulder massage. You’ll leave one relaxed fellow.</p>
  </div>
  </header>
    )
  }
}

export default Process;
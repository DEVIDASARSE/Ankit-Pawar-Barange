export default function MenuOverlay() {
  return (
      <div aria-label="Menu" id="mn"><button className="mnb" id="mx">Close ✕</button><a className="l" href="#about" style={{'--i': 0}}><small>01</small>The person</a><a className="l" href="#work" style={{'--i': 1}}><small>02</small>The story</a><a className="l" href="#industries" style={{'--i': 2}}><small>03</small>Industries</a><a className="l" href="#proof" style={{'--i': 3}}><small>04</small>Proof</a><a className="l" href="#path" style={{'--i': 4}}><small>05</small>The path</a><a className="l" href="#contact" style={{'--i': 5}}><small>06</small>Contact</a></div>
  )
}

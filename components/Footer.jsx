import site from '../site.config'

export default function Footer() {
  return (
      <footer><div className="big sf">Ankit Pawar</div><div className="fr mo"><span>© 2026 Ankit Pawar</span><span id="clk">Nagpur</span><span><a href={site.linkedin} rel="noopener" target="_blank">LinkedIn</a> · <a href={site.instagram} rel="noopener" target="_blank">Instagram</a></span><a className="mg" href="#top">Back to top ↑</a></div></footer>
  )
}

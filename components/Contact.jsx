import site from '../site.config'

export default function Contact() {
  return (
      <section className="ct" id="contact"><p className="mo rv">Open to roles</p><h2 className="sf rv">Let’s build something <span className="gt">precise.</span></h2><p className="rv" style={{maxWidth: '48ch', margin: '0 auto 34px'}}>Manufacturing, machine operations, production and electrical technical work.</p>
        <form className="cfm rv" id="cf" noValidate><div className="fg"><label className="mo" htmlFor="fn">Name</label><input autoComplete="name" id="fn" maxLength={80} /><small aria-live="polite" className="er" /></div><div className="fg"><label className="mo" htmlFor="fe">Email</label><input autoComplete="email" id="fe" maxLength={120} type="email" /><small aria-live="polite" className="er" /></div><div className="fg full"><label className="mo" htmlFor="fm">Message</label><textarea id="fm" maxLength={1500} defaultValue={""} /><small aria-live="polite" className="er" /></div><input aria-hidden="true" autoComplete="off" className="hpt" id="fw" tabIndex={-1} /><button className="bt p" type="submit">Send message</button><p aria-live="polite" className="mo" id="fs" role="status" /></form>
        <div className="soc rv"><a className="bt mg" href={site.linkedin} rel="noopener" target="_blank">LinkedIn</a><a className="bt mg" href={site.instagram} id="ig" rel="noopener" target="_blank">Instagram</a></div></section>
  )
}

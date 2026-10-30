import ProgressBar from '../components/ProgressBar'
import Preloader from '../components/Preloader'
import CursorDot from '../components/CursorDot'
import CursorRing from '../components/CursorRing'
import Nav from '../components/Nav'
import MenuOverlay from '../components/MenuOverlay'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Statement from '../components/Statement'
import About from '../components/About'
import Work from '../components/Work'
import How from '../components/How'
import Industries from '../components/Industries'
import Proof from '../components/Proof'
import Lightbox from '../components/Lightbox'
import Path from '../components/Path'
import Beyond from '../components/Beyond'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Motion from '../components/Motion'

export default function Page() {
  return (
    <>
      <ProgressBar />
      <Preloader />
      <CursorDot />
      <CursorRing />
      <Nav />
      <MenuOverlay />
      <main id="top">
        <Hero />
        <Marquee />
        <Statement />
        <About />
        <Work />
        <How />
        <Industries />
        <Proof />
        <Lightbox />
        <Path />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  )
}

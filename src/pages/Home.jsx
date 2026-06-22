import Navbar from '../components/leah/Navbar';
import Hero from '../components/leah/Hero';
import Stats from '../components/leah/Stats';
import Philosophy from '../components/leah/Philosophy';
import TheWork from '../components/leah/TheWork';
import Method from '../components/leah/Method';
import Principles from '../components/leah/Principles';
import Programs from '../components/leah/Programs';
import Results from '../components/leah/Results';
import MeetLeah from '../components/leah/MeetLeah';
import Books from '../components/leah/Books';
import Speaking from '../components/leah/Speaking';
import Footer from '../components/leah/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--canvas)' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Philosophy />
      <TheWork />
      <Method />
      <Principles />
      <Programs />
      <Results />
      <MeetLeah />
      <Books />
      <Speaking />
      <Footer />
    </div>
  );
}
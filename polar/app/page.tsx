import Header from '../components/Header';
import Hero from '../components/Hero';
import Players from '../components/Players';
import Club from '../components/Club';
import Games from '../components/Games';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Players />
        <Club />
        <Games />
      </main>
      <Footer />
    </div>
  );
}

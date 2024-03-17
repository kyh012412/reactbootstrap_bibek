import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testmonial';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
      </main>
    </div>
  );
}

export default App;

import styles from './app.module.scss';
import { AppHeader } from '../components/appHeader/app-header';
import { Outlet } from 'react-router-dom';
import  {ParticlesBackground} from '../components/particlesBackground/ParticlesBackground';

const App = () => {
  return (
    <div className={styles.app}>
      <ParticlesBackground />
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
import styles from './app.module.scss';
import { AppHeader } from '../widgets/appHeader/app-header';
import { Outlet } from 'react-router-dom';
import  {ParticlesBackground} from '../features/particlesBackground/ParticlesBackground';

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
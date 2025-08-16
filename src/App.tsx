import './App.css';
import { SplashCursor } from '@/components/ui/splash-cursor';
import Portfolio from '@/components/Portfolio';

function App() {
  return (
    <div className="relative">
      <SplashCursor />
      <Portfolio />
    </div>
  );
}

export default App;
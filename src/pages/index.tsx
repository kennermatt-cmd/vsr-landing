/*export default function Home() {
  return <h1 style={{ color: 'white' }}>Hello, VSR</h1>;
}*/

import Hero from '@/components/Hero';
import About from '@/components/About';
import Featured from '@/components/Featured';
import Services from '@/components/Services';
import NowHiring from '@/components/NowHiring';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Home() {
  console.log("Rendering Home Page");
  
  // Initialize analytics tracking
  useAnalytics();

  return (
    <>
      <main>
          <Hero />
          <Featured />
          <About />
          <Services />   
          <NowHiring />
      </main>
    </>
  );
}

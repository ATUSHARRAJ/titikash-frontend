import React, { useEffect, useState } from 'react';
import NormalView from '@/pages/Portfolio/NormalView';
import EmbeddedView from '@/pages/Portfolio/Embedded';

const Portfolio: React.FC = () => {
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    // Checks if the app is running in an iframe (embedded)
    setIsEmbedded(window.self !== window.top);
  }, []);

  return isEmbedded ? <EmbeddedView /> : <NormalView />;
};

export default Portfolio;

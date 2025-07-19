import React, { useEffect, useState } from 'react';
import NormalView from '@/pages/ProjectDetails/NormalView';
import Embedded from '@/pages/ProjectDetails/Embedded';

const ProjectDetail: React.FC = () => {
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    // Checks if the app is running in an iframe (embedded)
    setIsEmbedded(window.self !== window.top);
  }, []);

  return isEmbedded ? <Embedded /> : <NormalView />;
};

export default ProjectDetail;
import { PATHS, PUBLIC_PATHS } from '@/common/constants';
import { useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsConnectedToMainnet } from './useIsConnectedToMainnet';

export const useAuthRedirect = () => {
  const [isRedirecting, setIsRedirecting] = useState(true);
  const isLoggedIn = useIsLoggedIn();
  const { isEvaluating: isEvaluatingMainnetConnection, isConnectedToMainnet } =
    useIsConnectedToMainnet();
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();
  const locationState = { isConnectedToMainnet };

  useEffect(() => {
    setIsRedirecting(true);

    if (isEvaluatingMainnetConnection) return;
    if (
      (!isLoggedIn && !PUBLIC_PATHS.includes(currentPath)) ||
      (isLoggedIn && !isConnectedToMainnet)
    ) {
      navigate(PATHS.login, { replace: true, state: locationState });
    } else if (isLoggedIn && PUBLIC_PATHS.includes(currentPath)) {
      navigate(PATHS.root, { replace: true, state: locationState });
    }

    setIsRedirecting(false);
  }, [isLoggedIn, currentPath, navigate, isConnectedToMainnet, isEvaluatingMainnetConnection]);

  return isRedirecting;
};

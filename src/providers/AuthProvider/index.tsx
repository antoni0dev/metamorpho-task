import { FC, PropsWithChildren } from 'react';
import { useAuthRedirect } from './hooks/useAuthRedirect';
import { Spinner } from '@/common/components/ui/Spinner';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const isRedirecting = useAuthRedirect();

  return isRedirecting ? <Spinner /> : children;
};

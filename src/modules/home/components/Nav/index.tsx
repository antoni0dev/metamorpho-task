import { DynamicNav, useDynamicContext } from '@dynamic-labs/sdk-react-core';

export const Nav = () => {
  const { user } = useDynamicContext();
  return <nav>{user && <DynamicNav />}</nav>;
};

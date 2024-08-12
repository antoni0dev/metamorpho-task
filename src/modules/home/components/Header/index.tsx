import { Logo } from '../../../../common/components/ui/Logo';
import { Wrapper } from './Header.styled';
import { Nav } from '../Nav';

export const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  );
};

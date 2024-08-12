import { Image } from './Logo.styled';

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({ width = 48, height = 48, className }: LogoProps) => (
  <Image width={width} height={height} className={className} src="/images/logo.png" alt="logo" />
);

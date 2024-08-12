type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({ width = 48, height = 48, className }: LogoProps) => (
  <img width={width} height={height} className={className} src="/images/logo.png" alt="logo" />
);

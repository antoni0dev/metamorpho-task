import { COLORS } from '@/common/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  width: 300px;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${COLORS.gray[700]};
  font-weight: 100;
  font-size: 24px;
`;

export const Description = styled.p`
  color: ${COLORS.gray[300]};
`;

export const StyledConnectWalletButtonContainer = styled.div`
  margin-top: 18px;
  align-self: stretch;
`;

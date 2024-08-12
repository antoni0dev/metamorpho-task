import { COLORS } from '@/common/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-inline: auto;
  background-color: ${COLORS.white};
  width: 400px;
  padding: 48px 24px;
  border-radius: 12px;
  box-shadow:
    0 4px 8px 0 ${COLORS.gray[300]},
    0 6px 20px 0 ${COLORS.gray[300]};

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorText = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.danger};
  margin-top: 4px;
`;

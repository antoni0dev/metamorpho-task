import { COLORS } from '@/common/constants';
import styled from 'styled-components';

export const Wrapper = styled.header`
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

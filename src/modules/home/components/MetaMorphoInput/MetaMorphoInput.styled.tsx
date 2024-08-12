import styled from 'styled-components';
import { COLORS } from '@/common/constants';

export const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  display: block;
  margin-bottom: 12px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${COLORS.gray[300]};
  border-radius: 12px;
  font-size: 1rem;
  color: ${COLORS.gray[700]};
  outline: none;

  &:focus {
    border-color: ${COLORS.primary};
  }
`;

export const ErrorText = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.danger};
  margin-top: 4px;
`;

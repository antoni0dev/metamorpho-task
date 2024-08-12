import styled from 'styled-components';
import { UnstyledButton } from '../UnstyledButton';
import { COLORS } from '@/common/constants';

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  align-self: stretch;
`;

export const Button = styled(UnstyledButton)`
  width: 100%;
  padding: 12px 24px;
  color: white;
  background: linear-gradient(15deg, #3b2de0 0%, #3bcff0 45%, #8cf0b8 100%);
  background-size: 200% 100%;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  transition:
    background 0.3s ease,
    color 0.3s ease;
  outline: none;

  &:disabled {
    background: linear-gradient(
      135deg,
      rgba(208, 220, 255, 0.7) 0%,
      rgba(224, 240, 255, 0.7) 50%,
      rgba(240, 255, 250, 0.7) 100%
    );
    color: rgba(255, 255, 255, 0.7);
    cursor: not-allowed;
  }

  &:focus {
    outline: 1px solid ${COLORS.primary};
  }
`;

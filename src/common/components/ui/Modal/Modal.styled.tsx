import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { COLORS } from '@/common/constants';
import { UnstyledButton } from '@/common/components/ui/UnstyledButton';

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: ${COLORS.secondary};
  backdrop-filter: blur(4px);
`;

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.white};
  padding: 48px 12px;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  width: 330px;
`;

export const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseModalButton = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: hsla(${COLORS.secondary}, 0.7);

  &:hover {
    background-color: hsla(${COLORS.secondary}, 0.1);
    color: hsla(${COLORS.secondary}, 0.9);
  }
`;

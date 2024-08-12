import * as Dialog from '@radix-ui/react-dialog';
import { CloseModalButton, DialogContent, DialogOverlay, ModalRow } from './Modal.styled';
import { CSSProperties, ReactNode } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';

type ModalProps = {
  defaultIsOpen?: boolean;
  isOpen: boolean;
  onClose?: () => void;
  titleSlot?: ReactNode;
  descriptionSlot?: ReactNode;
  children?: ReactNode;
  showCloseButton?: boolean;
  containerStyle?: CSSProperties;
};

export const Modal = ({
  isOpen,
  onClose,
  titleSlot,
  descriptionSlot = null,
  defaultIsOpen = false,
  showCloseButton = true,
  containerStyle,
  children
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={defaultIsOpen} onOpenChange={onClose}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent style={containerStyle}>
          <ModalRow>
            {titleSlot}
            {showCloseButton && (
              <CloseModalButton onClick={onClose}>
                <Cross1Icon />
              </CloseModalButton>
            )}
          </ModalRow>
          {descriptionSlot}
          {children}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

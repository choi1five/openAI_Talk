import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { flexbox } from '@/styles/mixin';
import { PropsWithChildren } from 'react';
import Image from 'next/image';

interface Props {
  onClose: () => void;
}

const Backdrop = ({ onClose }: Props) => {
  return <BackdropWrapper onClick={onClose} />;
};

const ModalOverlay = ({ onClose, children }: PropsWithChildren<Props>) => {
  return (
    <ModalWrapper>
      <Header>
        <button>
          <Image
            src="/close.svg"
            alt="close"
            width={32}
            height={32}
            onClick={onClose}
          />
        </button>
      </Header>
      <Content>{children}</Content>
    </ModalWrapper>
  );
};

const Modal = ({ onClose, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop-root')!
      )}
      {createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        document.getElementById('modal-root')!
      )}
    </>
  );
};

export default Modal;

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalWrapper = styled.div`
  ${flexbox('column', 'center', 'center')};
  position: fixed;
  margin: 0 auto;
  padding: 24px;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 1024px;
  transform: translate(-50%, -50%);
  z-index: 201;
  max-width: 900px;
  overflow: hidden;
  background: ${({ theme }) => theme.darkGray};
  border-radius: 4px;
`;

const Header = styled.header`
  ${flexbox('row', 'flex-end', 'center')};
  width: 100%;
`;

const Content = styled.div`
  ${flexbox('column', 'center', 'flex-start')};
  width: 100%;
  gap: 24px;
`;

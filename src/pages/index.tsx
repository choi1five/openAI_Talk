import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import styled from '@emotion/styled';
import { flexbox } from '@/styles/mixin';
import Modal from '@/components/common/Modal/Modal';

export default function ChatListPage() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleAddMode = () => {
    setIsAddMode((prevIsAddMode) => !prevIsAddMode);
  };

  const toggleEditMode = () => {
    setIsEditMode((prevIsEditMode) => !prevIsEditMode);
  };

  return (
    <Wrapper>
      <Header>
        <Image src="/logo.svg" alt="logo" width={107} height={19} />
        <button onClick={toggleAddMode}>
          <Image src="/plus.svg" alt="plus" width={20} height={20} />
        </button>
      </Header>
      <Main isAddMode={isAddMode}>
        {isAddMode ? (
          <AddInput>
            <Input label="방 이름" />
            <Input label="방 인원" type="number" min={1} />
          </AddInput>
        ) : (
          <ChatList>
            <li>
              {isEditMode && (
                <Modal onClose={toggleEditMode}>
                  <Input label="방 이름" />
                  <Input label="방 인원" type="number" min={1} />
                  <ButtonWrapper>
                    <Button
                      width="80px"
                      padding="8px 12px"
                      fontSize="16px"
                      background="red"
                      onClick={toggleEditMode}
                    >
                      삭제
                    </Button>
                    <Button
                      width="80px"
                      padding="8px 12px"
                      fontSize="16px"
                      onClick={toggleEditMode}
                    >
                      수정
                    </Button>
                  </ButtonWrapper>
                </Modal>
              )}
              <p>넘블모여라</p>
              <Button
                width="80px"
                padding="8px 12px"
                fontSize="16px"
                onClick={toggleEditMode}
              >
                수정
              </Button>
            </li>
            <li>
              <p>openAI톡방</p>
              <Button width="80px" padding="8px 12px" fontSize="16px">
                수정
              </Button>
            </li>
          </ChatList>
        )}
      </Main>
      <Footer>
        <Button>방 생성</Button>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'center')};
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
`;

const Header = styled.header`
  ${flexbox('row', 'space-between', 'center')};
  width: 100%;
  flex: 1 1 10%;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

const Main = styled.main<{ isAddMode: boolean }>`
  ${({ isAddMode }) =>
    isAddMode
      ? flexbox('column', 'center', 'center')
      : flexbox('column', 'flex-start', 'center')};
  width: 100%;
  flex-grow: 8;
  flex-shrink: 8;
  flex: 1 1 80%;
  overflow: auto;
`;

const Footer = styled.footer`
  ${flexbox('row', 'center', 'center')};
  width: 100%;
  padding: 0 24px;
  flex: 1 1 10%;
`;

const AddInput = styled.div`
  ${flexbox('column', 'center', 'center')};
  gap: 32px;
  width: 100%;
  padding: 0 24px;
`;

const ChatList = styled.ul`
  width: 100%;

  & li {
    ${flexbox('row', 'space-between', 'center')};
    padding: 0 24px;
    border-bottom: 1px solid ${({ theme }) => theme.gray};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  ${flexbox('row', 'flex-end', 'center')};
  gap: 8px;
`;

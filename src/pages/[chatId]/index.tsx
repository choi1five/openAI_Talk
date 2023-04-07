import { Input } from '@/components/common/Input/Input';
import { flexbox } from '@/styles/mixin';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ChatDetailPage = () => {
  return (
    <Wrapper>
      <Header>
        <Link href={'/'}>
          <Image src="/prev.svg" alt="prev icon" width={12} height={24} />
        </Link>
        <p>넘블 모여라</p>
      </Header>
      <Main>
        <ChatList>
          <ChatBubbleFromMe>
            <p>질문이 있어요</p>
          </ChatBubbleFromMe>
          <ChatBubble>
            <Image
              src="/defaultProfile.svg"
              alt="defaultProfile"
              width={48}
              height={48}
            />
            <div>
              <span>AI 1</span>
              <p>채팅 1</p>
            </div>
          </ChatBubble>
          <ChatBubble>
            <Image
              src="/defaultProfile.svg"
              alt="defaultProfile"
              width={48}
              height={48}
            />
            <div>
              <span>AI 2</span>
              <p>채팅 22222222222222222222222222222222222</p>
            </div>
          </ChatBubble>
        </ChatList>
      </Main>
      <Footer>
        <SendInput>
          <Textarea as={'textarea'} />
          <button>
            <Image src="/send.svg" alt="send icon" width={32} height={38} />
          </button>
        </SendInput>
      </Footer>
    </Wrapper>
  );
};

export default ChatDetailPage;

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'center')};
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
`;

const Header = styled.header`
  ${flexbox('row', 'flex-start', 'center')};
  gap: 20px;
  width: 100%;
  flex: 1 1 5%;
  padding: 12px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: 20px;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 8;
  flex-shrink: 8;
  flex: 1 1 80%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 24px;
`;

const Footer = styled.footer`
  ${flexbox('row', 'center', 'center')};
  width: 100%;
  padding: 0 24px;
  flex: 1 1 5%;
`;

const SendInput = styled.div`
  position: relative;
  width: 100%;

  & button {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

const Textarea = styled(Input)`
  height: 54px;
  resize: none;
  text-align: start;
  padding: 16px 62px 16px 20px;
`;

const ChatList = styled.ul`
  & li {
    gap: 8px;
    width: 100%;

    & div {
      width: 100%;
    }
  }
`;

const ChatBubble = styled.li`
  ${flexbox('row', 'flex-start', 'flex-start')};

  & p {
    width: fit-content;
    max-width: 70%;
    padding: 10px;
    margin-bottom: 16px;
    background: ${({ theme }) => theme.gray};
    border-radius: 10px;
    word-wrap: break-word;
  }
`;

const ChatBubbleFromMe = styled(ChatBubble)`
  ${flexbox('row', 'flex-end', 'flex-start')};

  & p {
    background: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.darkGray};
  }
`;

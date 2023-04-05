import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import useInput from '@/hooks/useInput';
import { flexbox } from '@/styles/mixin';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  const { value, onChange } = useInput();
  return (
    <Wrapper>
      <InputWrapper>
        <Image src="/numble.svg" alt="Numble Logo" width={107} height={104} />
        <Input id="API" label="API KEY" value={value} onChange={onChange} />
      </InputWrapper>
      <ButtonWrapper>
        <Button>Login</Button>
        <Link href="">KEY 발급받는 방법</Link>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.form`
  ${flexbox('column', 'center', 'center')};
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  padding: 100px 24px 0;

  & button {
    margin-top: 150px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  flex-grow: 8;
  ${flexbox('column', 'center', 'center')};
  gap: 60px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  flex-grow: 2;
  ${flexbox('column', 'center', 'center')};
  gap: 20px;
`;

import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { flexbox } from '@/styles/mixin';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ id, label, ...attributes }: Props) => {
  console.log(attributes);
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...attributes} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'flex-start')};
  font-size: 20px;
  width: 100%;

  & label {
    font-weight: bold;
    margin-bottom: 20px;
  }

  & input {
    width: 100%;
    padding: 16px 20px;
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme.gray};
    border-radius: 5px;
    outline: none;
    text-align: end;

    &:focus {
      border-color: ${({ theme }) => theme.white};
    }
  }
`;

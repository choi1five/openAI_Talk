import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';
import { flexbox } from '@/styles/mixin';

interface Props {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler;
}

const Input = ({ id, label, type = 'text', value, onChange }: Props) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'flex-start')};
  font-size: 20px;

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

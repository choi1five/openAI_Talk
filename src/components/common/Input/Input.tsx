import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { flexbox } from '@/styles/mixin';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputWithLabel = ({ id, label, ...attributes }: Props) => {
  return (
    <Wrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <Input id={id} name={id} {...attributes} />
    </Wrapper>
  );
};

export default InputWithLabel;

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'flex-start')};
  font-size: 20px;
  width: 100%;

  & label {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input<Props>`
  width: 100%;
  padding: '16px 20px';
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.gray};
  text-align: end;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.white};
  }
`;

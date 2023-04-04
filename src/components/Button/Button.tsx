import styled from '@emotion/styled';

interface Props {
  width?: string;
  background?: string;
  padding?: string;
  fontSize?: string;
}

const Button = styled.button<Props>`
  background: ${({ background, theme }) =>
    theme[background as keyof typeof theme] || background || theme.blue};
  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || '24px'};
  padding: ${({ padding }) => padding || '12px 16px'};
  border-radius: 5px;
  text-align: center;
`;

export default Button;

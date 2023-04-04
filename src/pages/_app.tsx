import { Global, ThemeProvider, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import globalStyle from '@/styles/globals';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${emotionNormalize}
            ${globalStyle}
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

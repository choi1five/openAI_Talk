export const flexbox = (
  direction: string | undefined = 'row',
  justify: string | undefined = 'flex-start',
  items: string | undefined = 'stretch',
  wrap: string | undefined = 'nowrap'
) => `
  display: flex;
  flex-flow: ${direction} ${wrap};
  justify-content: ${justify};
  align-items: ${items};
  `;

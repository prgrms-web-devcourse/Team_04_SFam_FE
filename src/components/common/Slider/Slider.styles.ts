import styled from '@emotion/styled';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const RangeInput = styled('input')({
  '-webkit-appearance': 'none',
  overflow: 'hidden',
  height: '10px',
  borderRadius: '16px',
  backgroundColor: '#d7fbe8',
  '::-webkit-slider-thumb': {
    '-webkit-appearance': 'none',
    width: '20px',
    height: '20px',
    border: '1px solid #eee',
    borderRadius: '50%',
    background: '#fff',
    boxShadow: '-220px 0 0 210px #1fab89',
    cursor: 'ew-resize',
  },
  '::-webkit-slider-runnable-track': {
    '-webkit-appearance': 'none',
    color: '#1fab89',
  },
});

export const RowWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const RangeText = styled('span')({
  margin: '10px 14px 0 14px',
});

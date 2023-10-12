import { keyframes, style } from '@vanilla-extract/css';

export const app = style({
  textAlign: 'center',
});

const logoSpin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const logo = style({
  animation: `${logoSpin} infinite 20s linear`,
  height: '40vmin',
  pointerEvents: 'none',
});

export const header = style({
  backgroundColor: '#282c34',
  minHeight: 'calc(100vh - 1.25rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

export const link = style({
  color: '#b318f0',
});

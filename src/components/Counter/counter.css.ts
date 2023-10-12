import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  margin: '0',
  paddingBottom: '1rem',
  padding: 'none',
  backgroundColor: '#282c34',
  width: '100vw',
  justifyContent: 'center',
});

export const text = style({
  verticalAlign: 'middle',
  margin: '0 1rem',
  textAlign: 'center',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: 'rgba(128,128,255, 0.8)',
  fontSize: '1.5rem',
  height: '2rem',
});

export const button = style({
  verticalAlign: 'middle',
  borderRadius: '2px',
  backgroundColor: '#9900ff',
  border: 'none',
  display: 'inline-block',
  lineHeight: '1',
  fontSize: '1.5rem',
  width: '2rem',
  height: '2rem',
  ':hover': {
    backgroundColor: '#cc99ff',
  },
  ':active': {
    WebkitTransform: 'translateY(2px)',
    transform: 'translateY(2px)',
  },
});

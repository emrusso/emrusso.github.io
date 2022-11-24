import { DetailedHTMLProps, FunctionComponent, ReactNode, useContext } from 'react';

import { ThemeContext } from './theme-context';

const ThemeSwitch: FunctionComponent<JSX.IntrinsicElements['button']> = (props) => (
  <button
    aria-checked={props['aria-checked']}
    className="theme-controls__switch"
    type="button"
    role="switch"
    {...props}
  >
    {props.children}
  </button>
)

export const ThemeControls: FunctionComponent = () => {
  const { color, garden, setColor, setGarden } = useContext(ThemeContext);

  return (
    <div className="theme-controls" role="group" aria-labelledby="id-group-label">
      <h3 id="id-group-label">Theme</h3>
      <ThemeSwitch
        aria-checked={color === 'dark'}
        onClick={(): void => setColor((prevColor) => prevColor === 'light' ? 'dark' : 'light')}
      >
        <span>Dark mode</span>
        {color === 'light' ? (
          <span aria-hidden className="material-symbols-outlined">
            toggle_off
          </span>
        ) : (
          <span className="material-symbols-outlined">
            toggle_on
          </span>
        )}
      </ThemeSwitch>
      <ThemeSwitch aria-checked={garden} onClick={(): void => setGarden((prevGarden) => !prevGarden)}>
        <span>Garden mode</span>
        {!garden ? (
          <span aria-hidden className="material-symbols-outlined">
            toggle_off
          </span>
        ) : (
          <span className="material-symbols-outlined">
            toggle_on
          </span>
        )}
      </ThemeSwitch>
    </div>
  );
};

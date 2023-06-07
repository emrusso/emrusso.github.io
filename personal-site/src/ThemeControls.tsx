import { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './theme-context';

interface ThemeControlsProps extends HTMLAttributes<HTMLDivElement> {}
interface ThemeSwitchProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ThemeSwitch: FunctionComponent<ThemeSwitchProps> = ({ label, ...props }) => (
  <button
    aria-checked={props['aria-checked']}
    className="theme-controls__switch"
    type="button"
    role="switch"
    {...props}
  >
    <span>{label}</span>
    <span aria-hidden className="material-symbols-outlined">
      {props['aria-checked'] ? 'toggle_on' : 'toggle_off'}
    </span>
  </button>
);

const UnstyledThemeControls: FunctionComponent<ThemeControlsProps> = ({ className }) => {
  const { color, garden, setColor, setGarden } = useContext(ThemeContext);

  return (
    <div className={className}>
      <h1><strong>Emmi Russo</strong></h1>
      <div className="theme-controls" role="group" aria-labelledby="id-group-label">
        <h3 className="sr-only" id="id-group-label">Theme</h3>
        <ThemeSwitch
          aria-checked={color === 'dark'}
          label={'dark mode'}
          onClick={(): void => setColor((prevColor) => prevColor === 'light' ? 'dark' : 'light')}
        />
        <ThemeSwitch
          aria-checked={garden}
          label={'garden mode'}
          onClick={(): void => setGarden((prevGarden) => !prevGarden)}
        />
      </div>
    </div>
  );
};

const StyledThemeControls = styled(UnstyledThemeControls)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 1000px;

  h1 {
    font-size: 3em;
    font-family: 'Secular One', sans-serif;
    text-transform: lowercase;
  }

  .theme-controls {
    border: 5px dashed ${props => props.theme.iconColor};
    display: flex;
    flex-direction: column;
    padding: 20px;

    &__switch {
      align-items: center;
      display: flex;
      gap: 5px;
      justify-content: space-between;
      width: 100%:
    }
  }
`;

export const ThemeControls: FunctionComponent<ThemeControlsProps> = (props) => (
  <StyledThemeControls {...props} />
);

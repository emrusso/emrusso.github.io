import { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';

import { ResumeEntry } from './ResumeEntry';
import { ThemeContext } from './theme-context';

interface ExperiencesProps extends HTMLAttributes<HTMLUListElement> {
  experiences: ResumeEntry[];
}

const UnstyledExperiences: FunctionComponent<ExperiencesProps> = ({ className, experiences, ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className={`no-list-styling ${className}`} {...props} >
      {experiences.map(({ company, location, positions, bullets }) => (
        <li className="experience" key={`experience-${company}-${location.city}`}>
          <span>
            <strong>{company},</strong>&nbsp;
            {location.city},&nbsp;{location.state}
          </span>
          <>
            {positions.map((position) => (
              <span className="experience__position" key={`position-${company}-${position.title}`}>
                <em className="experience__position--title">{position.title}</em>
                {position.startDate}&nbsp;&#8211;&nbsp;{position.endDate}
              </span>
            ))}
          </>
          <ul className="experience__bullets no-list-styling">
            {bullets.map((bullet, i) => (
              <li>
                <span className="experience__bullets__item" key={`experience-bullet-${company}-${location.city}-${i}`}>
                  <span aria-hidden className="material-symbols-outlined">{theme.icon}</span>
                  <span>{bullet}</span>
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const StyledExperiences = styled(UnstyledExperiences)`
  .experience__position {
    &--title {
      background-color: ${props => props.theme.highlightColor};
      padding: 10px;
    }
  }

  .experience__bullets {
    &__item {
      padding-bottom: 10px;
    }
  }

  .material-symbols-outlined {
    color: ${props => props.theme.iconColor};
  }
`;

export const Experiences: FunctionComponent<ExperiencesProps> = (props) => (
  <StyledExperiences {...props} />
);

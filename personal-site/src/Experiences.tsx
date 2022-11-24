import { FunctionComponent } from 'react';
import { ResumeEntry } from './ResumeEntry';

interface ExperiencesProps {
  experiences: ResumeEntry[];
}

export const Experiences: FunctionComponent<ExperiencesProps> = ({ experiences }) => (
  <ul className="no-list-styling">
    {experiences.map(({ company, location, positions, bullets }) => (
      <li className="experience" key={`experience-${company}-${location.city}`}>
        <div>
          <strong>{company},</strong>&nbsp;
          {location.city},&nbsp;{location.state}
        </div>
        <>
          {positions.map((position) => (
            <div className="experience__position" key={`position-${company}-${position.title}`}>
              <em>{position.title}</em>
              {position.startDate}&nbsp;&#8211;&nbsp;{position.endDate}
            </div>
          ))}
        </>
        <ul className="experience__bullets no-list-styling">
          {bullets.map((bullet) => (
            <div className="experience__bullets__item">
              <span aria-hidden className="material-symbols-outlined">add</span>
              <li>{bullet}</li>
            </div>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

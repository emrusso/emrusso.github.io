import { FunctionComponent, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Experiences } from './Experiences';
import { resumeEntries } from './resume-entries';

interface ResumeProps extends HTMLAttributes<HTMLDivElement> {}

type Accordion = 'fullTime' | 'internships';

const UnstyledResume: FunctionComponent<ResumeProps> = ({ className }) => {
  const fullTime = resumeEntries.filter(({ internship }) => !internship);
  const internships = resumeEntries.filter(({ internship }) => !!internship);
  const [accordions, setAccordions] = useState<Record<Accordion, boolean>>({ fullTime: true, internships: false })

  const toggleAccordion = (accordionTitle: Accordion): void => {
    setAccordions({ ...accordions, [accordionTitle]: !accordions[accordionTitle] });
  };

  return (
    <div className={`resume ${className}`}>
      <section>
        <h2 className="resume__heading">
          <button
            aria-controls="full-time"
            aria-expanded={accordions['fullTime']}
            className="accordion-trigger"
            id="full-time-accordion"
            onClick={(): void => toggleAccordion('fullTime')}
            type="button"
          >
            Experience
          </button>
        </h2>
        {accordions['fullTime'] && (
          <Experiences experiences={fullTime} id="full-time" aria-labelledby="full-time-accordion" />
        )}
      </section>
      <section>
        <h2 className="resume__heading">
          <button
            aria-controls="internships"
            aria-expanded={accordions['internships']}
            className="accordion-trigger"
            id="internships-accordion"
            onClick={(): void => toggleAccordion('internships')}
            type="button"
          >
            Internships
          </button>
        </h2>
        {accordions['internships'] && (
          <Experiences experiences={internships} id="internships" aria-labelledby="internships-accordion" />
        )}
      </section>
    </div>
  );
}

const StyledResume = styled(UnstyledResume)`
  .resume__heading {
    font-size: 2.5em;
  }
`;

export const Resume: FunctionComponent<ResumeProps> = (props) => (
  <StyledResume {...props} />
);

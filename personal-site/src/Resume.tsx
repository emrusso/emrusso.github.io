import { FunctionComponent, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Accordion, ResumeSection } from './ResumeSection';

interface ResumeProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledResume: FunctionComponent<ResumeProps> = ({ className }) => {
  const [accordions, setAccordions] = useState<Record<Accordion, boolean>>({
    education: false,
    fullTime: true,
    internships: false,
    summary: true,
    technicalSkills: true
  })

  return (
    <div className={`resume ${className}`}>
      {['summary', 'education', 'technicalSkills', 'fullTime', 'internships'].map((accordion) => (
        <ResumeSection
          accordion={accordion as Accordion}
          accordions={accordions}
          setAccordions={setAccordions}
        />
      ))}
    </div>
  );
}

const StyledResume = styled(UnstyledResume)`
  .resume__heading {
    color: ${props => props.theme.iconColor};
    font-size: 2.5em;
    font-weight: normal;

    button {
      color: ${props => props.theme.iconColor};
      text-transform: lowercase;
      margin-left: -24px; // outdent caret to align headings with name
    }
  }
`;

export const Resume: FunctionComponent<ResumeProps> = (props) => (
  <StyledResume {...props} />
);

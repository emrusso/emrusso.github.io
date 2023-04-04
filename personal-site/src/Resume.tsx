import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Experiences } from './Experiences';
import { resumeEntries } from './resume-entries';

interface ResumeProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledResume: FunctionComponent<ResumeProps> = ({ className }) => {
  const fullTime = resumeEntries.filter(({ internship }) => !internship);
  const internships = resumeEntries.filter(({ internship }) => !!internship);

  return (
    <div className={`resume ${className}`}>
      <section>
        <h2 className="resume__heading">Experience</h2>
        <Experiences experiences={fullTime} />
      </section>
      <section>
        <h2 className="resume__heading">Internships</h2>
        <Experiences experiences={internships} />
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

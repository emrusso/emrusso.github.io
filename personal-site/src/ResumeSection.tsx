import { Dispatch, FunctionComponent, HTMLAttributes, ReactNode, SetStateAction } from 'react';
import { ResumeEntry } from './ResumeEntry';
import { Experiences } from './Experiences';
import { education, resumeEntries } from './resume-entries';
import { TechnicalSkills } from './TechnicalSkills';
import styled from 'styled-components';

export type Accordion = 'education' | 'fullTime' | 'internships' | 'summary' | 'technicalSkills';

interface AccordionProps {
  id: string;
  title: string;
  content?: ReactNode;
  experiences?: ResumeEntry[];
  languages?: string[];
  tools?: string[];
  old?: string[]
}

const fullTime = resumeEntries.filter(({ internship }) => !internship);
const internships = resumeEntries.filter(({ internship }) => !!internship);

const accordionProps: Record<Accordion, AccordionProps> = {
  education: {
    experiences: [education],
    id: 'education',
    title: 'Education',
  },
  fullTime: {
    experiences: fullTime,
    id: 'full-time',
    title: 'Experience'
  },
  internships: {
    experiences: internships,
    id: 'internships',
    title: 'Internships'
  },
  summary: {
    content: "Emmi here! I'm a full-stack developer with 6 years of professional experience. I'm known on my team for thoughtful code reviews, strong empathy for users and teammates alike, and glue work that keeps everyone on the same page. My passions at work are type systems, testing, and accessibility. My passions outside of work are video games, podcasts, developmental psychology, and my three-year-old Corgi, Maisie.",
    id: 'summary',
    title: 'Summary'
  },
  technicalSkills: {
    languages: ['TypeScript/JavaScript', 'React', 'HTML', 'CSS/SCSS', 'Ruby on Rails', 'SQL', 'Bash'],
    tools: ['Git', 'Jest', 'React Testing Library', 'Google Cloud Platform - Cloud Build, Firestore', 'Capybara/Selenium', 'Docker', 'Playwright'],
    old: ['jQuery', 'AngularJS', 'C', 'Java', 'Python', 'R', 'SML'],
    id: 'technical-skills',
    title: 'Technical Skills'
  }
}

interface ResumeSectionProps extends HTMLAttributes<HTMLDivElement> {
  accordion: Accordion;
  accordions: Record<Accordion, boolean>;
  setAccordions: Dispatch<SetStateAction<Record<Accordion, boolean>>>;
}

const UnstyledResumeSection: FunctionComponent<ResumeSectionProps> = ({ accordion, accordions, setAccordions, ...otherProps }) => {
  const { experiences, content, id, languages, old, title, tools } = accordionProps[accordion];

  return (
    <section {...otherProps}>
      <h2 className="resume__heading">
        <button
          aria-controls={id}
          aria-expanded={accordions[accordion]}
          className="accordion-trigger"
          id={`${id}-accordion`}
          onClick={(): void => { setAccordions({ ...accordions, [accordion]: !accordions[accordion] }); }}
          type="button"
        >
          <span className="material-symbols-outlined">
            {accordions[accordion] ? 'expand_more' : 'navigate_next'}
          </span>
          {title}
        </button>
      </h2>
      {accordions[accordion] && experiences && (
        <Experiences experiences={experiences} id={id} aria-labelledby={`${id}-accordion`} />
      )}
      {accordions[accordion] && languages && tools && old && (
        <div className="technical-skills__container" id={id}>
          <div className="technical-skills__actively-used">
            <TechnicalSkills entries={languages} type="languages" />
            <TechnicalSkills entries={tools} type="tools" />
          </div>
          <div className="technical-skills__old">
            Here's a list of things I used to be pretty good at but no longer actively use:
            <ul className="no-list-styling">
              {old.map((oldLanguage) => (<li key={`old-language-${oldLanguage}`}>{oldLanguage}</li>))}
            </ul>
          </div>
        </div>
      )}
      {accordions[accordion] && content && <div id={id}>{content}</div>}
    </section>
  );
};

const StyledResumeSection = styled(UnstyledResumeSection)`
  .technical-skills__actively-used {
    align-items: flex-start;
    display: flex;
    gap: 100px;
  }

  .technical-skills__old {
    margin-top: 15px;
  }
`;

export const ResumeSection: FunctionComponent<ResumeSectionProps> = (props) => (
  <StyledResumeSection {...props} />
);

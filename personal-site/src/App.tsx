import { FunctionComponent } from 'react';
import { Experiences } from './Experiences';
import { resumeEntries } from './resume-entries';
import { ThemeProvider } from './ThemeProvider';
import { ThemeControls } from './ThemeControls';
import './App.scss';

const App: FunctionComponent = () => {
  const fullTime = resumeEntries.filter(({ internship }) => !internship);
  const internships = resumeEntries.filter(({ internship }) => !!internship);

  return (
    <ThemeProvider>
      <ThemeControls />
      <div className="resume">
        <section>
          <h3 className="resume__heading">Experience</h3>
          <Experiences experiences={fullTime} />
        </section>
        <section>
          <h3 className="resume__heading">Internships</h3>
          <Experiences experiences={internships} />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;

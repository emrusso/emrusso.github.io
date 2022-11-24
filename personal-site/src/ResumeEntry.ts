export interface ResumeEntry {
  company: string;
  location: {
    city: string;
    state: string;
  };
  positions: Array<{
    title: string;
    startDate: string;
    endDate: string;
  }>
  bullets: string[];
  internship: boolean;
}

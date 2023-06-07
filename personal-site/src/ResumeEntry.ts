import { ReactNode } from "react";

export interface ResumeEntry {
  company: string;
  location: {
    city: string;
    state: string;
  };
  positions: Array<{
    title: ReactNode;
    startDate?: string;
    endDate?: string;
  }>
  bullets: ReactNode[];
  internship: boolean;
}

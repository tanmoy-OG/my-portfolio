import { ColumnDef } from "@tanstack/react-table"

export interface PageProps {
  params: {
    id: string
  }
}

export interface NavProps {
  path: string;
  linkName: string;
}

export interface HeroStats {
  count: number;
  line1: string;
  line2: string;
}

export interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Job {
  date: {
    from: {
      month: string;
      year: string;
    }
    to: {
      month: string | null;
      year: string | null;
    }
    current: boolean;
  };
  company: string;
  designation: string;
  location: {
    city: string;
    country: string;
  };
  work: string;
  tech: string[];
  portal: string;
}

export interface Proj {
  gallery: string[];
  date: {
    from: {
      month: string;
      year: string;
    }
    to: {
      month: string | null;
      year: string | null;
    }
  };
  title: string;
  team: string;
  hackathon: string;
  organization: {
    orgName: string;
    platform: string;
  };
  company: string;
  description: string;
  tech: string[];
  externalLink: string;
  gitHub: string;
  install: string;
}

export interface Achievement {
  year: string
  description: string
  event: string
  organization: string
  certificate: string
}

export interface Certificate {
  date: {
    month: string
    year: string
  }
  title: string
  provider: string
  platform: string
  skills: string[]
  link: string
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
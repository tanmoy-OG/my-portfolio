export interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavProps {
  path: string;
  linkName: string;
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
  org: {
    orgName: string;
    platform: string;
  };
  desc: string;
  tech: string[];
  externalLink: string;
  gitHub: string;
  installs: string;
}

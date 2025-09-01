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
    from: string;
    to: string | null;
  };
  company: string;
  designation: string;
  location: {
    city: string;
    country: string;
  };
  work: string;
  tech: string[];
}

export interface Proj {
  gallery: string[];
  date: {
    from: string;
    to: string | null;
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

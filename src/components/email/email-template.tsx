import * as React from 'react';

import { ContactEmailTemplateProps } from '@/types/api';

const EmailTemplate = ({ name, email, message }: ContactEmailTemplateProps) => {
  // Theme colors (from provided palette)
  const COLORS = {
    background: '#0D1117', // Rich Black
    foreground: '#DDE4EF', // Alice Blue
    foreground50OnBackground: '#757A83', // 50% blend of foreground on background
    card: '#111F43', // Oxford Blue (lighter)
    muted: '#122A39', // Gunmetal
    accent: '#5EEAD4', // Turquoise
    borderOnMutedFromForeground10: '#263D4B', // 10% foreground on muted
  };

  const container: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: COLORS.background,
    color: COLORS.foreground50OnBackground,
    fontFamily: 'Arial, Helvetica, sans-serif',
    lineHeight: '1.5',
    padding: '24px',
  };

  const h2Style: React.CSSProperties = {
    color: COLORS.foreground,
    borderBottom: `2px solid ${COLORS.accent}`,
    paddingBottom: '10px',
    margin: '0',
    fontSize: '20px',
    fontWeight: 700,
  };

  const section: React.CSSProperties = {
    margin: '20px 0',
  };

  const h3Style: React.CSSProperties = {
    color: COLORS.accent,
    margin: '0 0 8px 0',
    fontSize: '16px',
    fontWeight: 700,
  };

  const pStyle: React.CSSProperties = {
    margin: '4px 0',
    color: COLORS.foreground,
    fontSize: '15px',
  };

  const strongStyle: React.CSSProperties = {
    fontWeight: 700,
    color: COLORS.foreground,
  };

  const messageBox: React.CSSProperties = {
    backgroundColor: COLORS.muted,
    border: `1px solid ${COLORS.borderOnMutedFromForeground10}`,
    padding: '15px',
    borderRadius: '10px',
    color: COLORS.foreground,
    fontSize: '15px',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  };

  const footer: React.CSSProperties = {
    marginTop: '32px',
    fontSize: '14px',
    color: COLORS.foreground50OnBackground,
  };

  return (
    <div style={container}>
      <h2 style={h2Style}>Email from Direct Connect</h2>

      <div style={section}>
        <h3 style={h3Style}>Contact Details:</h3>
        <p style={pStyle}>
          <span style={strongStyle}>Name:</span> {name}
        </p>
        <p style={pStyle}>
          <span style={strongStyle}>Email:</span> {email}
        </p>
      </div>

      <div style={section}>
        <h3 style={h3Style}>Message:</h3>
        <div style={messageBox}>{message}</div>
      </div>

      <div style={footer}>
        <p>This email was sent from your website&apos;s contact form.</p>
        <p>
          Reply directly to this {email} to respond to {name}.
        </p>
      </div>
    </div>
  );
};

export default EmailTemplate;

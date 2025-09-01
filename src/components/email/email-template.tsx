import * as React from 'react';

interface ContactEmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const EmailTemplate = ({
    name,
    email,
    subject,
    message,
}: ContactEmailTemplateProps) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                New Contact Form Submission
            </h2>

            <div style={{ margin: '20px 0' }}>
                <h3 style={{ color: '#555' }}>Contact Details:</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Subject:</strong> {subject}</p>
            </div>

            <div style={{ margin: '20px 0' }}>
                <h3 style={{ color: '#555' }}>Message:</h3>
                <div style={{
                    backgroundColor: '#f9f9f9',
                    padding: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd'
                }}>
                    {message}
                </div>
            </div>

            <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
                <p>This email was sent from your website's contact form.</p>
                <p>Reply directly to this email to respond to {name}.</p>
            </div>
        </div>
    );
}

export default EmailTemplate
'use client';
import { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { LuCircleAlert } from 'react-icons/lu';
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from 'sonner';

import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ConnectMessage = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
            toast(
                <Alert variant='destructive'>
                    <LuCircleAlert />
                    <AlertTitle className='font-sans-desc'>
                        {'Error! All fields are required!'}
                    </AlertTitle>
                </Alert>
            );
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/connect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            if (response.ok) {
                toast(
                    <Alert>
                        <FaRegCheckCircle />
                        <AlertTitle className='font-sans-desc'>
                            {'Success! Email sent.'}
                        </AlertTitle>
                    </Alert>
                );
                setInputs({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error("🚀 ~ handleSubmit ~ error:", error)
            toast(
                <Alert variant='destructive'>
                    <LuCircleAlert />
                    <AlertTitle className='font-sans-desc'>
                        {'There was an error sending message!'}
                    </AlertTitle>
                </Alert>
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-2/3 flex flex-col gap-4 font-sans-desc'>
            <div className='flex gap-4'>
                <Input
                    type='text'
                    placeholder='Name'
                    value={inputs.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputs({ ...inputs, name: e.target.value })
                    }
                    className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc'
                />
                <Input
                    type='email'
                    placeholder='Email'
                    value={inputs.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputs({ ...inputs, email: e.target.value })
                    }
                    className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc'
                />
            </div>
            <Input
                type='text'
                placeholder='Subject'
                value={inputs.subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputs({ ...inputs, subject: e.target.value })
                }
                className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc'
            />
            <Textarea
                placeholder='Message'
                value={inputs.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInputs({ ...inputs, message: e.target.value })
                }
                className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc resize-none h-40'
            />
            <Button
                type='submit'
                onClick={handleSubmit}
                className={`bg-muted border border-foreground/10 shadow-secondary w-1/3 px-8 text-accent self-end hover:cursor-pointer hover:bg-muted hover:shadow-accent hover:shadow-md/50 hover:border-foreground/20 hover:-translate-y-1 active:shadow-xs/50 active:border-accent/50 active:translate-0 transition-all`}
                disabled={isSubmitting}
            >
                {isSubmitting ? <span className='flex gap-2 items-center'><BiLoaderAlt className='animate-spin' /> {'Sending Message'}</span> : 'Send Message'}
            </Button>
        </div>
    );
}

export default ConnectMessage;
'use client';
import { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { LuCircleAlert } from 'react-icons/lu';
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
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData?.error ?? response.statusText ?? 'Failed to send message';
        throw new Error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'There was an error sending message!';
      if (process.env['NEXT_PUBLIC_PROD']) {
        console.error('🚀 ~ handleSubmit ~ error:', errorMessage);
      }
      toast(
        <Alert variant='destructive'>
          <LuCircleAlert />
          <AlertTitle className='font-sans-desc'>
            {errorMessage}
          </AlertTitle>
        </Alert>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full lg:w-2/3 flex flex-col gap-4 md:gap-5 lg:gap-4 font-sans-desc'>
      <div className='flex flex-col gap-3 md:gap-4'>
        <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
          <Input
            type='text'
            placeholder='Name'
            value={inputs.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, name: e.target.value })
            }
            className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc z-20 text-sm md:text-base'
          />
          <Input
            type='email'
            placeholder='Email'
            value={inputs.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, email: e.target.value })
            }
            className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc z-20 text-sm md:text-base'
          />
        </div>
        <Input
          type='text'
          placeholder='Subject'
          value={inputs.subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, subject: e.target.value })
          }
          className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc z-20 text-sm md:text-base'
        />
        <Textarea
          placeholder='Message'
          value={inputs.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInputs({ ...inputs, message: e.target.value })
          }
          className='bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc resize-none h-32 md:h-36 lg:h-40 z-20 text-sm md:text-base'
        />
      </div>
      <Button
        type='submit'
        onClick={handleSubmit}
        className={`bg-muted border border-foreground/10 shadow-secondary w-fit sm:w-1/2 lg:w-1/3 px-6 md:px-8 text-accent self-end hover:cursor-pointer hover:bg-muted hover:shadow-accent hover:shadow-md/50 hover:border-foreground/20 hover:-translate-y-1 active:shadow-xs/50 active:border-accent/50 active:translate-0 transition-all z-20 text-sm md:text-base py-2 md:py-3 mx-auto sm:mx-0`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className='flex gap-2 items-center'>
            <BiLoaderAlt className='animate-spin' /> {'Sending...'}
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </div>
  );
};

export default ConnectMessage;

"use client"
// import { ResendApi } from "@/app/api/resend"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Alert,
    AlertTitle,
} from "@/components/ui/alert"
import { toast } from "sonner"
import { FaRegCheckCircle, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuCircleAlert, LuPhone, LuMapPin } from "react-icons/lu";
import { useState } from 'react';
import Link from 'next/link';

const Connect = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    // const { isLoading, sendMail } = ResendApi()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const para1 = `I am open to freelance opportunities- especially small projects. How ever I am all ears for other requests as well.`;
    const para2 = `Feel free to send me a message via the form below. Or use the contact links listed beside.`;
    const handleSubmit = async () => {
        if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
            toast(
                <Alert variant="destructive">
                    <LuCircleAlert />
                    <AlertTitle className='font-sans-desc'>
                        {'Error! All fields are required!'}
                    </AlertTitle>
                </Alert>
            )
            return
        }
        setIsSubmitting(true)
        const formData = new FormData()
        formData.append('name', inputs.name)
        formData.append('email', inputs.email)
        formData.append('subject', inputs.subject)
        formData.append('message', inputs.message)
        try {
            const response = await fetch('/api/connect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast(
                    <Alert>
                        <FaRegCheckCircle />
                        <AlertTitle className='font-sans-desc'>
                            {'Success! Email sent.'}
                        </AlertTitle>
                    </Alert>
                )
                setInputs(
                    {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                )
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast(
                <Alert variant="destructive">
                    <LuCircleAlert />
                    <AlertTitle className='font-sans-desc'>
                        {'There was an error sending message!'}
                    </AlertTitle>
                </Alert>
            )
        } finally {
            setIsSubmitting(false);
        }
    }
    // const response = await sendMail(inputs)
    // if (response) {
    //     toast(
    //         <Alert>
    //             <FaRegCheckCircle />
    //             <AlertTitle className='font-sans-desc'>
    //                 {'Success! Email sent.'}
    //             </AlertTitle>
    //         </Alert>
    //     )
    //     setInputs(
    //         {
    //             name: '',
    //             email: '',
    //             subject: '',
    //             message: ''
    //         }
    //     )
    // } else {
    //     toast(
    //         <Alert variant="destructive">
    //             <LuCircleAlert />
    //             <AlertTitle className='font-sans-desc'>
    //                 {'Error! Sending email failed!'}
    //             </AlertTitle>
    //         </Alert>
    //     )
    // }
    // }

    return (
        <div className="px-16 flex flex-col justify-between gap-8">
            <div className="w-1/2">
                <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<h1>'}</h1>
                <h1 className='text-5xl text-accent'>{'Let\'s Talk'}</h1>
                <h1 className='ml-48 -mt-6 opacity-20 font-cursive text-lg'>{'</h1>'}</h1>
                <div className="">
                    <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<p>'}</h1>
                    <div className='flex flex-col gap-4 font-sans-desc opacity-50'>
                        <p className=''>{para1}</p>
                        <p className=''>{para2}</p>
                    </div>
                    <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'</p>'}</h1>
                </div>
            </div>
            <div className="flex flex-col gap-4 font-sans-desc">
                <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'<form>'}</h1>
                <div className="flex justify-between gap-14">
                    <div className="w-2/3 flex flex-col gap-4 font-sans-desc">
                        <div className="flex gap-4">
                            <Input type="text" placeholder="Name" value={inputs.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, name: e.target.value })
                            } className="bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc" />
                            <Input type="email" placeholder="Email" value={inputs.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, email: e.target.value })
                            } className="bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc" />
                        </div>
                        <Input type="text" placeholder="Subject" value={inputs.subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, subject: e.target.value })
                        } className="bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc" />
                        <Textarea placeholder="Message" value={inputs.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputs({ ...inputs, message: e.target.value })
                        } className="bg-background border-none placeholder:text-foreground/50 placeholder:font-sans-desc resize-none h-40" />
                        <Button type="submit" onClick={handleSubmit} className="bg-muted border border-foreground/10 shadow-secondary w-fit px-8 text-accent self-end hover:cursor-pointer hover:bg-muted hover:shadow-accent hover:shadow-md/50 hover:border-foreground/20 hover:-translate-y-1 active:shadow-xs/50 active:border-accent/50 active:translate-0 transition-all">Send Message</Button>
                    </div>
                    <div className="w-1/3 flex flex-col gap-4">
                        <Link href='mailto:connect@tanmoy-og.dev' className='flex gap-4 items-center'>
                            <MdOutlineEmail className='size-5' />
                            <div className="w-fit group">
                                <h1>{'connect@tanmoy-og.dev'}</h1>
                                <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                            </div>
                        </Link>
                        <Link href='tel:+91 82401 06882' className='flex gap-4 items-center'>
                            <LuPhone className='size-5' />
                            <div className="w-fit group">
                                <h1>{'+91 82401 06882'}</h1>
                                <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                            </div>
                        </Link>
                        <Link href='https://wa.me/918240106882' className='flex gap-4 items-center'>
                            <FaWhatsapp className='size-5' />
                            <div className="w-fit group">
                                <h1>{'Whatsapp Me'}</h1>
                                <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                            </div>
                        </Link>
                        <Link href='https://maps.app.goo.gl/o2tqHirK8JoKfx4U9' className='flex gap-4 items-center'>
                            <LuMapPin className='size-5' />
                            <div className="w-fit group">
                                <h1>{'Kolkata, WB, India'}</h1>
                                <div className='h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-all z-10'></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <h1 className='-ml-8 opacity-20 font-cursive text-lg'>{'</form>'}</h1>
            </div>
        </div>
    )
}

export default Connect;
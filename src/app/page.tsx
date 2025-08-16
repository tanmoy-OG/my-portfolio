import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <main className='min-h-screen bg-background p-8'>
      <div className='container mx-auto max-w-4xl'>
        <div className='mb-8 text-center'>
          <h1 className='mb-4 text-4xl font-bold tracking-tight text-foreground'>
            Welcome to My Portfolio
          </h1>
          <p className='text-lg text-muted-foreground'>
            Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui Components</CardTitle>
              <CardDescription>
                Beautiful and accessible components built with Radix UI and
                Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='Enter your email' type='email' />
              </div>
              <Button className='w-full'>Subscribe</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript + ESLint</CardTitle>
              <CardDescription>
                Strict TypeScript configuration with comprehensive ESLint rules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                This project is configured with:
              </p>
              <ul className='mt-2 list-inside list-disc text-sm text-muted-foreground'>
                <li>Strict TypeScript settings</li>
                <li>Comprehensive ESLint rules</li>
                <li>Prettier formatting</li>
                <li>Import sorting and organization</li>
                <li>React best practices</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className='mt-8 text-center'>
          <Button variant='outline' size='lg'>
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}

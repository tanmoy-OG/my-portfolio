import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-4 md:px-14 lg:px-16 pb-8 lg:pb-0 flex flex-col gap-1 relative z-10 md:items-end">
            <h1 className="font-sans-desc text-sm">
                <span className="opacity-50 font-light tracking-wide">Loosely designed in </span>
                <Link href="https://figma.com" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Figma</Link>
                <span className="opacity-50 font-light tracking-wide"> and coded in </span>
                <Link href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Cursor AI</Link>
                <span className="opacity-50 font-light tracking-wide"> by </span>
                <Link href="https://github.com/tanmoy-OG" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">&copy;Tanmoy_OG</Link>
                <span className="opacity-50 font-light tracking-wide">.</span>
            </h1>
            <h1 className="font-sans-desc text-sm">
                <span className="opacity-50 font-light tracking-wide">Built with </span>
                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Next.js</Link>
                <span className="opacity-50 font-light tracking-wide">, </span>
                <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Tailwind CSS</Link>
                <span className="opacity-50 font-light tracking-wide"> and </span>
                <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Shadcn/ui</Link>
                <span className="opacity-50"> library.</span>
            </h1>
            <h1 className="font-sans-desc text-sm">
                <span className="opacity-50 font-light tracking-wide">Deployed with </span>
                <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Vercel</Link>
                <span className="opacity-50 font-light tracking-wide">, source code on </span>
                <Link href="https://github.com/tanmoy-OG/my-portfolio" target="_blank" rel="noopener noreferrer" className="relative z-20 font-medium tracking-wide inline-block opacity-70 hover:opacity-100 hover:text-accent cursor-pointer transition-all">Github</Link>
                <span className="opacity-50 font-light tracking-wide">.</span>
            </h1>
        </div>
    );
}

export default Footer;
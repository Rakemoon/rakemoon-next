import Link from 'next/link';
import type { SVGProps } from 'react';

function RadixIconsGithubLogo(props: SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 15 15" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A7 7 0 0 1 7.5 3.756A7 7 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25" clipRule="evenodd"></path></svg>;
}


function RadixIconsLinkedinLogo(props: SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 15 15" {...props}><path fill="currentColor" fillRule="evenodd" d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm1.05 5h1.9v6h-1.9zm2.025-1.995a1.075 1.075 0 1 1-2.15 0a1.075 1.075 0 0 1 2.15 0M12 8.357c0-1.805-1.167-2.507-2.326-2.507a2.2 2.2 0 0 0-1.095.231c-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001c.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906z" clipRule="evenodd"></path></svg>;
}

export function AkarIconsFacebookFill(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24" {...props}><g fill="none"><g clipPath="url(#akarIconsFacebookFill0)"><path fill="currentColor" fillRule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clipRule="evenodd"></path></g><defs><clipPath id="akarIconsFacebookFill0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg>);
}

const links = [
  {
    name: "Github",
    href: "https://github.com/Rakemoon",
    icon: <RadixIconsGithubLogo className="hover:text-stone-400" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adzikri-fauzi-shiddiq",
    icon: <RadixIconsLinkedinLogo className="hover:text-blue-500" />
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/adzikri.fauzi.7",
    icon: <AkarIconsFacebookFill className="hover:text-blue-600" />
  }
]

export default function ContactLinks() {
  return <div className="flex flex-col gap-2.5 h-full">
    {links.map(x => {
      return <Link
        key={x.name}
        target="_blank"
        href={x.href}
        className="group"
        aria-label={x.name}
      >{x.icon}</Link>
    })}
  </div>
}

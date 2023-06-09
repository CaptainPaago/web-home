import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Dele Paago',
    aria: 'My name is Dele Paago',
  },
  title: {
    display: 'Software Engineer. Writer. Politician',
    aria: 'I am a software engineer',
  },
  
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/captainpaago/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/dbpaago/',
    },
    {
      display: 'Substack',
      aria: 'Read my thoughts',
      icon: <Resume />,
      href: 'https://dibby.substack.com/',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:delebliss42@gmail.com',
    },
  ],
};

export default config;

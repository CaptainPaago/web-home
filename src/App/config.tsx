import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Dele Paago',
    aria: 'My name is Dele Paago',
  },
  title: {
    display: 'Software Engineer',
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
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders/10k8NWflSYQ5laPzuWtK3bzUKzuOeas8i/',
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

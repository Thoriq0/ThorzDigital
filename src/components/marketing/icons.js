function IconBase({ className, children, fill = "none", stroke = "currentColor", ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" />
    </IconBase>
  );
}

export function CloseIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" />
    </IconBase>
  );
}

export function ArrowRightIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.8">
      <path
        d="M5 12h14m-5-5l5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function GlobeIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function CloudIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M7.5 18h8.7a4.3 4.3 0 000-8.6 5.7 5.7 0 00-11-1.4A4.1 4.1 0 007.5 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function SparkIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3zm6 14l.9 2.1L21 20l-2.1.9L18 23l-.9-2.1L15 20l2.1-.9L18 17zM5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function StarIcon({ className }) {
  return (
    <IconBase className={className} fill="currentColor" stroke="currentColor">
      <path d="M12 3.4l2.65 5.38 5.94.87-4.29 4.18 1.02 5.91L12 16.98 6.68 19.74l1.02-5.91L3.4 9.65l5.94-.87L12 3.4z" />
    </IconBase>
  );
}

export function CheckCircleIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.8">
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.3l2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function MessageIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M7 18l-3 2V6.8A2.8 2.8 0 016.8 4h10.4A2.8 2.8 0 0120 6.8v6.4a2.8 2.8 0 01-2.8 2.8H9.5L7 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function MailIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M5 6.5h14A1.5 1.5 0 0120.5 8v8A1.5 1.5 0 0119 17.5H5A1.5 1.5 0 013.5 16V8A1.5 1.5 0 015 6.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8l8 5 8-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function GlobeAltIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.5h8M12 7.5v8.8M7.3 6.7c2.7 1.6 6.7 1.6 9.4 0M7.3 17.3c2.7-1.6 6.7-1.6 9.4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function LinkedinIcon({ className }) {
  return (
    <IconBase className={className} fill="currentColor" stroke="none">
      <path d="M6.94 8.44A1.44 1.44 0 115.5 7a1.44 1.44 0 011.44 1.44zM7 10h-3v9h3zm4.5 0h-2.88v9h3V14.3c0-2.5 3.26-2.7 3.26 0V19H18v-5.68c0-4.43-4.96-4.27-6.5-2.09V10z" />
    </IconBase>
  );
}

export function ClockIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.5v5l3.1 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function ShieldIcon({ className }) {
  return (
    <IconBase className={className} strokeWidth="1.7">
      <path
        d="M12 3l6 2.4v5.3c0 4.2-2.6 8-6 9.8-3.4-1.8-6-5.6-6-9.8V5.4L12 3z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.8l1.7 1.7 3.5-3.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

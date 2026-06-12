const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export default function Icon({ name, size = 20 }) {
  const props = base(size);
  switch (name) {
    case 'home':
      return (
        <svg {...props}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v10h14V10" />
        </svg>
      );
    case 'about':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
        </svg>
      );
    case 'orgs':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case 'docs':
      return (
        <svg {...props}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case 'contact':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      );
    case 'users':
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3.4" />
          <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
          <path d="M16 5.2A3.4 3.4 0 0 1 16 11" />
          <path d="M18 15c2.4.4 3.5 2 3.5 4.5" />
        </svg>
      );
    case 'bag':
      return (
        <svg {...props}>
          <path d="M5 8h14l-1 12H6z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'download':
      return (
        <svg {...props}>
          <path d="M12 3v12" />
          <path d="M7 11l5 5 5-5" />
          <path d="M5 20h14" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...props}>
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'mega':
      return (
        <svg {...props}>
          <path d="M4 10v4h4l6 4V6L8 10z" />
          <path d="M18 9a4 4 0 0 1 0 6" />
        </svg>
      );
    case 'survey':
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 3v2h6V3" />
          <path d="M8 11l1.5 1.5L12 10" />
          <path d="M8 16l1.5 1.5L12 15" />
          <path d="M14 11.5h2" />
          <path d="M14 16.5h2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17 7h.01" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...props}>
          <path d="M14 9V7c0-1 .5-2 2-2h2V2h-3c-2.5 0-4 1.7-4 4v3H8v3h3v8h3v-8h3l1-3z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...props}>
          <path d="M15 4c.5 2.5 2 4 4.5 4.2v3C17.5 11 16 10.3 15 9.4V15a5.5 5.5 0 1 1-5.5-5.5c.4 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 1.5 2.3V4z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

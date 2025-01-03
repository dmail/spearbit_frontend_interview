export default function ArrowIconSvg({ opened }: { opened: boolean }) {
  if (opened) {
    return <ArrowOpened />;
  }
  return <ArrowClosed />;
}

const ArrowClosed = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor">
    <path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path>
  </svg>
);

const ArrowOpened = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor">
    <path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path>
  </svg>
);

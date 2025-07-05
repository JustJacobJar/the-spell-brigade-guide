export function LoadingSpinner() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex stroke-white/50 place-content-center place-items-center bg-black/20">
      <svg
        className="stroke-border size-24 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
    </div>
  );
}

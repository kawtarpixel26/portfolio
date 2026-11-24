// Wraps a group of sections with a looping video background.
// The video stays pinned to the screen while those sections scroll over it,
// and fades into the page at the top and bottom of the group.
const VideoBackdrop = ({ src, children }) => (
  <div className="relative isolate">
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-40"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        {/* Scrim keeps text and cards readable */}
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
    {children}
  </div>
);

export default VideoBackdrop;

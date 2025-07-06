export default async function Home() {
  return (
    <>
    <div className="prose flex w-5xl flex-col h-full p-2">
      <h1>Welcome to the spell brigade guide</h1>
      <h2>Get Started</h2>
      <p>
        Use the sidebar to pick which page to view (Create Guide is for admins
        only)
      </p>
      <p>This is a work in progress guide with more features on the way!</p>
      <h2>Currently Planned</h2>
      <ul>
        <li>Build Creator</li>
        <li>In depth meta report guide</li>
        <li>More guides for all kinds of players</li>
        <li>Making it look ✨pretty✨</li>
        <li>Lots more...</li>
      </ul>
    </div>
    </>
  );
}

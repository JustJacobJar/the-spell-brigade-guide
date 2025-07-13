"use client";

export default function Error() {
  return (
    <div className="h-full w-full place-content-center place-items-center">
      <h1>There was an error!</h1>
      <p>This was most likely due to the database server booting up</p>
      <p>Please try again after a few seconds.</p>
    </div>
  );
}

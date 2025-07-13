import SignInClient from "@/components/SignInClient";
import SignOutClient from "@/components/SignOutClient";
import Link from "next/link";
import { Suspense } from "react";

export default async function SignInPage(props: {
  searchParams: Promise<{ callbackUrl: string | undefined }>;
}) {
  const callbackUrl = await props.searchParams;

  return (
    <div className="grid h-full w-full grid-rows-[20px_.5fr_1fr_20px] flex-col place-items-center pt-16 pb-20">
      <div className="row-start-2 flex flex-col place-items-center gap-16 text-center">
        <h1 className="place-self-center text-center text-5xl font-black">
          Spell Brig Guide
        </h1>
        {/* Logo */}
        <div className="stroke-foreground size-64">Logo Area</div>
      </div>
      {/* Buttons */}
      <div className="row-start-3 my-16 flex flex-col place-items-center gap-6 self-start">
        <h4 className="text-lg">Sign in using</h4>
        <SignInClient />

        {/* <Suspense fallback={<p>Loading...</p>}>
          {Object.values(providerMap).map((provider) => (
            <form
              className="w-fit"
              key={provider.id}
              action={async () => {
                "use server";
                await SignInToProvider(provider.id, callbackUrl.callbackUrl);
              }}
            >
              <SigninButton provider={provider} />
            </form>
          ))}
        </Suspense> */}
        <Link
          className="bg-card text-card-foreground min-w-full rounded-md border-2 p-2 px-4 text-center text-xl font-bold transition-all duration-150 hover:inset-ring-1 hover:brightness-75 disabled:brightness-50"
          href={"/dashboard"}
        >
          Go Back
        </Link>
      </div>
      <div className="flex flex-row justify-center gap-8"></div>
      <SignOutClient />
    </div>
  );
}

function SigninButton({
  provider,
}: {
  provider: { id: string; name: string };
}) {
  const icon = () => {
    switch (provider.id) {
      case "github": {
        return (
          <svg
            className="fill-foreground size-full"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 640 640"
          >
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
          </svg>
        );
      }
      case "google": {
        return (
          <svg
            className="size-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs>
              <radialGradient
                id="prefix__b"
                cx="1.479"
                cy="12.788"
                fx="1.479"
                fy="12.788"
                r="9.655"
                gradientTransform="matrix(.8032 0 0 1.0842 2.459 -.293)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".368" stopColor="#ffcf09" />
                <stop offset=".718" stopColor="#ffcf09" stopOpacity=".7" />
                <stop offset="1" stopColor="#ffcf09" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="prefix__c"
                cx="14.295"
                cy="23.291"
                fx="14.295"
                fy="23.291"
                r="11.878"
                gradientTransform="matrix(1.3272 0 0 1.0073 -3.434 -.672)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".383" stopColor="#34a853" />
                <stop offset=".706" stopColor="#34a853" stopOpacity=".7" />
                <stop offset="1" stopColor="#34a853" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="prefix__d"
                x1="23.558"
                y1="6.286"
                x2="12.148"
                y2="20.299"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".671" stopColor="#4285f4" />
                <stop offset=".885" stopColor="#4285f4" stopOpacity="0" />
              </linearGradient>
              <clipPath id="prefix__a">
                <path
                  d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                  fill="none"
                />
              </clipPath>
            </defs>
            <path
              d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
              fill="#fc4c53"
            />
            <g clipPath="url(#prefix__a)">
              <ellipse
                cx="3.646"
                cy="13.572"
                rx="7.755"
                ry="10.469"
                fill="url(#prefix__b)"
              />
              <ellipse
                cx="15.538"
                cy="22.789"
                rx="15.765"
                ry="11.965"
                transform="rotate(-7.12 15.539 22.789)"
                fill="url(#prefix__c)"
              />
              <path
                fill="url(#prefix__d)"
                d="M11.105 8.28l.491 5.596.623 3.747 7.362 6.848 8.607-15.897-17.083-.294z"
              />
            </g>
          </svg>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <button
      className="bg-card text-card-foreground flex min-w-fit flex-row place-items-center gap-4 border-2"
      type="submit"
    >
      <div className="aspect-square w-12">{icon()}</div>
      <span>Sign in with {provider.name}</span>
    </button>
  );
}

import { UserButton } from "@clerk/nextjs";
import GenerateSoundView from "./views/GenerateSoundView";

/**
 * The main entry point component for the application.
 * It renders the GenerateSoundView component.
 */

export default function Home({ className }: UserProps) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Render the GenerateSoundView component */}
      <div className="flex justify-end items-center p-4  size-15">
        <UserButton afterSignOutUrl="/" />
      </div>
      <GenerateSoundView />
    </main>
  );
}

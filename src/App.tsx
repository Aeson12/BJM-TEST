import Group21 from "./imports/Group21";
import Group12 from "./imports/Group12";

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto w-full max-w-[393px]">
          <div className="h-[121px] w-full">
            <Group21 />
          </div>
        </div>
      </header>

      {/* Scrollable Content Area - overlaps with header so content scrolls underneath */}
      <main className="flex-1 overflow-y-auto pt-[121px] pb-[94px]">
        <div className="mx-auto w-full max-w-[393px] px-6 py-6">
          <div className="space-y-4">
            <h2 className="text-[#2a9454]">Scrollable Content Area</h2>
            <p className="text-gray-700">
              This is the main content area where your scrollable content will go.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-gray-700">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-700">
              Add more content here to test scrolling...
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-gray-700">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-[393px]">
          <div className="h-[94px] w-full">
            <Group12 />
          </div>
        </div>
      </nav>
    </div>
  );
}

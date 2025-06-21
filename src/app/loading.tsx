import { Spinner } from "@/components/utils/Spinner";

export default function Loading() {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-black/80 z-40 flex items-center justify-center">
        <div className="text-center">
          <Spinner />
          <p className="mt-4 text-sm text-gray-500">Loading content...</p>
        </div>
      </div>
    );
  }
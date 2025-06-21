// src/app/[locale]/loading.tsx
import { Spinner } from "@/components/utils/Spinner";

export default function LocaleLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen z-50">
      <div className="text-center">
        <Spinner />
        <p className="mt-4 text-gray-500">Loading page...</p>
      </div>
    </div>
  );
}
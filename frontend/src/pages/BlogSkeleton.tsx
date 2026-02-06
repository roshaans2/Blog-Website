const BlogCardSkeleton = () => {
    return (
        <div
            role="status"
            className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md animate-pulse"
        >
            <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-3 w-24 ml-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-1 w-1 mx-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-3 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-5 w-3/4 mt-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-3 w-full mt-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-3 w-5/6 mt-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-3 w-32 mt-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export const BlogDetailSkeleton = () => {
  return (
    <div className="flex justify-center animate-pulse">
      <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-xl gap-8 w-full">
        <div className="col-span-8">
          <div className="h-10 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>

          <div className="h-4 w-40 mt-3 rounded bg-gray-200 dark:bg-gray-700"></div>

          <div className="pt-6 space-y-3">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-11/12 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-10/12 rounded bg-gray-200 dark:bg-gray-700"></div>

            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-11/12 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-9/12 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="h-5 w-24 mb-4 rounded bg-gray-200 dark:bg-gray-700"></div>

          <div className="flex">
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>

            <div className="ml-4 flex-1">
              <div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-700"></div>

              <div className="mt-3 space-y-2">
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};


export const BlogSkeleton = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="flex justify-center">
      <div>
        {Array.from({ length: count }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
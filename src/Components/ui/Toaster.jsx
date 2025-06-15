import { Toaster } from "sonner";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      theme="dark"
      toastOptions={{
        classNames: {
          toast: `
            bg-secondary border border-white text-white 
            shadow-md rounded-lg 
            flex flex-col items-center justify-center text-center
            px-6 py-4
          `,
          title: "text-white font-semibold",
          description: "text-white/80",
        },
      }}
    />
  );
};

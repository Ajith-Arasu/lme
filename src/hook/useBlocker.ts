import { useEffect } from "react";
import { useBlocker } from "react-router";

export const useNavigationBlocker = (shouldBlock: boolean) => {
  const blocker = useBlocker(shouldBlock);

  useEffect(() => {
    if (!shouldBlock) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "You are in the middle of reviewing.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [shouldBlock]);

  useEffect(() => {
    if (blocker.state === "blocked") {
      const confirmLeave = window.confirm(
        "You are in the middle of reviewing. Are you sure you want to leave?"
      );

      if (confirmLeave) blocker.proceed();
      else blocker.reset();
    }
  }, [blocker]);
};

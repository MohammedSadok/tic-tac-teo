import { cn } from "../lib/utils";
import { ModeToggle } from "./ModeToggle";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 justify-between w-screen",
        className
      )}
      {...props}
    >
      <a
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </a>

      <div className="self-end">
        <ModeToggle />
      </div>
    </nav>
  );
}

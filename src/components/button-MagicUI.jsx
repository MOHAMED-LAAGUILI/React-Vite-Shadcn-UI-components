import { Button } from "./ui/button";
import { CoolMode } from "./ui/cool-mode";

export function CoolModeButtonDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}

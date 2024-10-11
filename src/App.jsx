import Nav from "./components/Nav";
import SheetDemo from "./components/SheetDemo";
import TableDemo from "./components/Table";
import { PopoverDemo } from "./components/Popover";
import { HoverCardDemo } from "./components/HoverCard";
import { FormCardDemo } from "./components/FormCard";
import { TabsDemo } from "./components/Tabs";
import { AlertDialogDemo } from "./components/Alert";
import { CalendarDemo } from "./components/Calendar";
import { ToggleGroupDemo } from "./components/Togglebtns";
import { GlobeDemo } from './components/Globe-MagicUI';
import { AnimatedListDemo } from "./components/Animated-List-MagicUI";
import { MarqueeDemo } from "./components/Marquee-MagicUI";
import { ThemeProvider } from "./components/ThemeToggle/ThemProvider"
import { ModeToggle } from "./components/ThemeToggle/ModeToggle";
import { CoolModeButtonDemo } from "./components/button-MagicUI";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">✨✅ ShadcnUI Components</h1>

      {/* Nav Bar */}
      <p className="font-bold text-center mb-2">0 - Nav Bar</p>
      <Nav />
      <ModeToggle />
      <hr className="mb-4" />

      {/* Table Component */}
      <p className="font-bold text-center mb-2">1 - Table Component</p>
      <TableDemo />
      <hr className="mb-4" />

      {/* Side Off Canvas Input */}
      <p className="font-bold text-center mb-2">2 - Side Off Canvas Input</p>
      <SheetDemo />
      <hr className="mb-4" />

      {/* Popover */}
      <p className="font-bold text-center mb-2">3 - Popover</p>
      <PopoverDemo />
      <hr className="mb-4" />

      {/* HoverCard */}
      <p className="font-bold text-center mb-2">4 - HoverCard</p>
      <HoverCardDemo />
      <hr className="mb-4" />

      {/* InputForm */}
      <p className="font-bold text-center mb-2">5 - InputForm</p>
      <FormCardDemo />
      <hr className="mb-4" />

      {/* Tabs */}
      <p className="font-bold text-center mb-2">6 - Tabs</p>
      <TabsDemo />
      <hr className="mb-4" />

      {/* Alert Dialog */}
      <p className="font-bold text-center mb-2">7 - Alert Dialog</p>
      <AlertDialogDemo />
      <hr className="mb-4" />

      {/* Calendar */}
      <p className="font-bold text-center mb-2">8 - Calendar</p>
      <CalendarDemo />
      <hr className="mb-4" />

      {/* Toggle Buttons */}
      <p className="font-bold text-center mb-2">9 - Toggle Buttons</p>
      <ToggleGroupDemo />
      <hr className="mb-4" />

      <h1 className="text-3xl font-bold text-center mb-4">✨✅ Magic UI Components</h1>

      {/* Button DEMO */}
      <p className="font-bold text-center mb-2 flex justify-center">1 - Button Cool DEMO</p>
      <CoolModeButtonDemo />
      <hr className="mb-4" />

          {/* Globe DEMO */}
          <p className="font-bold text-center mb-2">2 - Globe DEMO</p>
      <GlobeDemo />
      <hr className="mb-4" />

      {/* LISTE DEMO ANIMATED */}
      <p className="font-bold text-center mb-2">3 - LISTE DEMO ANIMATED</p>
      <AnimatedListDemo />
      <hr className="mb-4" />

       {/* MARQUEE DEMO */}
       <p className="font-bold text-center mb-2">4 -  MARQUEE DEMO </p>
      <MarqueeDemo />
      <hr className="mb-4" />

    
    </div>
  </ThemeProvider>
  );
}



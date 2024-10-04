import Nav from "./components/nav";
import SheetDemo from "./components/SheetDemo";
import TableDemo from "./components/Table";
import { PopoverDemo } from "./components/Popover";
import { HoverCardDemo } from "./components/HoverCard";
import { FormCardDemo } from "./components/FormCard";
import { TabsDemo } from "./components/Tabs";
import { AlertDialogDemo } from "./components/Alert";
import { CalendarDemo } from "./components/Calendar";
import { ToggleGroupDemo } from "./components/Togglebtns";

export default function App() {
  return (
    <div className="text-center items-center self-center">
      <p className="font-bold text-center">0 - Nav Bar</p>
      <Nav />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">1 - Table Component</p>
      <TableDemo />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">2 - Side Off Canvas Input</p>
      <SheetDemo />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">3 - Popover</p>
      <PopoverDemo />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">4 - HoverCard</p>
      <HoverCardDemo />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">5 - InputForm</p>
      <FormCardDemo />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">6 - Tabs</p>
      <TabsDemo />
      <br /> <hr />
      <br />
      <p className="font-bold text-center">7 - Alert Dialog</p>
      <AlertDialogDemo />
      <br /> <hr />
      <br />

      <p className="font-bold text-center">8 - Calendar</p>
      <CalendarDemo />
      <br /> <hr />
      <br />

      <p className="font-bold text-center">9 - Toogle Buttons</p>
      <ToggleGroupDemo />
      <br /> <hr />
      <br />
    </div>
  );
}

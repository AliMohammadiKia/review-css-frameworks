import { Button } from "@/components/ui/button";
import Cards from "./components/cards";
import { useTheme } from "next-themes";

const App = () => {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="container max-w-6xl px-4 py-4 mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-lg">App component</p>
        <Button className="mt-2" onClick={handleMode}>
          Toggle Mode
        </Button>
      </div>
      <Cards />
    </div>
  );
};

export default App;

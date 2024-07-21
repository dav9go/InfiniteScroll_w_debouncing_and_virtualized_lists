//Components
import FullList from "./components/FullList";
import InfiniteScroll from "./components/InfiniteScroll";
import InfiniteDebounced from "./components/InfiniteDebounced";
import InfiniteVirtualized from "./components/InfiniteVirtualized";
import InfiniteVirtualizedAndDebounced from "./components/InfiniteVirtualizedAndDebounced";
import HeaderButton from "./components/customItems/HeaderButton";
//Hooks
import { useState, createElement } from "react";

function App() {
  const [approach, setApproach] = useState(0);

  const COMPONENTS = [
    { component: FullList, text: "Full List" },
    { component: InfiniteScroll, text: "Infinite Scroll" },
    { component: InfiniteDebounced, text: "Infinite Debounced" },
    { component: InfiniteVirtualized, text: "Infinite Virtualized" },
    {
      component: InfiniteVirtualizedAndDebounced,
      text: "Infinite Virtualized & Debounced",
    },
  ];

  return (
    <>
      <header>
        {COMPONENTS.map((item, index) => (
          <HeaderButton
            key={item.id}
            text={item.text}
            setter={() => setApproach(index)}
            selected={approach === index}
          />
        ))}
      </header>
      <div className="layout">
        {createElement(COMPONENTS[approach].component)}
      </div>
    </>
  );
}

export default App;

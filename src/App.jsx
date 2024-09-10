//Components
import BodyInformation from "./components/BodyInformation";
import BodyStats from "./components/BodyStats";
import InfoBlocks from "./components/InfoBlocks";
import VirtualizedList from "./components/VirtualizedList";

function App() {
  return (
    <main>
      <aside>
        <div>hola</div>
      </aside>
      <div className="not-aside-content">
        <header>
          <h1>
            Virtualized List <span>Dashboard Playground</span>
          </h1>
        </header>
        <section className="main-section">
          <BodyInformation />
          <BodyStats />
          <InfoBlocks />
          <VirtualizedList />
        </section>
      </div>
    </main>
  );
}

export default App;

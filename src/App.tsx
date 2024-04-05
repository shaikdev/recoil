import { Suspense, useEffect } from "react";
import "./App.scss";
import Test from "./screens/test/test.screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import ToDoScreen from "screens/todo/todo.screen";
import ListScreen from "screens/lists/list.screen";

function App() {
  function DebugObserver(): React.Node {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
      console.debug('The following atoms were modified:');
      for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
        console.debug(node.key, snapshot.getLoadable(node));
      }
    }, [snapshot]);
  
    return null;
  }
  return (
    <RecoilRoot>
       <DebugObserver/>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<ToDoScreen />}></Route>
          </Routes>
          <Routes>
            <Route path="/lists" element={<ListScreen/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;

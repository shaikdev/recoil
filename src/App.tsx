import { Suspense } from "react";
import "./App.scss";
import Test from "./screens/test/test.screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ToDoScreen from "screens/todo/todo.screen";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<ToDoScreen />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;

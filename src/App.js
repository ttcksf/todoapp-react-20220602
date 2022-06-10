import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todo } from "./screens/Todo";
import { Test } from "./screens/Test";
import { NotFound } from "./screens/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/test/" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

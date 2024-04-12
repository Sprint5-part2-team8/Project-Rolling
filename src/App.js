import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessagePage } from "pages";
import PlayGround from "Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post/{id}/message" element={<MessagePage />}></Route>
        <Route path="*" element={<PlayGround />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

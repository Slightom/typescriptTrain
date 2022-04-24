import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import ToDoItemsPage from "./components/toDoItems/ToDoItemsPage";
import FormWithUseFormPage from "./components/formWithUseForm/FormWithUseFormPage";
import ImageCard from "./components/muiNew/ImageCard";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./assets/images/theme";
import Counter from "./components/Counter";
import TestUseRef from "./components/useRef/TestUseRef";
import { GlobalContext, GlobalContextProvider, ThemeContext } from "./contexts/GlobalContext";
import TestContext from "./components/testContext/TestContext";
import { ElementsHeightsContextProvider } from "./contexts/ElementsHeightsContext";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalContextProvider>
        <ElementsHeightsContextProvider>
          <ThemeContext.Provider value="dark">
            <Navbar />
            <div>
              <Routes>
                {/* <Route path='/' exact><Navigate to='/todoitems' /></Route> */}
                <Route path="/" exact element={<ToDoItemsPage />} />
                <Route path="/todoitems" element={<ToDoItemsPage />} />
                <Route path="/useform" element={<FormWithUseFormPage />} />
                <Route path="/mui" element={<ImageCard />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/useref" element={<TestUseRef />} />
                <Route path="/context" element={<TestContext />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </ThemeContext.Provider>
        </ElementsHeightsContextProvider>
      </GlobalContextProvider>
    </ThemeProvider>
  );
}

export default App;

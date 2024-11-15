import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AssessmentPage from "./pages/AssessmentPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import "./App.css";
import CharacterList from "./pages/CharacterList";
import Nav from "./components/Nav";
import NotFoundPage from "./pages/NotFoundPage";
import LocationList from "./pages/LocationList";
import HomePage from "./pages/HomePage";
import CharacterDetails from "./pages/CharacterDetails";
import RandomCharacter from "./pages/RandomCharacter";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterProvider } from "./contexts/CharacterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Aldığımız veriler hiç/az değiştiği için uzun süre bayatladıklarını düşünmüyoruz
      staleTime: 120 * 60 * 1000,
      cacheTime: 240 * 60 * 1000,
      refetchOnWindowFocus: false,
      // Olası bir hata durumunda sınırsız yeniden deneme yerine limit
      retry: 2,
      // 2,4,8 saniye şeklinde artarak maksimum 30 saniyeye ulaşan tekrar deneme gecikmesi
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
      networkMode: "offlineFirst",
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <BrowserRouter>
          <Nav />
          <div className="w-full p-4 bg-[#26b1c6] min-h-screen flex items-center justify-center">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/characters" element={<CharacterList />} />
              {/* Template literal sözdizimi ile dinamik yönlendirme */}
              <Route path="/characters/:id" element={<CharacterDetails />} />
              <Route path="/locations" element={<LocationList />} />
              <Route path="/random" element={<RandomCharacter />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CharacterProvider>
    </QueryClientProvider>
  );
}

export default App;

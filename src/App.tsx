import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { PrepFlow } from './routes/PrepFlow';
import { LandingPage } from './pages/LandingPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { PrivacyPage } from './pages/PrivacyPage';

function PrepRoute() {
  const { token } = useParams<{ token: string }>();
  if (!token) return <Navigate to="/" replace />;
  return <PrepFlow token={token} />;
}

function NotFound() {
  return (
    <div className="flex h-full min-h-svh flex-col items-center justify-center gap-2 bg-white px-6 text-center">
      <p className="text-lg font-medium text-neutral-900">Kein gültiger Link.</p>
      <p className="text-[15px] text-neutral-500">
        Bitte öffnen Sie den Link aus Ihrer Terminbestätigung.
      </p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/impressum" element={<ImpressumPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/p/:token" element={<PrepRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Página no encontrada</p>
        <p className="text-gray-400 mb-8">Lo sentimos, la página que buscas no existe.</p>
        <Button
          onClick={() => setLocation("/")}
          className="bg-white text-black hover:bg-gray-200"
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
}

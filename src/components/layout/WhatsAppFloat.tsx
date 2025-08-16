import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg animate-pulse"
        onClick={() => window.open("https://wa.me/your-number", "_blank")}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
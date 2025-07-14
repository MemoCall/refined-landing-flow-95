
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Select value={currentLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-32 border-gray-300">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;


import { Upload } from "lucide-react";
import { useState } from "react";

interface PhoneMockupProps {
  className?: string;
  defaultContent?: React.ReactNode;
  backgroundColor?: string;
  allowImageUpload?: boolean;
}

const PhoneMockup = ({ 
  className = "", 
  defaultContent, 
  backgroundColor = "bg-white",
  allowImageUpload = false 
}: PhoneMockupProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl ${className}`}>
      <div className={`w-full h-full ${backgroundColor} rounded-[2rem] p-6 flex flex-col relative overflow-hidden`}>
        {allowImageUpload && (
          <label className="absolute top-2 right-2 z-10 cursor-pointer bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
            <Upload className="h-4 w-4" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
        
        {uploadedImage ? (
          <img 
            src={uploadedImage} 
            alt="Uploaded content" 
            className="w-full h-full object-cover rounded-[1.5rem]"
          />
        ) : (
          defaultContent
        )}
      </div>
    </div>
  );
};

export default PhoneMockup;

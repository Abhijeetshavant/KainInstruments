// src/components/ui/ImageUpload.jsx
import React, { useState, useRef } from "react";
import { Upload, X, Image, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { uploadToCloudinary } from "../../utils/cloudinary";

const ImageUpload = ({
  onUpload,
  onRemove,
  multiple = false,
  maxFiles = 5,
  existingImages = [],
  folder = "products",
  accept = "image/*",
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);

    // Validate file count
    if (!multiple && files.length > 1) {
      setError("Only one file can be uploaded at a time");
      return;
    }

    if (multiple && existingImages.length + files.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} images`);
      return;
    }

    // Validate file size (5MB max)
    const oversizedFiles = files.filter((file) => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setError("Some files exceed the 5MB limit");
      return;
    }

    setError("");
    setUploading(true);
    setUploadProgress(0);

    try {
      const uploadedImages = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Upload to Cloudinary using our utility
        const result = await uploadToCloudinary(file, folder);
        uploadedImages.push(result);

        // Update progress
        setUploadProgress(((i + 1) / files.length) * 100);
      }

      // Call onUpload with the uploaded images
      if (onUpload) {
        onUpload(uploadedImages);
      }

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload image");
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleRemove = (imageToRemove) => {
    if (onRemove) {
      onRemove(imageToRemove);
    }
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-6 transition-all ${
          uploading
            ? "border-[#FF6B00]/50 bg-[#FF6B00]/5"
            : "border-[#333333] hover:border-[#FF6B00]"
        }`}
      >
        {uploading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="animate-spin text-[#FF6B00] w-10 h-10 mb-4" />
            <p className="text-gray-400 text-sm">Uploading to Cloudinary...</p>
            <div className="w-full max-w-xs h-1 bg-[#333333] rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#FF6B00] transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {Math.round(uploadProgress)}%
            </p>
          </div>
        ) : (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={uploading}
            />
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <p className="text-gray-300 font-medium">Drop your images here</p>
              <p className="text-gray-500 text-sm mt-1">or click to browse</p>
              <p className="text-gray-600 text-xs mt-2">
                Supports JPG, PNG, WebP • Max 5MB each
              </p>
              {multiple && (
                <p className="text-gray-600 text-xs">
                  Up to {maxFiles} images • {existingImages.length} uploaded
                </p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Uploaded Images Preview */}
      {existingImages.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <AnimatePresence>
            {existingImages.map((image, index) => (
              <motion.div
                key={image.url || image.publicId || index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group aspect-square rounded-lg overflow-hidden bg-[#1A1A1A] border border-[#333333]"
              >
                <img
                  src={image.url || image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%231A1A1A'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%23666' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemove(image)}
                  className="absolute top-1 right-1 p-1 bg-red-500/80 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={16} />
                </button>
                {image.publicId && (
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/60 text-white text-[10px] rounded">
                    Uploaded
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

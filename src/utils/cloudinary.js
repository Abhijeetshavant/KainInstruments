// src/utils/cloudinary.js
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "ssxygquk";
const uploadPreset =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "kain_uploads";

export const uploadToCloudinary = async (file, folder = "products") => {
  try {
    // Log for debugging
    console.log("Uploading to Cloudinary...");
    console.log("Cloud Name:", cloudName);
    console.log("Upload Preset:", uploadPreset);
    console.log("File:", file.name);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", `kain-instruments/${folder}`);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    console.log("Upload URL:", url);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Cloudinary Error:", errorData);
      throw new Error(
        errorData.error?.message || `Upload failed: ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log("Upload Success:", data.secure_url);

    return {
      url: data.secure_url,
      publicId: data.public_id,
      format: data.format,
      bytes: data.bytes,
      width: data.width,
      height: data.height,
      createdAt: data.created_at,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

export default {
  uploadToCloudinary,
};

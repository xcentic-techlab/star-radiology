// Yeh helper function ek alag file me banao — utils/cloudinary.ts
export const optimizeCloudinaryUrl = (url: string, width = 800): string => {
  if (!url || !url.includes("cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
};
import { Cloudinary } from "cloudinary-core";

export function getCloudinaryImageUrl(publicId: string): string | "" {
  // Replace 'YOUR_CLOUD_NAME' with your Cloudinary cloud name
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudinary = new Cloudinary({ cloud_name: cloudName });
  const imageTag = cloudinary.url(publicId, { secure: true });

  return imageTag;
}

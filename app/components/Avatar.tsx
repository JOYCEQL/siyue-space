interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ src, alt, size = "md" }: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-24 w-24",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses[size]}`}
    />
  );
}

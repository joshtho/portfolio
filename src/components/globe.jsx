import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  // "firebase",
  // "nginx",
  "vercel",
  // "testinglibrary",
  "git",
  "github",
  "gitlab",
  "figma",
  "bootstrap",
  "vite",
  "ruby",
  "rubyonrails",
  "python",
  "django",
  "flask",
  "linux",
  "sqlite",
  "postgresql",
  "square",
  "mui",
  "shadcnui",
  "adobe"
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;

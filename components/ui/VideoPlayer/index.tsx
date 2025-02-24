import HeroVideoDialog from "../../magicui/hero-video-dialog";

export function HeroVideo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4"
        thumbnailSrc="/assets/video/poster.gif"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4"
        thumbnailSrc="/assets/video/poster.gif"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

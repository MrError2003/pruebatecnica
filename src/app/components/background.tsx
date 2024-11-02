import Image from "next/image";


export default function Background() {
  return (
    <div>
      <Image
        src="/images/rick-background.webp"
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
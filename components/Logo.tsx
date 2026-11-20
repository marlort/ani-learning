import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="rounded-lg border border-blue-200 bg-white p-0.5 shadow-sm">
        <Image
          src="/svgs/nvlogo.jpg"
          alt="Animated Learning logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Logo;

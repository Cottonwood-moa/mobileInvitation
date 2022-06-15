import { cls } from "../../libs/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  addStyle?: string;
  ping?: boolean;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  addStyle,
  text,
  ping,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "relative rounded-md border border-transparent bg-[#937C6F] px-4 font-['Dongle'] font-medium text-white shadow-sm hover:bg-[#937C6F] focus:outline-none ",
        large ? "py-3 text-2xl" : "py-2 text-xl ",
        addStyle ? addStyle : ""
      )}
      onClick={onClick}
    >
      {ping ? (
        <div className="absolute top-0 right-0 flex items-center justify-center">
          <span className="absolute inline-flex aspect-square w-[12px] rounded-full bg-pink-200"></span>
          <span className="absolute inline-flex aspect-square w-[12px] animate-ping rounded-full bg-pink-300 opacity-75"></span>
        </div>
      ) : (
        <></>
      )}
      {text}
    </button>
  );
}

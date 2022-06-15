interface IFont {
  font_ko: string;
  font_en: string;
}
interface IFontSize {
  font_head_title: string;
  font_main_title: string;
  font_main_text: string;
  [key: string]: string;
}
export const font: IFont = {
  font_ko: "font-['NotoSansKR']",
  font_en: "font-['Merriweather']",
};
export const font_size: IFontSize = {
  font_head_title:
    "whitespace-nowrap text-xl font-bold text-[#937C6F] md:text-2xl lg:text-3xl xl:text-4xl",
  font_main_title:
    "whitespace-nowrap text-base font-bold text-[#3f342f] md:text-xl lg:text-2xl xl:text-3xl",
  font_main_text:
    "whitespace-nowrap text-xs font-bold text-[#3f342f] md:text-sm lg:text-base xl:text-lg",
};

export const tablet: string =
  "mr-12 h-[16.8rem] w-[24rem] rounded-2xl border-[8px] border-slate-800 shadow-2xl sm:h-[19.6rem] sm:w-[28rem] md:h-[22.4rem] md:w-[32rem] lg:h-[25.2rem] lg:w-[36rem] xl:h-[28rem] xl:w-[40rem]";

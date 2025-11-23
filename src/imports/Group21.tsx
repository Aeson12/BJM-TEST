import svgPaths from "./svg-6ivffc517b";

function Group() {
  return (
    <div className="absolute contents left-[297px] top-[53px]">
      <div className="absolute bg-[#fdbe00] h-[24px] left-[297px] rounded-[6px] top-[53px] w-[70px]" />
      <p className="absolute font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] left-[332px] text-[14px] text-center text-white top-[53px] translate-x-[-50%] w-[70px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        -00:05:23
      </p>
    </div>
  );
}

function NextPrayer() {
  return (
    <div className="absolute contents left-[26px] top-[53px]" data-name="Next Prayer">
      <Group />
      <p className="absolute font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] left-[26px] text-[#d5e5db] text-[17px] top-[53px] w-[367px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Maghrib will begin in
      </p>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[121px] left-0 top-0 w-[393px]" data-name="Vector">
        <div className="absolute bottom-[-6.61%] left-[-1.02%] right-[-1.02%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 401 129">
            <g filter="url(#filter0_d_1_25)" id="Vector">
              <path d={svgPaths.p3d3fdec0} fill="var(--fill-0, #2A9454)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="129" id="filter0_d_1_25" width="401" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_25" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_25" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <NextPrayer />
      <div className="absolute inset-[17.36%_90.08%_71.9%_4.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
          <path clipRule="evenodd" d={svgPaths.p2ecbf500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

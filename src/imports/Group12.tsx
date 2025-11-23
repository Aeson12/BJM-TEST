import svgPaths from "./svg-5qhaqfzlw6";

function Group1() {
  return (
    <div className="absolute bottom-1/2 left-[30.28%] right-[63.87%] top-[25.53%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Group 8">
          <path d={svgPaths.p21475f80} fill="var(--fill-0, #2A9454)" id="Vector" />
          <path d={svgPaths.p3240b570} fill="var(--fill-0, #2A9454)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[102px] top-[24px]">
      <Group1 />
      <p className="absolute font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] left-[130px] text-[#2a9454] text-[11px] text-center top-[46px] translate-x-[-50%] w-[56px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Prayers
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/2 left-[64.89%] right-[29.26%] top-[25.53%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Group 6">
          <path d={svgPaths.p1a257600} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.pfcb8a80} fill="var(--fill-0, #989898)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[238px] top-[24px]">
      <p className="absolute font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] left-[266px] text-[#989898] text-[11px] text-center top-[46px] translate-x-[-50%] w-[56px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Info
      </p>
      <Group />
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white h-[94px] left-0 shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[393px]" />
      <Group2 />
      <Group3 />
    </div>
  );
}

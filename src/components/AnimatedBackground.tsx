import React from "react";

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-br from-green-100 via-green-50 to-green-200/80">
    <svg
      className="absolute left-0 top-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Falling Leaves */}
      <g opacity="0.6">
        <path
          className="animate-falling-leaf delay-0"
          d="M100,100 Q120,80 140,100 T180,100 Q160,120 180,140 T140,180 Q120,160 100,180 T60,140 Q80,120 60,100 T100,60 Q120,80 100,100"
          fill="#79C779"
        />
        <path
          className="animate-falling-leaf delay-2000"
          d="M700,140 Q720,120 740,140 T780,140 Q760,160 780,180 T740,220 Q720,200 700,220 T660,180 Q680,160 660,140 T700,100 Q720,120 700,140"
          fill="#6DDE89"
        />
        <path
          className="animate-falling-leaf delay-1000"
          d="M300,300 Q320,280 340,300 T380,300 Q360,320 380,340 T340,380 Q320,360 300,380 T260,340 Q280,320 260,300 T300,260 Q320,280 300,300"
          fill="#67B26F"
        />
        <path
          className="animate-falling-leaf delay-3000"
          d="M500,200 Q520,180 540,200 T580,200 Q560,220 580,240 T540,280 Q520,260 500,280 T460,240 Q480,220 460,200 T500,160 Q520,180 500,200"
          fill="#9EE8AD"
        />
        <path
          className="animate-falling-leaf delay-500"
          d="M200,400 Q220,380 240,400 T280,400 Q260,420 280,440 T240,480 Q220,460 200,480 T160,440 Q180,420 160,400 T200,360 Q220,380 200,400"
          fill="#43A047"
        />
        <path
          className="animate-falling-leaf delay-1500"
          d="M600,400 Q620,380 640,400 T680,400 Q660,420 680,440 T640,480 Q620,460 600,480 T560,440 Q580,420 560,400 T600,360 Q620,380 600,400"
          fill="#7CB342"
        />
      </g>

      {/* Water Flow */}
      <g opacity="0.4">
        <path
          className="animate-water-flow"
          d="M0,450 Q200,430 400,450 T800,430"
          stroke="#A5F5B0"
          strokeWidth="6"
          fill="none"
        />
        <path
          className="animate-water-flow delay-1000"
          d="M0,480 Q200,500 400,480 T800,500"
          stroke="#7FEBC3"
          strokeWidth="8"
          fill="none"
        />
        <path
          className="animate-water-flow delay-2000"
          d="M0,520 Q200,500 400,520 T800,500"
          stroke="#8FFFD9"
          strokeWidth="5"
          fill="none"
        />
      </g>

      {/* Bubbles */}
      <g opacity="0.5">
        <circle
          className="animate-bubble delay-1000"
          cx="180"
          cy="520"
          r="8"
          fill="#CFFFE2"
        />
        <circle
          className="animate-bubble delay-2000"
          cx="280"
          cy="500"
          r="6"
          fill="#D3FFDF"
        />
        <circle
          className="animate-bubble delay-3000"
          cx="380"
          cy="510"
          r="7"
          fill="#A5F5B0"
        />
        <circle
          className="animate-bubble delay-1500"
          cx="480"
          cy="490"
          r="5"
          fill="#CFFFE2"
        />
        <circle
          className="animate-bubble delay-2500"
          cx="580"
          cy="500"
          r="8"
          fill="#D3FFDF"
        />
        <circle
          className="animate-bubble delay-500"
          cx="680"
          cy="520"
          r="6"
          fill="#A5F5B0"
        />
      </g>

      {/* Breeze */}
      <g opacity="0.5">
        <path
          className="animate-breeze"
          d="M40 200 Q200 240, 400 180, 600 220, 760 200"
          stroke="#99E3C9"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="animate-breeze delay-1000"
          d="M40 300 Q200 260, 400 320, 600 280, 760 300"
          stroke="#B5ECD7"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="animate-breeze delay-2000"
          d="M40 100 Q200 140, 400 80, 600 120, 760 100"
          stroke="#82D4B2"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  </div>
);

export default AnimatedBackground;

"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

/**
 * ABOUT SECTION - AUTHENTIC RETRO COMPUTER DESIGN
 * With full light/dark mode support & responsive design
 * Light Mode: Macintosh monitor aesthetic (cool-toned beige)
 * Dark Mode: Green/Amber CRT monitor aesthetic
 */

export function About() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  if (!mounted) return null

  return (
    <section id="about" className="py-12 sm:py-16 px-3 sm:px-4 transition-colors duration-300">
      <style>{`
        /* ═══════════════════════════════════════════════════════════════ */
        /* RESPONSIVE DESIGN - ADAPTED FROM MACINTOSH SKILLS MONITOR */
        /* ═══════════════════════════════════════════════════════════════ */
        
        .about-monitor-body {
          border-radius: 40px;
          padding: 20px;
          box-shadow: 
            0 60px 120px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,0.6),
            inset 0 -2px 8px rgba(0,0,0,0.1);
          position: relative;
        }

        .about-monitor-body.dark {
          box-shadow: 
            0 60px 120px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -2px 8px rgba(0,0,0,0.3);
        }

        .about-screen-bezel {
          border-radius: 28px;
          padding: 18px;
          box-shadow: 
            inset 0 2px 6px rgba(255,255,255,0.5),
            inset 0 -4px 10px rgba(0,0,0,0.08);
        }

        .about-screen-bezel.dark {
          box-shadow: 
            inset 0 2px 6px rgba(255,255,255,0.1),
            inset 0 -4px 10px rgba(0,0,0,0.3);
        }

        .about-screen {
          border-radius: 8px;
          padding: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .about-header {
          border-radius: 0;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .about-content-main {
          padding: 20px;
          flex-grow: 1;
        }

        .about-grid {
          display: grid;
          gap: 20px;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* TABLET BREAKPOINT - 768px and below */
        /* ═══════════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          .about-monitor-body {
            padding: 12px;
            border-radius: 32px;
          }

          .about-screen {
            padding: 16px;
            border-radius: 6px;
          }

          .about-header {
            padding: 10px 12px;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .about-header-left h2:first-child {
            font-size: 0.875rem;
          }

          .about-header-left h2:last-child {
            font-size: 0.75rem;
          }

          .about-header-right {
            font-size: 0.7rem;
            gap: 12px !important;
          }

          .about-content-main {
            padding: 16px;
          }

          .about-grid {
            gap: 16px;
          }

          .about-video-container {
            max-width: 100%;
          }

          .about-text-section p {
            font-size: 0.875rem;
          }

          .about-text-section h3 {
            font-size: 1rem;
          }

          .about-text-section .text-xs {
            font-size: 0.7rem;
          }

          .about-divider {
            margin-top: 12px;
            margin-bottom: 8px;
          }

          .about-stand {
            width: 20px;
            height: 6px;
            border-radius: 0 0 24px 24px;
          }
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* MOBILE BREAKPOINT - 480px and below */
        /* ═══════════════════════════════════════════════════════════════ */
        @media (max-width: 480px) {
          section#about {
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }

          .about-monitor-body {
            padding: 8px;
            border-radius: 24px;
          }

          .about-screen-bezel {
            padding: 12px;
            border-radius: 20px;
          }

          .about-screen {
            padding: 12px;
            border-radius: 4px;
          }

          .about-header {
            padding: 8px 10px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .about-header-left {
            width: 100%;
          }

          .about-header-left h2:first-child {
            font-size: 0.75rem;
            letter-spacing: 0.5px;
          }

          .about-header-left h2:last-child {
            font-size: 0.65rem;
          }

          .about-header-left .decorative-line {
            display: none;
          }

          .about-header-right {
            width: 100%;
            font-size: 0.65rem;
            gap: 8px !important;
          }

          .about-header-right span {
            white-space: nowrap;
          }

          .about-content-main {
            padding: 12px;
          }

          .about-grid {
            gap: 12px;
          }

          .about-video-container {
            min-height: 180px;
          }

          .about-text-section {
            gap: 8px !important;
          }

          .about-text-section p {
            font-size: 0.75rem;
            line-height: 1.4;
            margin: 0;
          }

          .about-text-section h3 {
            font-size: 0.875rem;
          }

          .about-text-section .text-xs {
            font-size: 0.65rem;
          }

          .about-divider {
            margin-top: 8px;
            margin-bottom: 6px;
            padding-top: 6px;
          }

          .about-stand {
            width: 18px;
            height: 5px;
            border-radius: 0 0 16px 16px;
          }

          .decorative-dot {
            width: 1px;
            height: 1px;
          }
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* CRT SCANLINE EFFECT - RESPONSIVE */
        /* ═══════════════════════════════════════════════════════════════ */
        .about-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.02) 0px,
            rgba(0, 0, 0, 0.02) 2px,
            transparent 2px,
            transparent 4px
          );
          pointer-events: none;
          border-radius: 8px;
          opacity: 0.97;
          animation: aboutFlicker 0.15s infinite;
        }

        @keyframes aboutFlicker {
          0% { opacity: 0.97; }
          50% { opacity: 1; }
          100% { opacity: 0.97; }
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* MONITOR FRAME - OUTER BEZEL */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="relative">
          
          {/* LIGHT MODE: MACINTOSH MONITOR */}
          {!isDark && (
            <div className="about-monitor-body rounded-3xl shadow-2xl" style={{background: 'linear-gradient(135deg, #e8e4d8 0%, #d9d3c4 50%, #c9bfb0 100%)'}}>
              {/* Bezel highlight for 3D effect */}
              <div className="absolute inset-0 rounded-3xl border-2 pointer-events-none opacity-60" style={{borderColor: '#f0ebe0'}} />
              
              {/* SCREEN BEZEL */}
              <div className="about-screen-bezel rounded-2xl sm:rounded-3xl" style={{background: 'linear-gradient(135deg, #f0ebe0 0%, #e8e4d8 50%, #d9d3c4 100%)'}}>
                {/* SCREEN */}
                <div className="about-screen rounded-lg sm:rounded-xl" style={{backgroundColor: '#f5f3ed', borderColor: '#6b5b4b', border: '6px solid #6b5b4b'}}>
                  
                  {/* CRT SCANLINE EFFECT */}
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-5"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          #000 0px,
                          #000 1px,
                          transparent 1px,
                          transparent 2px
                        )
                      `,
                    }}
                  />

                  {/* GRID PATTERN */}
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* CONTENT WRAPPER */}
                  <div className="relative z-10">
                    
                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* HEADER BAR - LIGHT MODE */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div className="about-header" style={{background: 'linear-gradient(to right, #d9d3c4, #e8e4d8, #d9d3c4)', borderColor: '#6b5b4b', borderBottom: '2px solid #6b5b4b'}}>
                      
                      {/* LEFT: Name */}
                      <div className="about-header-left flex items-center gap-2 sm:gap-3">
                        <h2 className="font-['Press_Start_2P'] tracking-widest" style={{color: '#3a3a3a'}}>
                          PRIYA
                        </h2>
                        <span className="font-mono" style={{color: '#5a4a3a'}}>▌</span>
                        <h2 className="font-['Courier_New'] font-bold" style={{color: '#5a4a3a'}}>
                          veerabomma
                        </h2>
                        
                        {/* Decorative terminal line */}
                        <div className="decorative-line flex gap-0.5 ml-2 hidden sm:flex">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className="decorative-dot h-2 w-px opacity-60"
                              style={{backgroundColor: '#5a4a3a'}}
                            />
                          ))}
                        </div>
                      </div>

                      {/* RIGHT: Contact info */}
                      <div className="about-header-right flex items-center gap-2 sm:gap-4 font-mono" style={{color: '#5a4a3a'}}>
                        <span className="hidden sm:inline">📧 priya.veerabomma@gmail.com</span>
                        <span className="sm:hidden">📧 priya@email.com</span>
                        <span>⏰ 01:39</span>
                      </div>
                    </div>

                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* MAIN CONTENT AREA - LIGHT MODE */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div className="about-content-main" style={{backgroundColor: '#f5f3ed'}}>
                      <div className="about-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        
                        {/* ──────────────────────────────────────────────────────── */}
                        {/* VIDEO SECTION */}
                        {/* ──────────────────────────────────────────────────────── */}
                        <div className="about-video-container md:col-span-1">
                          <div className="relative aspect-square rounded overflow-hidden flex items-center justify-center shadow-lg" style={{borderColor: '#6b5b4b', backgroundColor: '#d9d3c4', border: '4px solid #6b5b4b'}}>
                            <video 
                              autoPlay 
                              muted 
                              loop 
                              className="w-full h-full object-cover"
                            >
                              <source src="/videos/avatar.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>

                        {/* ──────────────────────────────────────────────────────── */}
                        {/* TEXT SECTION - LIGHT MODE */}
                        {/* ──────────────────────────────────────────────────────── */}
                        <div className="about-text-section md:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
                          
                          {/* ROLE TITLE */}
                          <div className="about-divider pb-2 sm:pb-3" style={{borderColor: '#6b5b4b', borderBottom: '2px solid #6b5b4b'}}>
                            <h3 className="font-['Courier_New'] font-bold tracking-wider" style={{color: '#3a3a3a'}}>
                              &gt; SOFTWARE_ENGINEER
                            </h3>
                            <p className="font-mono text-xs mt-1" style={{color: '#7a6a5a'}}>
                              $ genAI backend infrastructure
                            </p>
                          </div>

                          {/* ABOUT TEXT */}
                          <div className="space-y-2 font-mono" style={{color: '#5a4a3a'}}>
                            <p>
                              &gt;&gt; I'm a developer who likes understanding why things break,
                              not just how to patch them. Curiosity runs the show.
                            </p>

                            <p>
                              &gt;&gt; By training I'm full-stack, by instinct I lean backend.
                              I enjoy building real systems, especially where GenAI meets production
                            </p>

                            <p>
                              &gt;&gt; Fun fact: I've kept a Wordle streak alive for over a year.
                              That consistency might be my most reliable algorithm so far
                            </p>

                            <p className="text-xs" style={{color: '#7a6a5a'}}>
                              [MS CompSci • 2+ yrs production • AWS certified]
                            </p>
                          </div>

                          {/* CTA */}
                          <div className="about-divider pt-2 sm:pt-3" style={{borderColor: '#6b5b4b', borderTop: '2px solid #6b5b4b'}}>
                            <p className="font-mono text-xs" style={{color: '#5a4a3a'}}>
                              $ seeking: SDE roles 
                            </p>
                          </div>

                        </div>

                      </div>
                    </div>

                    {/* Scanlines Effect */}
                    <div className="about-scanlines"></div>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* DARK MODE: GREEN/AMBER CRT MONITOR */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {isDark && (
            <div className="about-monitor-body rounded-3xl shadow-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
              {/* Screen Bezel */}
              <div className="about-screen-bezel rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-800 via-slate-800 to-slate-700">
                {/* SCREEN */}
                <div className="about-screen rounded-lg sm:rounded-xl" style={{backgroundColor: '#0f172a', borderColor: '#22c55e', border: '6px solid #22c55e'}}>
                  
                  {/* CRT SCANLINE EFFECT - DARK */}
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          #22c55e 0px,
                          #22c55e 1px,
                          transparent 1px,
                          transparent 2px
                        )
                      `,
                    }}
                  />

                  {/* MONITOR BURN-IN VIGNETTE - DARK MODE */}
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                      backgroundImage: `
                        radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)
                      `,
                    }}
                  />

                  {/* CONTENT WRAPPER */}
                  <div className="relative z-10">
                    
                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* HEADER BAR - DARK MODE */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div className="about-header bg-slate-900" style={{borderColor: '#22c55e', borderBottom: '2px solid #22c55e'}}>
                      
                      {/* LEFT: Name with CRT green styling */}
                      <div className="about-header-left flex items-center gap-2 sm:gap-3">
                        <h2 className="font-['Press_Start_2P'] text-green-400 tracking-widest drop-shadow-lg" style={{color: '#22c55e'}}>
                          PRIYA
                        </h2>
                        <span className="text-green-500 font-mono animate-pulse">▌</span>
                        <h2 className="font-['Courier_New'] font-bold text-green-400 drop-shadow-lg" style={{color: '#22c55e'}}>
                          veerabomma
                        </h2>
                        
                        {/* Decorative CRT line */}
                        <div className="decorative-line flex gap-0.5 ml-2 hidden sm:flex">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className="decorative-dot h-2 w-px bg-green-500"
                            />
                          ))}
                        </div>
                      </div>

                      {/* RIGHT: Contact info - CRT style */}
                      <div className="about-header-right flex items-center gap-2 sm:gap-4 font-mono text-green-400">
                        <span className="hidden sm:inline">📧 priya.veerabomma@gmail.com</span>
                        <span className="sm:hidden">📧 priya@email.com</span>
                        <span>⏰ 01:39</span>
                      </div>
                    </div>

                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* MAIN CONTENT AREA - DARK MODE */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div className="about-content-main bg-slate-950">
                      <div className="about-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        
                        {/* ──────────────────────────────────────────────────────── */}
                        {/* VIDEO SECTION */}
                        {/* ──────────────────────────────────────────────────────── */}
                        <div className="about-video-container md:col-span-1">
                          <div className="relative aspect-square rounded overflow-hidden flex items-center justify-center shadow-lg shadow-green-500/50" style={{borderColor: '#22c55e', backgroundColor: '#1e293b', border: '4px solid #22c55e'}}>
                            <video 
                              autoPlay 
                              muted 
                              loop 
                              className="w-full h-full object-cover"
                            >
                              <source src="/videos/avatar.mp4" type="video/mp4" />
                            </video>
                            {/* CRT monitor glow effect */}
                            <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-green-400 transition-opacity" />
                          </div>
                        </div>

                        {/* ──────────────────────────────────────────────────────── */}
                        {/* TEXT SECTION - DARK MODE */}
                        {/* ──────────────────────────────────────────────────────── */}
                        <div className="about-text-section md:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4 text-green-400 font-mono">
                          
                          {/* ROLE TITLE - CRT GREEN */}
                          <div className="about-divider pb-2 sm:pb-3" style={{borderColor: '#22c55e', borderBottom: '2px solid #22c55e'}}>
                            <h3 className="font-['Courier_New'] font-bold tracking-wider text-green-400 drop-shadow-lg">
                              &gt; SOFTWARE_ENGINEER
                            </h3>
                            <p className="text-xs text-green-500 mt-1">
                              $ genAI backend infrastructure
                            </p>
                          </div>

                          {/* ABOUT TEXT - CRT GREEN */}
                          <div className="space-y-2">
                            <p>
                              &gt;&gt; I'm a developer who likes understanding why things break,
                              not just how to patch them. Curiosity runs the show.
                            </p>

                            <p>
                              &gt;&gt; By training I'm full-stack, by instinct I lean backend.
                              I enjoy building real systems, especially where GenAI meets production
                            </p>

                            <p>
                              &gt;&gt; Fun fact: I've kept a Wordle streak alive for over a year.
                              That consistency might be my most reliable algorithm so far
                            </p>

                            <p className="text-xs text-green-500">
                              [MS CompSci • 2+ yrs production • AWS certified]
                            </p>
                          </div>

                          {/* CTA - CRT GREEN */}
                          <div className="about-divider pt-2 sm:pt-3" style={{borderColor: '#22c55e', borderTop: '2px solid #22c55e'}}>
                            <p className="text-xs text-green-400">
                              $ seeking: SDE roles 
                            </p>
                          </div>

                        </div>

                      </div>
                    </div>

                    {/* Scanlines Effect */}
                    <div className="about-scanlines"></div>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* MONITOR STAND - UNIVERSAL */}
          <div className="flex justify-center mt-3 sm:mt-4">
            <div className="about-stand shadow-lg" 
              style={!isDark ? {background: 'linear-gradient(to bottom, #d9d3c4, #c9bfb0)'} : {background: 'linear-gradient(to bottom, #1f2937, #374151)'}} 
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default About























// "use client"

// import { useTheme } from "next-themes"
// import { useEffect, useState } from "react"


// export function About() {
//   const { theme, systemTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const currentTheme = theme === "system" ? systemTheme : theme
//   const isDark = currentTheme === "dark"

//   if (!mounted) return null

//   return (
//     <section id="about" className="py-16 px-4 transition-colors duration-300">
//       <div className="container mx-auto max-w-7xl">
        
//         {/* ═════════════════════════════════════════════════════════════════ */}
//         {/* MONITOR FRAME - OUTER BEZEL */}
//         {/* ═════════════════════════════════════════════════════════════════ */}
//         <div className="relative">
          
//           {/* LIGHT MODE: MACINTOSH MONITOR */}
//           {!isDark && (
//             <div className="rounded-3xl p-4 shadow-2xl" style={{background: 'linear-gradient(135deg, #e8e4d8 0%, #d9d3c4 50%, #c9bfb0 100%)'}}>
//               {/* Bezel highlight for 3D effect */}
//               <div className="absolute inset-0 rounded-3xl border-2 pointer-events-none opacity-60" style={{borderColor: '#f0ebe0'}} />
              
//               {/* SCREEN */}
//               <div className="relative rounded-lg border-8 overflow-hidden" style={{backgroundColor: '#f5f3ed', borderColor: '#6b5b4b'}}>
                
//                 {/* CRT SCANLINE EFFECT */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none opacity-5"
//                   style={{
//                     backgroundImage: `
//                       repeating-linear-gradient(
//                         0deg,
//                         #000 0px,
//                         #000 1px,
//                         transparent 1px,
//                         transparent 2px
//                       )
//                     `,
//                   }}
//                 />

//                 {/* GRID PATTERN */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none opacity-10"
//                   style={{
//                     backgroundImage: `
//                       linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px),
//                       linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)
//                     `,
//                     backgroundSize: '20px 20px',
//                   }}
//                 />

//                 {/* CONTENT WRAPPER */}
//                 <div className="relative z-10">
                  
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* HEADER BAR - LIGHT MODE (MACINTOSH BEIGE) */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="border-b-2 px-6 py-3 flex justify-between items-center" style={{background: 'linear-gradient(to right, #d9d3c4, #e8e4d8, #d9d3c4)', borderColor: '#6b5b4b'}}>
                    
//                     {/* LEFT: Name with retro styling */}
//                     <div className="flex items-center gap-3">
//                       <h2 className="font-['Press_Start_2P'] text-base tracking-widest" style={{color: '#3a3a3a'}}>
//                         PRIYA
//                       </h2>
//                       <span className="text-sm font-mono" style={{color: '#5a4a3a'}}>▌</span>
//                       <h2 className="font-['Courier_New'] font-bold text-sm" style={{color: '#5a4a3a'}}>
//                         veerabomma
//                       </h2>
                      
//                       {/* Decorative terminal line */}
//                       <div className="flex gap-0.5 ml-2">
//                         {[...Array(5)].map((_, i) => (
//                           <div 
//                             key={i} 
//                             className="h-2 w-px opacity-60"
//                             style={{backgroundColor: '#5a4a3a'}}
//                           />
//                         ))}
//                       </div>
//                     </div>

//                     {/* RIGHT: Contact info */}
//                     <div className="flex items-center gap-4 text-xs font-mono" style={{color: '#5a4a3a'}}>
//                       <span>📧 priya.veerabomma@gmail.com</span>
//                       <span>⏰ 01:39 AM</span>
//                     </div>
//                   </div>

//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* MAIN CONTENT AREA - LIGHT MODE */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="p-8 min-h-96" style={{backgroundColor: '#f5f3ed'}}>
//                     <div className="grid grid-cols-12 gap-8">
                      
//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* LEFT: PHOTO SECTION */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-4">
//                         <div className="relative aspect-square rounded border-4 overflow-hidden flex items-center justify-center shadow-lg" style={{borderColor: '#6b5b4b', backgroundColor: '#d9d3c4'}}>
//                           <video 
//                             autoPlay 
//                             muted 
//                             loop 
//                             className="w-full h-full object-cover"
//                           >
//                             <source src="/videos/avatar.mp4" type="video/mp4" />
//                           </video>
//                         </div>
//                       </div>

//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* RIGHT: TEXT SECTION - LIGHT MODE */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-8 space-y-4">
                        
//                         {/* ROLE TITLE */}
//                         <div className="border-b-2 pb-3" style={{borderColor: '#6b5b4b'}}>
//                           <h3 className="font-['Courier_New'] font-bold text-lg tracking-wider" style={{color: '#3a3a3a'}}>
//                             &gt; SOFTWARE_ENGINEER
//                           </h3>
//                           <p className="font-mono text-xs mt-1" style={{color: '#7a6a5a'}}>
//                             $ genAI backend infrastructure

//                           </p>
//                         </div>

//                         {/* ABOUT TEXT */}
//                         <div className="space-y-2 font-mono text-sm" style={{color: '#5a4a3a'}}>
//                           {/* <p>
                            
//                             &gt;&gt; I’m the kind of developer who still lives on Stack Overflow when things break,
//                             mostly because I like understanding why they broke in the first place.
//                             Curiosity tends to run the show — I try new tools the day they launch,
//                             break them, rebuild things, and keep what actually works.
//                           </p>
//                           <p>
//                             &gt;&gt; Technically, I’m a full-stack engineer with a strong backend bias,
//                             and an AI enthusiast who prefers real systems over demos.
//                             Right now, I’m juggling applications, side projects,
//                             and data structures & algorithms (for life).
//                           </p>
//                             &gt;&gt; My hidden talent: a Wordle streak that’s survived for over a year —
//                             with a few first-try wins. Honestly, that consistency beats my LeetCode stats.
//                           <p> 
//                             &gt;&gt; Favorite people include Padmasree Warrior (alive),
//                             Tim Cook (alive in spirit, and very much on my phone),
//                             and maybe you if you happen to be a recruiter hiring for an SDE :)
//                             </p> */}
//                                 <p>
//                                   &gt;&gt; I’m a developer who likes understanding why things break,
//                                   not just how to patch them. Curiosity runs the show. I try new tools early,
//                                   break them, rebuild them, and keep what actually works
//                                 </p>

//                                 <p>
//                                   &gt;&gt; By training I’m full-stack, by instinct I lean backend.
//                                   I enjoy building real systems, especially where GenAI meets production
//                                 </p>

//                                 <p>
//                                   &gt;&gt; Fun fact: I’ve kept a Wordle streak alive for over a year.
//                                   That consistency might be my most reliable algorithm so far
//                                 </p>

//                           {/* </p> */}
                        
//                           <p className="text-xs" style={{color: '#7a6a5a'}}>
//                             [MS CompSci • 2+ yrs production • AWS certified]
//                           </p>
//                         </div>

//                         {/* SKILLS SECTION */}
//                         {/* <div className="border-t-2 pt-3 space-y-1" style={{borderColor: '#6b5b4b'}}>
//                           <p className="font-mono text-xs font-bold uppercase" style={{color: '#3a3a3a'}}>
//                             ━━━ SKILLS ━━━
//                           </p>
//                           <ul className="space-y-1 text-xs font-mono" style={{color: '#5a4a3a'}}>
//                             <li>$ python | fastapi | nodejs</li>
//                             <li>$ aws | docker | kubernetes</li>
//                             <li>$ llm-orchestration | rag-systems</li>
//                           </ul>
//                         </div> */}

//                         {/* CTA */}
//                         <div className="border-t-2 pt-3" style={{borderColor: '#6b5b4b'}}>
//                           <p className="font-mono text-xs" style={{color: '#5a4a3a'}}>
//                             $ seeking: SDE roles 
//                           </p>
//                         </div>

//                       </div>

//                     </div>

//                     {/* NAVIGATION - TERMINAL STYLE */}
//                     {/* <div className="mt-8 border-t-2 pt-3 flex gap-4 font-mono text-xs" style={{borderColor: '#6b5b4b'}}>
//                       <button className="px-3 py-1 border-2 transition-colors hover:bg-opacity-80" style={{borderColor: '#6b5b4b', color: '#5a4a3a'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6b5b4b'; e.currentTarget.style.color = '#f5f3ed'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a4a3a'}}>
//                         [projects]
//                       </button>
//                       <button className="px-3 py-1 border-2 cursor-default" style={{borderColor: '#6b5b4b', backgroundColor: '#6b5b4b', color: '#f5f3ed'}}>
//                         [about]
//                       </button>
//                       <button className="px-3 py-1 border-2 transition-colors hover:bg-opacity-80" style={{borderColor: '#6b5b4b', color: '#5a4a3a'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6b5b4b'; e.currentTarget.style.color = '#f5f3ed'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a4a3a'}}>
//                         [contact]
//                       </button>
//                     </div> */}

//                   </div>

//                 </div>

//               </div>

//             </div>
//           )}

//           {/* ═══════════════════════════════════════════════════════════════ */}
//           {/* DARK MODE: GREEN/AMBER CRT MONITOR */}
//           {/* ═══════════════════════════════════════════════════════════════ */}
//           {isDark && (
//             <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 rounded-3xl p-4 shadow-2xl">
//               {/* Screen */}
//               <div className="relative bg-slate-950 rounded-lg border-8 border-slate-400 overflow-hidden">
                
//                 {/* CRT SCANLINE EFFECT - DARK */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none opacity-20"
//                   style={{
//                     backgroundImage: `
//                       repeating-linear-gradient(
//                         0deg,
//                         #22c55e 0px,
//                         #22c55e 1px,
//                         transparent 1px,
//                         transparent 2px
//                       )
//                     `,
//                   }}
//                 />

//                 {/* MONITOR BURN-IN VIGNETTE - DARK MODE */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none"
//                   style={{
//                     backgroundImage: `
//                       radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)
//                     `,
//                   }}
//                 />

//                 {/* CONTENT WRAPPER */}
//                 <div className="relative z-10">
                  
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* HEADER BAR - DARK MODE (GREEN CRT) */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="bg-slate-900 border-b-2 border-green-500 px-6 py-3 flex justify-between items-center">
                    
//                     {/* LEFT: Name with CRT green styling */}
//                     <div className="flex items-center gap-3">
//                       <h2 className="font-['Press_Start_2P'] text-base text-green-400 tracking-widest drop-shadow-lg">
//                         PRIYA
//                       </h2>
//                       <span className="text-green-500 text-sm font-mono animate-pulse">▌</span>
//                       <h2 className="font-['Courier_New'] font-bold text-green-400 text-sm drop-shadow-lg">
//                         veerabomma
//                       </h2>
                      
//                       {/* Decorative CRT line */}
//                       <div className="flex gap-0.5 ml-2">
//                         {[...Array(5)].map((_, i) => (
//                           <div 
//                             key={i} 
//                             className="h-2 w-px bg-green-500"
//                           />
//                         ))}
//                       </div>
//                     </div>

//                     {/* RIGHT: Contact info - CRT style */}
//                     <div className="flex items-center gap-4 text-xs font-mono">
//                       <span className="text-green-400">📧 priya.veerabomma1@gmail.com</span>
//                       <span className="text-green-400">⏰ 01:39 AM</span>
//                     </div>
//                   </div>

//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* MAIN CONTENT AREA - DARK MODE (GREEN CRT) */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="p-8 min-h-96 bg-slate-950">
//                     <div className="grid grid-cols-12 gap-8">
                      
//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* LEFT: PHOTO SECTION */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-4">
//                         <div className="relative aspect-square rounded border-4 border-green-500 overflow-hidden bg-slate-800 flex items-center justify-center shadow-lg shadow-green-500/50">
//                           <video 
//                             autoPlay 
//                             muted 
//                             loop 
//                             className="w-full h-full object-cover"
//                           >
//                             <source src="/videos/avatar.mp4" type="video/mp4" />
//                           </video>
//                           {/* CRT monitor glow effect */}
//                           <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-green-400 transition-opacity" />
//                         </div>
//                       </div>

//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* RIGHT: TEXT SECTION - DARK MODE (GREEN CRT) */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-8 space-y-4">
                        
//                         {/* ROLE TITLE - CRT GREEN */}
//                         <div className="border-b-2 border-green-500 pb-3">
//                           <h3 className="font-['Courier_New'] font-bold text-green-400 text-lg tracking-wider drop-shadow-lg">
//                             &gt; SOFTWARE_ENGINEER
//                           </h3>
//                           <p className="font-mono text-xs text-green-500 mt-1">
//                             $ genAI backend infrastructure
//                           </p>
//                         </div>

//                         {/* ABOUT TEXT - CRT GREEN */}
//                         <div className="space-y-2 font-mono text-sm text-green-400">
//                         {/* <p>
                            
//                             &gt;&gt; I’m the kind of developer who still lives on Stack Overflow when things break,
//                             mostly because I like understanding why they broke in the first place.
//                             Curiosity tends to run the show — I try new tools the day they launch,
//                             break them, rebuild things, and keep what actually works.
//                           </p>
//                           <p>
//                             &gt;&gt; Technically, I’m a full-stack engineer with a strong backend bias,
//                             and an AI enthusiast who prefers real systems over demos.
//                             Right now, I’m juggling applications, side projects,
//                             and data structures & algorithms (for life).
//                           </p>
//                             &gt;&gt; My hidden talent: a Wordle streak that’s survived for over a year —
//                             with a few first-try wins. Honestly, that consistency beats my LeetCode stats.
//                           <p> 
//                             &gt;&gt; Favorite people include Padmasree Warrior (alive),
//                             Tim Cook (alive in spirit, and very much on my phone),
//                             and maybe you if you happen to be a recruiter hiring for an SDE :)
//                             </p> */}


//                             {/* <p>  
//                               &gt;&gt; I build backend infrastructure that actually ships. 
//                               Spent the last year shipping LLM orchestration systems and RAG platforms 
//                               that reduced latency by 60%. I obsess over systems design—
//                               why things work, why they break, how to make them faster.
//                             </p>
//                             <p>&gt;&gt; Right now: GenAI infrastructure at scale</p>
                              
//                              <p>&gt;&gt; Also: data structures & algorithms, and an embarrassing 
//                               Wordle streak that's somehow better than my LeetCode</p>  */}
                              
//                               <p>
//                                   &gt;&gt; I’m a developer who likes understanding why things break,
//                                   not just how to patch them. Curiosity runs the show. I try new tools early,
//                                   break them, rebuild them, and keep what actually works
//                                 </p>

//                                 <p>
//                                   &gt;&gt; By training I’m full-stack, by instinct I lean backend.
//                                   I enjoy building real systems, especially where GenAI meets production
//                                 </p>

//                                 <p>
//                                   &gt;&gt; Fun fact: I’ve kept a Wordle streak alive for over a year.
//                                   That consistency might be my most reliable algorithm so far
//                                 </p>
                
//                           {/* </p> */}
                        
//                           <p className="text-xs" style={{color: '#7a6a5a'}}>
//                             [MS CompSci • 2+ yrs production • AWS certified]
//                           </p>
//                         </div>

//                         {/* SKILLS SECTION - CRT GREEN */}
//                         {/* <div className="border-t-2 border-green-500 pt-3 space-y-1">
//                           <p className="font-mono text-xs font-bold text-green-400 uppercase">
//                             ━━━ SKILLS ━━━
//                           </p>
//                           <ul className="space-y-1 text-xs font-mono text-green-400">
//                             <li>$ python | fastapi | nodejs</li>
//                             <li>$ aws | docker | kubernetes</li>
//                             <li>$ llm-orchestration | rag-systems</li>
//                           </ul>
//                         </div> */}

//                         {/* CTA - CRT GREEN */}
//                         <div className="border-t-2 border-green-500 pt-3">
//                           <p className="font-mono text-xs text-green-400">
//                             $ seeking: SDE roles 
//                           </p>
//                         </div>

//                       </div>

//                     </div>

//                     {/* NAVIGATION - TERMINAL CRT STYLE */}
//                     {/* <div className="mt-8 border-t-2 border-green-500 pt-3 flex gap-4 font-mono text-xs">
//                       <button className="px-3 py-1 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-950 transition-all duration-100">
//                         [projects]
//                       </button>
//                       <button className="px-3 py-1 border-2 border-green-500 bg-green-500 text-slate-950 cursor-default shadow-lg shadow-green-500/50">
//                         [about]
//                       </button>
//                       <button className="px-3 py-1 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-950 transition-all duration-100">
//                         [contact]
//                       </button>
//                     </div> */}

//                   </div>

//                 </div>

//               </div>

//             </div>
//           )}

//           {/* MONITOR STAND - UNIVERSAL */}
//           <div className="flex justify-center mt-4">
//             <div className={`w-24 h-8 rounded-b-2xl shadow-lg ${
//               isDark 
//                 ? 'bg-gradient-to-b from-slate-400 to-slate-600' 
//                 : ''
//             }`} 
//             style={!isDark ? {background: 'linear-gradient(to bottom, #d9d3c4, #c9bfb0)'} : {}} 
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default About










//below is the code for the image instead of video

// "use client"

// import Image from "next/image"
// import { useTheme } from "next-themes"
// import { useEffect, useState } from "react"

// /**
//  * ABOUT SECTION - AUTHENTIC RETRO COMPUTER DESIGN
//  * With full light/dark mode support
//  * Light Mode: Macintosh monitor aesthetic (cool-toned beige)
//  * Dark Mode: Green/Amber CRT monitor aesthetic
//  */

// export function About() {
//   const { theme, systemTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const currentTheme = theme === "system" ? systemTheme : theme
//   const isDark = currentTheme === "dark"

//   if (!mounted) return null

//   return (
//     <section id="about" className="py-16 px-4 transition-colors duration-300">
//       <div className="container mx-auto max-w-7xl">
        
//         {/* ═════════════════════════════════════════════════════════════════ */}
//         {/* MONITOR FRAME - OUTER BEZEL */}
//         {/* ═════════════════════════════════════════════════════════════════ */}
//         <div className="relative">
          
//           {/* LIGHT MODE: MACINTOSH MONITOR */}
//           {!isDark && (
//             <div className="rounded-3xl p-4 shadow-2xl" style={{background: 'linear-gradient(135deg, #e8e4d8 0%, #d9d3c4 50%, #c9bfb0 100%)'}}>
//               {/* Bezel highlight for 3D effect */}
//               <div className="absolute inset-0 rounded-3xl border-2 pointer-events-none opacity-60" style={{borderColor: '#f0ebe0'}} />
              
//               {/* SCREEN */}
//               <div className="relative rounded-lg border-8 overflow-hidden" style={{backgroundColor: '#f5f3ed', borderColor: '#6b5b4b'}}>
                
//                 {/* CRT SCANLINE EFFECT */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none opacity-5"
//                   style={{
//                     backgroundImage: `
//                       repeating-linear-gradient(
//                         0deg,
//                         #000 0px,
//                         #000 1px,
//                         transparent 1px,
//                         transparent 2px
//                       )
//                     `,
//                   }}
//                 />

//                 {/* GRID PATTERN */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none opacity-10"
//                   style={{
//                     backgroundImage: `
//                       linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px),
//                       linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)
//                     `,
//                     backgroundSize: '20px 20px',
//                   }}
//                 />

//                 {/* CONTENT WRAPPER */}
//                 <div className="relative z-10">
                  
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* HEADER BAR - LIGHT MODE (MACINTOSH BEIGE) */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="border-b-2 px-6 py-3 flex justify-between items-center" style={{background: 'linear-gradient(to right, #d9d3c4, #e8e4d8, #d9d3c4)', borderColor: '#6b5b4b'}}>
                    
//                     {/* LEFT: Name with retro styling */}
//                     <div className="flex items-center gap-3">
//                       <h2 className="font-['Press_Start_2P'] text-base tracking-widest" style={{color: '#3a3a3a'}}>
//                         PRIYA
//                       </h2>
//                       <span className="text-sm font-mono" style={{color: '#5a4a3a'}}>▌</span>
//                       <h2 className="font-['Courier_New'] font-bold text-sm" style={{color: '#5a4a3a'}}>
//                         veerabomma
//                       </h2>
                      
//                       {/* Decorative terminal line */}
//                       <div className="flex gap-0.5 ml-2">
//                         {[...Array(5)].map((_, i) => (
//                           <div 
//                             key={i} 
//                             className="h-2 w-px opacity-60"
//                             style={{backgroundColor: '#5a4a3a'}}
//                           />
//                         ))}
//                       </div>
//                     </div>

//                     {/* RIGHT: Contact info */}
//                     <div className="flex items-center gap-4 text-xs font-mono" style={{color: '#5a4a3a'}}>
//                       <span>📧 priya.veerabomma1@gmail.com</span>
//                       <span>⏰ [01:39 AM]</span>
//                     </div>
//                   </div>

//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* MAIN CONTENT AREA - LIGHT MODE */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="p-8 min-h-96" style={{backgroundColor: '#f5f3ed'}}>
//                     <div className="grid grid-cols-12 gap-8">
                      
//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* LEFT: PHOTO SECTION */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-4">
//                         <div className="relative aspect-square rounded border-4 overflow-hidden flex items-center justify-center shadow-lg" style={{borderColor: '#6b5b4b', backgroundColor: '#d9d3c4'}}>
//                           <Image
//                             src="/images/avatar.png"
//                             alt="Priya Veerabomma"
//                             fill
//                             className="object-cover"
//                             priority
//                           />
//                         </div>
//                       </div>

//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* RIGHT: TEXT SECTION - LIGHT MODE */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-8 space-y-4">
                        
//                         {/* ROLE TITLE */}
//                         <div className="border-b-2 pb-3" style={{borderColor: '#6b5b4b'}}>
//                           <h3 className="font-['Courier_New'] font-bold text-lg tracking-wider" style={{color: '#3a3a3a'}}>
//                             &gt; SOFTWARE_ENGINEER
//                           </h3>
//                           <p className="font-mono text-xs mt-1" style={{color: '#7a6a5a'}}>
//                             $ genAI backend infrastructure
//                           </p>
//                         </div>

//                         {/* ABOUT TEXT */}
//                         <div className="space-y-2 font-mono text-sm" style={{color: '#5a4a3a'}}>
//                           <p>
//                             &gt;&gt; Building scalable infrastructure for AI systems
//                           </p>
//                           <p>
//                             &gt;&gt; Full-stack engineer • Backend passion • Real-time apps
//                           </p>
//                           <p className="text-xs" style={{color: '#7a6a5a'}}>
//                             [MS CompSci • 2+ yrs production • AWS certified]
//                           </p>
//                         </div>

//                         {/* SKILLS SECTION */}
//                         <div className="border-t-2 pt-3 space-y-1" style={{borderColor: '#6b5b4b'}}>
//                           <p className="font-mono text-xs font-bold uppercase" style={{color: '#3a3a3a'}}>
//                             ━━━ SKILLS ━━━
//                           </p>
//                           <ul className="space-y-1 text-xs font-mono" style={{color: '#5a4a3a'}}>
//                             <li>$ python | fastapi | nodejs</li>
//                             <li>$ aws | docker | kubernetes</li>
//                             <li>$ llm-orchestration | rag-systems</li>
//                           </ul>
//                         </div>

//                         {/* CTA */}
//                         <div className="border-t-2 pt-3" style={{borderColor: '#6b5b4b'}}>
//                           <p className="font-mono text-xs" style={{color: '#5a4a3a'}}>
//                             $ seeking: SDE roles @ FAANG
//                           </p>
//                         </div>

//                       </div>

//                     </div>

//                     {/* NAVIGATION - TERMINAL STYLE */}
//                     <div className="mt-8 border-t-2 pt-3 flex gap-4 font-mono text-xs" style={{borderColor: '#6b5b4b'}}>
//                       <button className="px-3 py-1 border-2 transition-colors hover:bg-opacity-80" style={{borderColor: '#6b5b4b', color: '#5a4a3a'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6b5b4b'; e.currentTarget.style.color = '#f5f3ed'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a4a3a'}}>
//                         [projects]
//                       </button>
//                       <button className="px-3 py-1 border-2 cursor-default" style={{borderColor: '#6b5b4b', backgroundColor: '#6b5b4b', color: '#f5f3ed'}}>
//                         [about]
//                       </button>
//                       <button className="px-3 py-1 border-2 transition-colors hover:bg-opacity-80" style={{borderColor: '#6b5b4b', color: '#5a4a3a'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6b5b4b'; e.currentTarget.style.color = '#f5f3ed'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a4a3a'}}>
//                         [contact]
//                       </button>
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>
//           )}

//           {/* ═══════════════════════════════════════════════════════════════ */}
//           {/* DARK MODE: GREEN/AMBER CRT MONITOR */}
//           {/* ═══════════════════════════════════════════════════════════════ */}
//           {isDark && (
//             <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 rounded-3xl p-4 shadow-2xl">
//               {/* Screen */}
//               <div className="relative bg-slate-950 rounded-lg border-8 border-slate-400 overflow-hidden">
                
//                 {/* CRT SCANLINE EFFECT - DARK */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none opacity-20"
//                   style={{
//                     backgroundImage: `
//                       repeating-linear-gradient(
//                         0deg,
//                         #22c55e 0px,
//                         #22c55e 1px,
//                         transparent 1px,
//                         transparent 2px
//                       )
//                     `,
//                   }}
//                 />

//                 {/* MONITOR BURN-IN VIGNETTE - DARK MODE */}
//                 <div 
//                   className="absolute inset-0 z-0 pointer-events-none"
//                   style={{
//                     backgroundImage: `
//                       radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)
//                     `,
//                   }}
//                 />

//                 {/* CONTENT WRAPPER */}
//                 <div className="relative z-10">
                  
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* HEADER BAR - DARK MODE (GREEN CRT) */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="bg-slate-900 border-b-2 border-green-500 px-6 py-3 flex justify-between items-center">
                    
//                     {/* LEFT: Name with CRT green styling */}
//                     <div className="flex items-center gap-3">
//                       <h2 className="font-['Press_Start_2P'] text-base text-green-400 tracking-widest drop-shadow-lg">
//                         PRIYA
//                       </h2>
//                       <span className="text-green-500 text-sm font-mono animate-pulse">▌</span>
//                       <h2 className="font-['Courier_New'] font-bold text-green-400 text-sm drop-shadow-lg">
//                         veerabomma
//                       </h2>
                      
//                       {/* Decorative CRT line */}
//                       <div className="flex gap-0.5 ml-2">
//                         {[...Array(5)].map((_, i) => (
//                           <div 
//                             key={i} 
//                             className="h-2 w-px bg-green-500"
//                           />
//                         ))}
//                       </div>
//                     </div>

//                     {/* RIGHT: Contact info - CRT style */}
//                     <div className="flex items-center gap-4 text-xs font-mono">
//                       <span className="text-green-400">📧 priya.veerabomma@gmail.com</span>
//                       <span className="text-green-400">⏰ 01:39 AM</span>
//                     </div>
//                   </div>

//                   {/* ════════════════════════════════════════════════════════════ */}
//                   {/* MAIN CONTENT AREA - DARK MODE (GREEN CRT) */}
//                   {/* ════════════════════════════════════════════════════════════ */}
//                   <div className="p-8 min-h-96 bg-slate-950">
//                     <div className="grid grid-cols-12 gap-8">
                      
//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* LEFT: PHOTO SECTION */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-4">
//                         <div className="relative aspect-square rounded border-4 border-green-500 overflow-hidden bg-slate-800 flex items-center justify-center shadow-lg shadow-green-500/50">
//                           <Image
//                             src="/images/avatar.png"
//                             alt="Priya Veerabomma"
//                             fill
//                             className="object-cover"
//                             priority
//                           />
//                           {/* CRT monitor glow effect */}
//                           <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-green-400 transition-opacity" />
//                         </div>
//                       </div>

//                       {/* ──────────────────────────────────────────────────────── */}
//                       {/* RIGHT: TEXT SECTION - DARK MODE (GREEN CRT) */}
//                       {/* ──────────────────────────────────────────────────────── */}
//                       <div className="col-span-12 md:col-span-8 space-y-4">
                        
//                         {/* ROLE TITLE - CRT GREEN */}
//                         <div className="border-b-2 border-green-500 pb-3">
//                           <h3 className="font-['Courier_New'] font-bold text-green-400 text-lg tracking-wider drop-shadow-lg">
//                             &gt; SOFTWARE_ENGINEER
//                           </h3>
//                           <p className="font-mono text-xs text-green-500 mt-1">
//                             $ genAI backend infrastructure
//                           </p>
//                         </div>

//                         {/* ABOUT TEXT - CRT GREEN */}
//                         <div className="space-y-2 font-mono text-sm text-green-400">
//                           <p>
//                             &gt;&gt; Building scalable infrastructure for AI systems
//                           </p>
//                           <p>
//                             &gt;&gt; Full-stack engineer • Backend passion • Real-time apps
//                           </p>
//                           <p className="text-xs text-green-500">
//                             [MS CompSci • 2+ yrs production • AWS certified]
//                           </p>
//                         </div>

//                         {/* SKILLS SECTION - CRT GREEN */}
//                         <div className="border-t-2 border-green-500 pt-3 space-y-1">
//                           <p className="font-mono text-xs font-bold text-green-400 uppercase">
//                             ━━━ SKILLS ━━━
//                           </p>
//                           <ul className="space-y-1 text-xs font-mono text-green-400">
//                             <li>$ python | fastapi | nodejs</li>
//                             <li>$ aws | docker | kubernetes</li>
//                             <li>$ llm-orchestration | rag-systems</li>
//                           </ul>
//                         </div>

//                         {/* CTA - CRT GREEN */}
//                         <div className="border-t-2 border-green-500 pt-3">
//                           <p className="font-mono text-xs text-green-400">
//                             $ seeking: SDE roles @ FAANG
//                           </p>
//                         </div>

//                       </div>

//                     </div>

//                     {/* NAVIGATION - TERMINAL CRT STYLE */}
//                     <div className="mt-8 border-t-2 border-green-500 pt-3 flex gap-4 font-mono text-xs">
//                       <button className="px-3 py-1 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-950 transition-all duration-100">
//                         [projects]
//                       </button>
//                       <button className="px-3 py-1 border-2 border-green-500 bg-green-500 text-slate-950 cursor-default shadow-lg shadow-green-500/50">
//                         [about]
//                       </button>
//                       <button className="px-3 py-1 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-950 transition-all duration-100">
//                         [contact]
//                       </button>
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>
//           )}

//           {/* MONITOR STAND - UNIVERSAL */}
//           <div className="flex justify-center mt-4">
//             <div className={`w-24 h-8 rounded-b-2xl shadow-lg ${
//               isDark 
//                 ? 'bg-gradient-to-b from-slate-400 to-slate-600' 
//                 : ''
//             }`} 
//             style={!isDark ? {background: 'linear-gradient(to bottom, #d9d3c4, #c9bfb0)'} : {}} 
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default About






"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

/**
 * ABOUT SECTION - AUTHENTIC RETRO COMPUTER DESIGN
 * With full light/dark mode support
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
    <section id="about" className="py-16 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* MONITOR FRAME - OUTER BEZEL */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="relative">
          
          {/* LIGHT MODE: MACINTOSH MONITOR */}
          {!isDark && (
            <div className="rounded-3xl p-4 shadow-2xl" style={{background: 'linear-gradient(135deg, #e8e4d8 0%, #d9d3c4 50%, #c9bfb0 100%)'}}>
              {/* Bezel highlight for 3D effect */}
              <div className="absolute inset-0 rounded-3xl border-2 pointer-events-none opacity-60" style={{borderColor: '#f0ebe0'}} />
              
              {/* SCREEN */}
              <div className="relative rounded-lg border-8 overflow-hidden" style={{backgroundColor: '#f5f3ed', borderColor: '#6b5b4b'}}>
                
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
                  {/* HEADER BAR - LIGHT MODE (MACINTOSH BEIGE) */}
                  {/* ════════════════════════════════════════════════════════════ */}
                  <div className="border-b-2 px-6 py-3 flex justify-between items-center" style={{background: 'linear-gradient(to right, #d9d3c4, #e8e4d8, #d9d3c4)', borderColor: '#6b5b4b'}}>
                    
                    {/* LEFT: Name with retro styling */}
                    <div className="flex items-center gap-3">
                      <h2 className="font-['Press_Start_2P'] text-base tracking-widest" style={{color: '#3a3a3a'}}>
                        PRIYA
                      </h2>
                      <span className="text-sm font-mono" style={{color: '#5a4a3a'}}>▌</span>
                      <h2 className="font-['Courier_New'] font-bold text-sm" style={{color: '#5a4a3a'}}>
                        veerabomma
                      </h2>
                      
                      {/* Decorative terminal line */}
                      <div className="flex gap-0.5 ml-2">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="h-2 w-px opacity-60"
                            style={{backgroundColor: '#5a4a3a'}}
                          />
                        ))}
                      </div>
                    </div>

                    {/* RIGHT: Contact info */}
                    <div className="flex items-center gap-4 text-xs font-mono" style={{color: '#5a4a3a'}}>
                      <span>📧 priya.veerabomma@gmail.com</span>
                      <span>⏰ 01:39 AM</span>
                    </div>
                  </div>

                  {/* ════════════════════════════════════════════════════════════ */}
                  {/* MAIN CONTENT AREA - LIGHT MODE */}
                  {/* ════════════════════════════════════════════════════════════ */}
                  <div className="p-8 min-h-96" style={{backgroundColor: '#f5f3ed'}}>
                    <div className="grid grid-cols-12 gap-8">
                      
                      {/* ──────────────────────────────────────────────────────── */}
                      {/* LEFT: PHOTO SECTION */}
                      {/* ──────────────────────────────────────────────────────── */}
                      <div className="col-span-12 md:col-span-4">
                        <div className="relative aspect-square rounded border-4 overflow-hidden flex items-center justify-center shadow-lg" style={{borderColor: '#6b5b4b', backgroundColor: '#d9d3c4'}}>
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
                      {/* RIGHT: TEXT SECTION - LIGHT MODE */}
                      {/* ──────────────────────────────────────────────────────── */}
                      <div className="col-span-12 md:col-span-8 space-y-4">
                        
                        {/* ROLE TITLE */}
                        <div className="border-b-2 pb-3" style={{borderColor: '#6b5b4b'}}>
                          <h3 className="font-['Courier_New'] font-bold text-lg tracking-wider" style={{color: '#3a3a3a'}}>
                            &gt; SOFTWARE_ENGINEER
                          </h3>
                          <p className="font-mono text-xs mt-1" style={{color: '#7a6a5a'}}>
                            $ genAI backend infrastructure

                          </p>
                        </div>

                        {/* ABOUT TEXT */}
                        <div className="space-y-2 font-mono text-sm" style={{color: '#5a4a3a'}}>
                          {/* <p>
                            
                            &gt;&gt; I’m the kind of developer who still lives on Stack Overflow when things break,
                            mostly because I like understanding why they broke in the first place.
                            Curiosity tends to run the show — I try new tools the day they launch,
                            break them, rebuild things, and keep what actually works.
                          </p>
                          <p>
                            &gt;&gt; Technically, I’m a full-stack engineer with a strong backend bias,
                            and an AI enthusiast who prefers real systems over demos.
                            Right now, I’m juggling applications, side projects,
                            and data structures & algorithms (for life).
                          </p>
                            &gt;&gt; My hidden talent: a Wordle streak that’s survived for over a year —
                            with a few first-try wins. Honestly, that consistency beats my LeetCode stats.
                          <p> 
                            &gt;&gt; Favorite people include Padmasree Warrior (alive),
                            Tim Cook (alive in spirit, and very much on my phone),
                            and maybe you if you happen to be a recruiter hiring for an SDE :)
                            </p> */}
                                <p>
                                  &gt;&gt; I’m a developer who likes understanding why things break,
                                  not just how to patch them. Curiosity runs the show. I try new tools early,
                                  break them, rebuild them, and keep what actually works
                                </p>

                                <p>
                                  &gt;&gt; By training I’m full-stack, by instinct I lean backend.
                                  I enjoy building real systems, especially where GenAI meets production
                                </p>

                                <p>
                                  &gt;&gt; Fun fact: I’ve kept a Wordle streak alive for over a year.
                                  That consistency might be my most reliable algorithm so far
                                </p>

                          {/* </p> */}
                        
                          <p className="text-xs" style={{color: '#7a6a5a'}}>
                            [MS CompSci • 2+ yrs production • AWS certified]
                          </p>
                        </div>

                        {/* SKILLS SECTION */}
                        {/* <div className="border-t-2 pt-3 space-y-1" style={{borderColor: '#6b5b4b'}}>
                          <p className="font-mono text-xs font-bold uppercase" style={{color: '#3a3a3a'}}>
                            ━━━ SKILLS ━━━
                          </p>
                          <ul className="space-y-1 text-xs font-mono" style={{color: '#5a4a3a'}}>
                            <li>$ python | fastapi | nodejs</li>
                            <li>$ aws | docker | kubernetes</li>
                            <li>$ llm-orchestration | rag-systems</li>
                          </ul>
                        </div> */}

                        {/* CTA */}
                        <div className="border-t-2 pt-3" style={{borderColor: '#6b5b4b'}}>
                          <p className="font-mono text-xs" style={{color: '#5a4a3a'}}>
                            $ seeking: SDE roles 
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* NAVIGATION - TERMINAL STYLE */}
                    {/* <div className="mt-8 border-t-2 pt-3 flex gap-4 font-mono text-xs" style={{borderColor: '#6b5b4b'}}>
                      <button className="px-3 py-1 border-2 transition-colors hover:bg-opacity-80" style={{borderColor: '#6b5b4b', color: '#5a4a3a'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6b5b4b'; e.currentTarget.style.color = '#f5f3ed'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a4a3a'}}>
                        [projects]
                      </button>
                      <button className="px-3 py-1 border-2 cursor-default" style={{borderColor: '#6b5b4b', backgroundColor: '#6b5b4b', color: '#f5f3ed'}}>
                        [about]
                      </button>
                      <button className="px-3 py-1 border-2 transition-colors hover:bg-opacity-80" style={{borderColor: '#6b5b4b', color: '#5a4a3a'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6b5b4b'; e.currentTarget.style.color = '#f5f3ed'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5a4a3a'}}>
                        [contact]
                      </button>
                    </div> */}

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* DARK MODE: GREEN/AMBER CRT MONITOR */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {isDark && (
            <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 rounded-3xl p-4 shadow-2xl">
              {/* Screen */}
              <div className="relative bg-slate-950 rounded-lg border-8 border-slate-400 overflow-hidden">
                
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
                  {/* HEADER BAR - DARK MODE (GREEN CRT) */}
                  {/* ════════════════════════════════════════════════════════════ */}
                  <div className="bg-slate-900 border-b-2 border-green-500 px-6 py-3 flex justify-between items-center">
                    
                    {/* LEFT: Name with CRT green styling */}
                    <div className="flex items-center gap-3">
                      <h2 className="font-['Press_Start_2P'] text-base text-green-400 tracking-widest drop-shadow-lg">
                        PRIYA
                      </h2>
                      <span className="text-green-500 text-sm font-mono animate-pulse">▌</span>
                      <h2 className="font-['Courier_New'] font-bold text-green-400 text-sm drop-shadow-lg">
                        veerabomma
                      </h2>
                      
                      {/* Decorative CRT line */}
                      <div className="flex gap-0.5 ml-2">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="h-2 w-px bg-green-500"
                          />
                        ))}
                      </div>
                    </div>

                    {/* RIGHT: Contact info - CRT style */}
                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="text-green-400">📧 priya.veerabomma1@gmail.com</span>
                      <span className="text-green-400">⏰ 01:39 AM</span>
                    </div>
                  </div>

                  {/* ════════════════════════════════════════════════════════════ */}
                  {/* MAIN CONTENT AREA - DARK MODE (GREEN CRT) */}
                  {/* ════════════════════════════════════════════════════════════ */}
                  <div className="p-8 min-h-96 bg-slate-950">
                    <div className="grid grid-cols-12 gap-8">
                      
                      {/* ──────────────────────────────────────────────────────── */}
                      {/* LEFT: PHOTO SECTION */}
                      {/* ──────────────────────────────────────────────────────── */}
                      <div className="col-span-12 md:col-span-4">
                        <div className="relative aspect-square rounded border-4 border-green-500 overflow-hidden bg-slate-800 flex items-center justify-center shadow-lg shadow-green-500/50">
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
                      {/* RIGHT: TEXT SECTION - DARK MODE (GREEN CRT) */}
                      {/* ──────────────────────────────────────────────────────── */}
                      <div className="col-span-12 md:col-span-8 space-y-4">
                        
                        {/* ROLE TITLE - CRT GREEN */}
                        <div className="border-b-2 border-green-500 pb-3">
                          <h3 className="font-['Courier_New'] font-bold text-green-400 text-lg tracking-wider drop-shadow-lg">
                            &gt; SOFTWARE_ENGINEER
                          </h3>
                          <p className="font-mono text-xs text-green-500 mt-1">
                            $ genAI backend infrastructure
                          </p>
                        </div>

                        {/* ABOUT TEXT - CRT GREEN */}
                        <div className="space-y-2 font-mono text-sm text-green-400">
                        {/* <p>
                            
                            &gt;&gt; I’m the kind of developer who still lives on Stack Overflow when things break,
                            mostly because I like understanding why they broke in the first place.
                            Curiosity tends to run the show — I try new tools the day they launch,
                            break them, rebuild things, and keep what actually works.
                          </p>
                          <p>
                            &gt;&gt; Technically, I’m a full-stack engineer with a strong backend bias,
                            and an AI enthusiast who prefers real systems over demos.
                            Right now, I’m juggling applications, side projects,
                            and data structures & algorithms (for life).
                          </p>
                            &gt;&gt; My hidden talent: a Wordle streak that’s survived for over a year —
                            with a few first-try wins. Honestly, that consistency beats my LeetCode stats.
                          <p> 
                            &gt;&gt; Favorite people include Padmasree Warrior (alive),
                            Tim Cook (alive in spirit, and very much on my phone),
                            and maybe you if you happen to be a recruiter hiring for an SDE :)
                            </p> */}


                            {/* <p>  
                              &gt;&gt; I build backend infrastructure that actually ships. 
                              Spent the last year shipping LLM orchestration systems and RAG platforms 
                              that reduced latency by 60%. I obsess over systems design—
                              why things work, why they break, how to make them faster.
                            </p>
                            <p>&gt;&gt; Right now: GenAI infrastructure at scale</p>
                              
                             <p>&gt;&gt; Also: data structures & algorithms, and an embarrassing 
                              Wordle streak that's somehow better than my LeetCode</p>  */}
                              
                              <p>
                                  &gt;&gt; I’m a developer who likes understanding why things break,
                                  not just how to patch them. Curiosity runs the show. I try new tools early,
                                  break them, rebuild them, and keep what actually works
                                </p>

                                <p>
                                  &gt;&gt; By training I’m full-stack, by instinct I lean backend.
                                  I enjoy building real systems, especially where GenAI meets production
                                </p>

                                <p>
                                  &gt;&gt; Fun fact: I’ve kept a Wordle streak alive for over a year.
                                  That consistency might be my most reliable algorithm so far
                                </p>
                
                          {/* </p> */}
                        
                          <p className="text-xs" style={{color: '#7a6a5a'}}>
                            [MS CompSci • 2+ yrs production • AWS certified]
                          </p>
                        </div>

                        {/* SKILLS SECTION - CRT GREEN */}
                        {/* <div className="border-t-2 border-green-500 pt-3 space-y-1">
                          <p className="font-mono text-xs font-bold text-green-400 uppercase">
                            ━━━ SKILLS ━━━
                          </p>
                          <ul className="space-y-1 text-xs font-mono text-green-400">
                            <li>$ python | fastapi | nodejs</li>
                            <li>$ aws | docker | kubernetes</li>
                            <li>$ llm-orchestration | rag-systems</li>
                          </ul>
                        </div> */}

                        {/* CTA - CRT GREEN */}
                        <div className="border-t-2 border-green-500 pt-3">
                          <p className="font-mono text-xs text-green-400">
                            $ seeking: SDE roles 
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* NAVIGATION - TERMINAL CRT STYLE */}
                    {/* <div className="mt-8 border-t-2 border-green-500 pt-3 flex gap-4 font-mono text-xs">
                      <button className="px-3 py-1 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-950 transition-all duration-100">
                        [projects]
                      </button>
                      <button className="px-3 py-1 border-2 border-green-500 bg-green-500 text-slate-950 cursor-default shadow-lg shadow-green-500/50">
                        [about]
                      </button>
                      <button className="px-3 py-1 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-slate-950 transition-all duration-100">
                        [contact]
                      </button>
                    </div> */}

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* MONITOR STAND - UNIVERSAL */}
          <div className="flex justify-center mt-4">
            <div className={`w-24 h-8 rounded-b-2xl shadow-lg ${
              isDark 
                ? 'bg-gradient-to-b from-slate-400 to-slate-600' 
                : ''
            }`} 
            style={!isDark ? {background: 'linear-gradient(to bottom, #d9d3c4, #c9bfb0)'} : {}} 
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default About










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








// import Image from "next/image"

// export function About() {
//   return (
//     <section id="about" className="py-20 bg-secondary">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="section-title mb-16">About Me</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="reveal">
//               <div className="relative aspect-square max-w-md mx-auto md:mx-0">
//                 <Image
//                   src="/images/avatar.png"
//                   alt="Sai Priya Veerabomma"
//                   fill
//                   className="object-contain"
//                   priority
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </div>

//             <div className="reveal">
//               <h3 className="text-2xl font-semibold mb-6">Software Developer</h3>

//               <div className="space-y-4 text-muted-foreground">
//                 {/* <p>
//                 Back in 2012, I channeled my creativity into designing custom boards and pins on Pinterest, which led me 
//                 to explore the world of coding and web development. This creative endeavor sparked a passion that has 
//                 carried me through various roles, from agile start-ups to large corporations.
//                 </p>

//                 <p>
//                 These days, my main focus is on building accessible, scalable and reliable applications. I enjoy working 
//                 at the intersection of design and engineering — creating solutions that look good and perform 
//                 exceptionally well. Currently, I have recently graduated with a Master of Science in Computer Software 
//                 Engineering degree at Northeastern University, engaging in projects like developing RAG engines and real-time chatbots.
//                 </p>

//                 <p>
//                 Professionally, As a Software Engineer at Cognizant Technology Solutions, I built scalable micro services
//                 based application, integrated and processed multiple IoT devices for web applications at Verizon and 
//                 optimized the user to server interaction using multi threaded programming and object oriented designing 
//                 principles. I have also excelled at using Sonarqube for code analysis and improving the security.
//                 </p>

//                 <p>
//                 During my free time I love to get my hands on different technologies and explore different tools by 
//                 getting my hands dirty, using the platforms and getting to know what the user is looking for. I have 
//                 recently developed a project that develops user intinerary  like a holiday planner using Agentic AI, 
//                 FastAPI.
//                 </p>

//                 <p>
//                 In addition to my technical skills, I served as the Vice President of Finance for the Graduate Student 
//                 Government at Northeastern University, managing a substantial budget and ensuring financial transparency.
//                 </p>

//                 <p>
//                 When I'm not at the computer, I'm usually doodling, editing videos, hanging out with my family, 
//                 or searching for the best Tiramisu in the city.
//                 </p>
              
//                 <p>
//                   Feel free to connect with me on LinkedIn or explore my projects on GitHub.
//                 </p> */}
//                 <p>
//                   I’m the kind of person who still lives on Stack Overflow, when things breaks see how they work, and always wants to try every new tool the day it launches. Curiosity just kinda runs the show for me.
//                 </p>
//                 <p>
//                   Technically I am a full stack developer, and an AI enthusiast. Right now, I’m juggling between applications, projects, data structures and algorithms(for life).
//                 </p>
//                 <p>
//                   My hidden talents would be I’ve kept a Wordle streak going for over a year even got a few on the first try. Honestly, it’s my proudest daily habit compared to leetcode.
//                 </p>
//                 <p>
//                   And the list of my favorite people would be Padmasree Warrior(alive), Tim Cook(dead but still lives in spirit and in my phone), and maybe I’ll add you to the list if you happen to be a recruiter looking for an SDE 😏
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }






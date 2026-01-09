"use client"

import { useState } from "react"
import { useTheme } from "next-themes"


/**
 * CONTACT SECTION - ACCURATE APPLE LISA MOUSE DESIGN
 * WITH PROPER BEVEL & SHELL LAYERING
 * 
 * Design Structure:
 * - OUTER SHELL: Thick plastic body (larger radius, darker, creates depth)
 * - RIM (optional): Thin edge lip separating materials
 * - INNER FACE: Flat display panel (smaller radius, lighter, inset)
 * 
 * Light direction: Top-left
 * - Top/left edges lighter (highlight)
 * - Bottom/right edges darker (shadow)
 */

export function ContactMacintosh() {
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)
  const { theme } = useTheme()

  const contactMethods = [
    {
      id: 1,
      icon: "📧",
      title: "Email",
      action: "mailto:priya.veerabomma1@gmail.com",
    },
    {
      id: 2,
      icon: "💼",
      title: "LinkedIn",
      action: "https://www.linkedin.com/in/priyaveerabomma",
    },
    {
      id: 3,
      icon: "💻",
      title: "GitHub",
      action: "https://github.com/priyaveerabomma",
    },
    {
      id: 4,
      icon: "📄",
      title: "Resume",
      value: "View PDF",
      action: "/Priya_Veerabomma_Resume.pdf",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

        /* POWER CONNECTOR */
        .lisa-power-connector {
          position: absolute;
          top: -110px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 14px;
          background: linear-gradient(135deg, #999 0%, #666 100%);
          border-radius: 2px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.3),
            inset 0 1px 2px rgba(255,255,255,0.3);
          z-index: 6;
        }

        .lisa-power-connector.dark {
          background: linear-gradient(135deg, #555 0%, #333 100%);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.5),
            inset 0 1px 2px rgba(255,255,255,0.1);
        }

        /* POWER CORD - THICK STRAIN RELIEF */
        .lisa-power-cord {
          position: absolute;
          top: -97px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 200px;
          background: linear-gradient(90deg, #8b8680 0%, #a89880 50%, #8b8680 100%);
          border-radius: 6px;
          box-shadow:
            0 0 8px rgba(0,0,0,0.2),
            inset -1px 0 2px rgba(255,255,255,0.3),
            inset 1px 0 2px rgba(0,0,0,0.2);
          z-index: 5;
        }

        .lisa-power-cord.dark {
          background: linear-gradient(90deg, #4a4a4a 0%, #5a5a5a 50%, #4a4a4a 100%);
          box-shadow:
            0 0 8px rgba(0,0,0,0.4),
            inset -1px 0 2px rgba(255,255,255,0.2),
            inset 1px 0 2px rgba(0,0,0,0.3);
        }

        /* ============================================
           LAYER 1: OUTER SHELL (THE BEVEL)
           This is the thick plastic body that creates depth
           ============================================ */
        .lisa-mouse-shell {
          position: relative;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          height: 460px;
          
          /* LARGEST corner radius - outer edge */
          border-radius: 28px;
          
          /* Slightly darker than inner face - creates shadow effect */
          background: linear-gradient(135deg, #d8d0c4 0%, #ccc4b8 50%, #bcb4a4 100%);
          
          /* Light direction: top-left
             Inset highlight on top/left (catches light)
             Inset shadow on bottom/right (falls into shadow) */
          box-shadow:
            /* External shadow for depth */
            0 60px 140px rgba(0,0,0,0.25),
            /* Inset top-left highlight (light direction) */
            inset 12px 12px 24px rgba(255,255,255,0.7),
            /* Inset bottom-right shadow (light direction) */
            inset -12px -12px 24px rgba(0,0,0,0.2);
          
          /* Padding = thickness of the bevel (creates the shell) */
          padding: 16px;
          
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .lisa-mouse-shell.dark {
          background: linear-gradient(135deg, #1a1a1a 0%, #141414 50%, #0a0a0a 100%);
          box-shadow:
            0 60px 140px rgba(0,0,0,0.5),
            inset 12px 12px 24px rgba(16, 185, 129, 0.1),
            inset -12px -12px 24px rgba(0,0,0,0.5);
        }

        /* ============================================
           OPTIONAL RIM (EDGE LIP)
           Separates materials, adds realism
           ============================================ */
        .lisa-mouse-shell::before {
          content: '';
          position: absolute;
          inset: 15px;
          border-radius: 24px;
          
          /* Rim color: between shell and face */
          background: linear-gradient(135deg, #c8bfb0 0%, #b8afa8 100%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .lisa-mouse-shell.dark::before {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0.4) 100%);
        }

        /* ============================================
           LAYER 2: INNER FACE (FLAT PANEL)
           This is the display surface, inset and flatter
           ============================================ */
        .lisa-mouse-body {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          
          /* SMALLER corner radius - crisper edges */
          border-radius: 20px;
          
          /* Light, warm beige for the face */
          background: linear-gradient(135deg, #e8e4d8 0%, #ddd3c8 50%, #d0cfc4 100%);
          
          /* Subtle inset shadows for depth */
          box-shadow:
            /* Top-left highlight (light direction) */
            inset 4px 4px 12px rgba(255,255,255,0.5),
            /* Bottom-right shadow (light direction) */
            inset -4px -4px 12px rgba(0,0,0,0.1),
            /* Subtle outer shadow to separate from shell */
            0 2px 4px rgba(0,0,0,0.08);
          
          /* Subtle border to define edge */
          border: 1px solid rgba(0,0,0,0.04);
          
          padding: 20px;
          
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          
          /* Top surface slopes gently downward */
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%);
        }

        .lisa-mouse-body.dark {
          background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 50%, #1a1a1a 100%);
          box-shadow:
            inset 4px 4px 12px rgba(16, 185, 129, 0.12),
            inset -4px -4px 12px rgba(0,0,0,0.3),
            0 2px 4px rgba(0,0,0,0.2),
            inset 0 0 8px rgba(16, 185, 129, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.08);
        }

        /* PRIMARY BUTTON - HORIZONTAL, INSET, TOP AREA */
        .lisa-button {
          width: 85%;
          height: 32px;
          margin-top: 16px;
          margin-bottom: 20px;
          
          border-radius: 6px;
          
          background: linear-gradient(180deg, #d9d3c4 0%, #c9bfb0 100%);
          border: 2px solid #8b7355;
          
          box-shadow:
            inset 0 2px 4px rgba(255,255,255,0.3),
            inset 0 -2px 4px rgba(0,0,0,0.1),
            0 2px 4px rgba(0,0,0,0.1);
          
          cursor: pointer;
          transition: all 0.2s ease;
          
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #3e2723;
          text-transform: uppercase;
          
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lisa-button:active {
          box-shadow:
            inset 0 3px 6px rgba(0,0,0,0.2),
            inset 0 -1px 2px rgba(255,255,255,0.1);
          transform: translateY(1px);
        }

        .lisa-button.dark {
          background: linear-gradient(180deg, #1f1f1f 0%, #1a1a1a 100%);
          border: 2px solid rgba(16, 185, 129, 0.4);
          color: #10b981;
          box-shadow:
            inset 0 2px 4px rgba(16, 185, 129, 0.1),
            inset 0 -2px 4px rgba(0,0,0,0.3),
            0 2px 4px rgba(0,0,0,0.2),
            0 0 10px rgba(16, 185, 129, 0.1);
        }

        /* INTERIOR CONTENT AREA */
        .lisa-mouse-interior {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 14px;
          padding: 10px 0;
        }

        /* HEADER */
        .lisa-header {
          text-align: center;
          margin-top: 4px;
        }

        .lisa-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #3e2723;
          text-transform: uppercase;
        }

        .lisa-title.dark {
          color: #10b981;
          text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
        }

        .lisa-subtitle {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          color: #8b7355;
          margin-top: 2px;
          letter-spacing: 1px;
        }

        .lisa-subtitle.dark {
          color: #a7f3d0;
        }

        /* CONTACT METHODS GRID - 2x2 */
        .lisa-methods-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          width: 100%;
          padding: 0 4px;
        }

        /* CONTACT METHOD BUTTON */
        .lisa-method-btn {
          background: linear-gradient(135deg, #f5f3f0 0%, #ebe7dc 100%);
          border: 2px solid #c9bfb0;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          box-shadow:
            0 4px 8px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.4);
          position: relative;
          overflow: hidden;
        }

        .lisa-method-btn.dark {
          background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
          border: 2px solid rgba(16, 185, 129, 0.3);
          box-shadow:
            0 4px 8px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(16, 185, 129, 0.1);
        }

        .lisa-method-btn:hover {
          background: linear-gradient(135deg, #ebe7dc 0%, #d9d3c4 100%);
          border-color: #8b7355;
          box-shadow:
            0 8px 16px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }

        .lisa-method-btn.dark:hover {
          background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
          border-color: #10b981;
          box-shadow:
            0 8px 16px rgba(16, 185, 129, 0.2),
            inset 0 1px 0 rgba(16, 185, 129, 0.2),
            0 0 20px rgba(16, 185, 129, 0.15);
        }

        .lisa-method-icon {
          font-size: 18px;
          line-height: 1;
        }

        .lisa-method-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #3e2723;
          text-transform: uppercase;
        }

        .lisa-method-btn.dark .lisa-method-title {
          color: #10b981;
        }

        .lisa-method-value {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 7px;
          color: #8b7355;
          word-break: break-word;
          text-align: center;
          line-height: 1.2;
        }

        .lisa-method-btn.dark .lisa-method-value {
          color: #a7f3d0;
        }

        /* APPLE LOGO (LOWER FRONT) - SMALL, UNDERSTATED */
        .lisa-apple-logo {
          position: absolute;
          bottom: 20px;
          left: 16px;
          width: 16px;
          height: 16px;
          
          background: 
            radial-gradient(circle at 30% 20%, transparent 0%, transparent 40%, #8b7355 41%, #8b7355 100%),
            linear-gradient(135deg, #8b7355 0%, #8b7355 100%);
          border-radius: 50% 50% 45% 45%;
          opacity: 0.5;
          
          box-shadow: 
            inset 0 -2px 2px rgba(0,0,0,0.2);
        }

        .lisa-apple-logo.dark {
          background: 
            radial-gradient(circle at 30% 20%, transparent 0%, transparent 40%, rgba(16, 185, 129, 0.4) 41%, rgba(16, 185, 129, 0.4) 100%),
            linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%);
          box-shadow: 
            inset 0 -2px 2px rgba(0,0,0,0.3);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .lisa-mouse-shell {
            max-width: 260px;
            height: 400px;
            padding: 14px;
            border-radius: 24px;
          }

          .lisa-mouse-shell::before {
            inset: 13px;
            border-radius: 20px;
          }

          .lisa-mouse-body {
            border-radius: 18px;
            padding: 16px;
          }

          .lisa-button {
            height: 28px;
            font-size: 8px;
            margin-top: 12px;
            margin-bottom: 16px;
          }

          .lisa-methods-grid {
            gap: 8px;
            padding: 0 2px;
          }

          .lisa-method-btn {
            padding: 8px;
            gap: 4px;
            border-radius: 5px;
          }

          .lisa-method-icon {
            font-size: 16px;
          }

          .lisa-method-title {
            font-size: 8px;
          }

          .lisa-method-value {
            font-size: 6px;
          }

          .lisa-title {
            font-size: 10px;
          }

          .lisa-header {
            margin-top: 2px;
          }

          .lisa-apple-logo {
            width: 14px;
            height: 14px;
            bottom: 16px;
            left: 14px;
          }
        }

        @media (max-width: 480px) {
          .lisa-mouse-shell {
            max-width: 220px;
            height: 360px;
            padding: 12px;
            border-radius: 40px;
          }

          .lisa-mouse-shell::before {
            inset: 11px;
            border-radius: 16px;
          }

          .lisa-mouse-body {
            border-radius: 14px;
            padding: 14px;
          }

          .lisa-button {
            height: 24px;
            font-size: 7px;
            margin-top: 10px;
            margin-bottom: 14px;
            width: 88%;
          }

          .lisa-methods-grid {
            gap: 6px;
            padding: 0;
          }

          .lisa-method-btn {
            padding: 6px;
            gap: 3px;
            border-radius: 4px;
            border: 1px solid #c9bfb0;
          }

          .lisa-method-btn.dark {
            border: 1px solid rgba(16, 185, 129, 0.3);
          }

          .lisa-method-icon {
            font-size: 14px;
          }

          .lisa-method-title {
            font-size: 7px;
          }

          .lisa-method-value {
            font-size: 6px;
          }

          .lisa-title {
            font-size: 9px;
            letter-spacing: 1px;
          }

          .lisa-subtitle {
            font-size: 14px;
          }

          .lisa-apple-logo {
            width: 12px;
            height: 12px;
            bottom: 14px;
            left: 12px;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Power Connector */}
          <div className={`lisa-power-connector ${theme === "dark" ? "dark" : ""}`}></div>

          {/* Power Cord - Thick Strain Relief */}
          <div className={`lisa-power-cord ${theme === "dark" ? "dark" : ""}`}></div>

          {/* ========================================
               APPLE LISA MOUSE - PROPER BEVEL DESIGN
               ======================================== */}

          {/* OUTER SHELL (thick plastic, creates depth) */}
          <div className={`lisa-mouse-shell ${theme === "dark" ? "dark" : ""}`}>
            
            {/* INNER FACE (flat panel, inset) */}
            <div className={`lisa-mouse-body ${theme === "dark" ? "dark" : ""}`}>

              {/* Primary Button - Horizontal, Inset, Top */}
              <div className={`lisa-button ${theme === "dark" ? "dark" : ""}`}>
                Connect
              </div>
              <div className={`lisa-subtitle ${theme === "dark" ? "dark" : ""}`}>
                $ reach_out
              </div>

              {/* Interior Content */}
              <div className="lisa-mouse-interior">
                {/* Contact Methods Grid */}
                <div className="lisa-methods-grid">
                  {contactMethods.map((method) => (
                    <a
                      key={method.id}
                      href={method.action}
                      onMouseEnter={() => setHoveredMethod(method.id)}
                      onMouseLeave={() => setHoveredMethod(null)}
                      className={`lisa-method-btn ${theme === "dark" ? "dark" : ""}`}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="lisa-method-icon">{method.icon}</div>
                      <div className="lisa-method-title">{method.title}</div>
                      {method.value && <div className="lisa-method-value">{method.value}</div>}
                    </a>
                  ))}
                </div>
              </div>

              {/* Apple Logo - Lower Front (Small, Understated) */}
              <div className={`lisa-apple-logo ${theme === "dark" ? "dark" : ""}`}></div>
            </div>
          </div>
        </div>
      </div>           
    </section>
  )
}

export default ContactMacintosh


















// "use client"

// import { useState } from "react"
// import { useTheme } from "next-themes"

// /**
//  * CONTACT SECTION - ACCURATE APPLE LISA MOUSE DESIGN
//  * 
//  * Based on Apple Lisa Mouse 1983 Design & Structure:
//  * - Truncated rectangular prism form factor
//  * - Nearly rectangular footprint with softly radiused corners
//  * - Portrait orientation (taller than wide)
//  * - Slight taper toward front
//  * - Bottom-heavy, grounded appearance
//  * - Sloped front face
//  * - Flat rear section
//  * - Single prominent horizontal button at top (inset)
//  * - Cable exits from TOP center
//  * - Warm beige/sand color palette
//  * - Matte finish
//  * - Early 1980s industrial minimalism
//  */

// export function ContactMacintosh() {
//   const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)
//   const { theme } = useTheme()

//   const contactMethods = [
//     {
//       id: 1,
//       icon: "📧",
//       title: "Email",
//       // value: "priya.veerabomma1@gmail.com",
//       action: "mailto:priya.veerabomma1@gmail.com",
//     },
//     {
//       id: 2,
//       icon: "💼",
//       title: "LinkedIn",
//       // value: "linkedin.com/in/priyaveerabomma",
//       action: "https://www.linkedin.com/in/priyaveerabomma",
//     },
//     {
//       id: 3,
//       icon: "💻",
//       title: "GitHub",
//       // value: "github.com/priyaveerabomma",
//       action: "https://github.com/priyaveerabomma",
//     },
//     {
//       id: 4,
//       icon: "📄",
//       title: "Resume",
//       value: "View PDF",
//       action: "/Priya_Veerabomma_Resume.pdf",
//     },
//   ]


//   return (
//     <section id="contact" className="py-20 relative">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

//         /* POWER CONNECTOR */
//         .lisa-power-connector {
//           position: absolute;
//           top: -100px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 20px;
//           height: 14px;
//           background: linear-gradient(135deg, #999 0%, #666 100%);
//           border-radius: 2px;
//           box-shadow:
//             0 2px 4px rgba(0,0,0,0.3),
//             inset 0 1px 2px rgba(255,255,255,0.3);
//           z-index: 6;
//         }

//         .lisa-power-connector.dark {
//           background: linear-gradient(135deg, #555 0%, #333 100%);
//           box-shadow:
//             0 2px 4px rgba(0,0,0,0.5),
//             inset 0 1px 2px rgba(255,255,255,0.1);
//         }

//         /* POWER CORD - THICK STRAIN RELIEF */
//         .lisa-power-cord {
//           position: absolute;
//           top: -87px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 12px;
//           height: 190px;
//           background: linear-gradient(90deg, #8b8680 0%, #a89880 50%, #8b8680 100%);
//           border-radius: 6px;
//           box-shadow:
//             0 0 8px rgba(0,0,0,0.2),
//             inset -1px 0 2px rgba(255,255,255,0.3),
//             inset 1px 0 2px rgba(0,0,0,0.2);
//           z-index: 5;
//         }

//         .lisa-power-cord.dark {
//           background: linear-gradient(90deg, #4a4a4a 0%, #5a5a5a 50%, #4a4a4a 100%);
//           box-shadow:
//             0 0 8px rgba(0,0,0,0.4),
//             inset -1px 0 2px rgba(255,255,255,0.2),
//             inset 1px 0 2px rgba(0,0,0,0.3);
//         }

//         /* MAIN MOUSE BODY - TRUNCATED RECTANGULAR PRISM */
//         .lisa-mouse-body {
//           position: relative;
//           width: 100%;
//           max-width: 280px;
//           margin: 0 auto;
          
//           /* Portrait orientation - taller than wide */
//           height: 420px;
          
//           /* Warm beige/sand tone - early 1980s Apple */
//           background: linear-gradient(135deg, #e8e4d8 0%, #d9d3c4 50%, #c9bfb0 100%);
          
//           /* Softly radiused corners (not sharp) */
//           border-radius: 16px;
          
//           /* Truncated rectangular prism effect with perspective */
//           box-shadow:
//             0 40px 100px rgba(0,0,0,0.15),
//             inset 0 1px 0 rgba(255,255,255,0.8),
//             inset 0 -2px 8px rgba(0,0,0,0.1),
//             inset -8px 0 20px rgba(0,0,0,0.05),
//             inset 8px 0 20px rgba(255,255,255,0.1);
          
//           /* Slight elevation from surface */
//           border: 2px solid rgba(0,0,0,0.03);
          
//           /* Padding for internal content */
//           padding: 20px;
          
//           /* Layout */
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-start;
//           align-items: center;
          
//           /* Top surface slopes gently downward */
//           clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%);
//         }

//         .lisa-mouse-body.dark {
//           background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 50%, #1a1a1a 100%);
//           box-shadow:
//             0 40px 100px rgba(0,0,0,0.4),
//             inset 0 1px 0 rgba(255,255,255,0.1),
//             inset 0 -2px 8px rgba(0,0,0,0.3),
//             inset -8px 0 20px rgba(0,0,0,0.3),
//             inset 8px 0 20px rgba(16, 185, 129, 0.05);
//           border: 2px solid rgba(16, 185, 129, 0.1);
//         }

//         /* PRIMARY BUTTON - HORIZONTAL, INSET, TOP AREA */
//         .lisa-button {
//           width: 85%;
//           height: 32px;
//           margin-top: 16px;
//           margin-bottom: 20px;
          
//           border-radius: 6px;
          
//           background: linear-gradient(180deg, #d9d3c4 0%, #c9bfb0 100%);
//           border: 2px solid #8b7355;
          
//           box-shadow:
//             inset 0 2px 4px rgba(255,255,255,0.3),
//             inset 0 -2px 4px rgba(0,0,0,0.1),
//             0 2px 4px rgba(0,0,0,0.1);
          
//           cursor: pointer;
//           transition: all 0.2s ease;
          
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 9px;
//           font-weight: bold;
//           letter-spacing: 1px;
//           color: #3e2723;
//           text-transform: uppercase;
          
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .lisa-button:active {
//           box-shadow:
//             inset 0 3px 6px rgba(0,0,0,0.2),
//             inset 0 -1px 2px rgba(255,255,255,0.1);
//           transform: translateY(1px);
//         }

//         .lisa-button.dark {
//           background: linear-gradient(180deg, #1f1f1f 0%, #1a1a1a 100%);
//           border: 2px solid rgba(16, 185, 129, 0.4);
//           color: #10b981;
//           box-shadow:
//             inset 0 2px 4px rgba(16, 185, 129, 0.1),
//             inset 0 -2px 4px rgba(0,0,0,0.3),
//             0 2px 4px rgba(0,0,0,0.2),
//             0 0 10px rgba(16, 185, 129, 0.1);
//         }

//         /* INTERIOR CONTENT AREA */
//         .lisa-mouse-interior {
//           width: 100%;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           gap: 14px;
//           padding: 10px 0;
//         }

//         /* HEADER */
//         .lisa-header {
//           text-align: center;
//           margin-top: 4px;
//         }

//         .lisa-title {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 11px;
//           font-weight: bold;
//           letter-spacing: 2px;
//           color: #3e2723;
//           text-transform: uppercase;
//         }

//         .lisa-title.dark {
//           color: #10b981;
//           text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
//         }

//         .lisa-subtitle {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 8px;
//           color: #8b7355;
//           margin-top: 2px;
//           letter-spacing: 1px;
//         }

//         .lisa-subtitle.dark {
//           color: #a7f3d0;
//         }

//         /* CONTACT METHODS GRID - 2x2 */
//         .lisa-methods-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 10px;
//           width: 100%;
//           padding: 0 4px;
//         }

//         /* CONTACT METHOD BUTTON */
//         .lisa-method-btn {
//           background: linear-gradient(135deg, #f5f3f0 0%, #ebe7dc 100%);
//           border: 2px solid #c9bfb0;
//           border-radius: 6px;
//           padding: 10px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 5px;
//           box-shadow:
//             0 4px 8px rgba(0,0,0,0.08),
//             inset 0 1px 0 rgba(255,255,255,0.4);
//           position: relative;
//           overflow: hidden;
//         }

//         .lisa-method-btn.dark {
//           background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
//           border: 2px solid rgba(16, 185, 129, 0.3);
//           box-shadow:
//             0 4px 8px rgba(0,0,0,0.2),
//             inset 0 1px 0 rgba(16, 185, 129, 0.1);
//         }

//         .lisa-method-btn:hover {
//           background: linear-gradient(135deg, #ebe7dc 0%, #d9d3c4 100%);
//           border-color: #8b7355;
//           box-shadow:
//             0 8px 16px rgba(0,0,0,0.15),
//             inset 0 1px 0 rgba(255,255,255,0.4);
//           transform: translateY(-2px);
//         }

//         .lisa-method-btn.dark:hover {
//           background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
//           border-color: #10b981;
//           box-shadow:
//             0 8px 16px rgba(16, 185, 129, 0.2),
//             inset 0 1px 0 rgba(16, 185, 129, 0.2),
//             0 0 20px rgba(16, 185, 129, 0.15);
//         }

//         .lisa-method-icon {
//           font-size: 18px;
//           line-height: 1;
//         }

//         .lisa-method-title {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 9px;
//           font-weight: bold;
//           letter-spacing: 1px;
//           color: #3e2723;
//           text-transform: uppercase;
//         }

//         .lisa-method-btn.dark .lisa-method-title {
//           color: #10b981;
//         }

//         .lisa-method-value {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 7px;
//           color: #8b7355;
//           word-break: break-word;
//           text-align: center;
//           line-height: 1.2;
//         }

//         .lisa-method-btn.dark .lisa-method-value {
//           color: #a7f3d0;
//         }

//         /* APPLE LOGO (LOWER FRONT) - SMALL, UNDERSTATED */
//         .lisa-apple-logo {
//           position: absolute;
//           bottom: 20px;
//           left: 16px;
//           width: 16px;
//           height: 16px;
          
//           background: 
//             radial-gradient(circle at 30% 20%, transparent 0%, transparent 40%, #8b7355 41%, #8b7355 100%),
//             linear-gradient(135deg, #8b7355 0%, #8b7355 100%);
//           border-radius: 50% 50% 45% 45%;
//           opacity: 0.5;
          
//           box-shadow: 
//             inset 0 -2px 2px rgba(0,0,0,0.2);
//         }

//         .lisa-apple-logo.dark {
//           background: 
//             radial-gradient(circle at 30% 20%, transparent 0%, transparent 40%, rgba(16, 185, 129, 0.4) 41%, rgba(16, 185, 129, 0.4) 100%),
//             linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%);
//           box-shadow: 
//             inset 0 -2px 2px rgba(0,0,0,0.3);
//         }

//         /* RESPONSIVE DESIGN */
//         @media (max-width: 768px) {
//           .lisa-mouse-body {
//             max-width: 240px;
//             height: 360px;
//             padding: 16px;
//             border-radius: 14px;
//           }

//           .lisa-button {
//             height: 28px;
//             font-size: 8px;
//             margin-top: 12px;
//             margin-bottom: 16px;
//           }

//           .lisa-methods-grid {
//             gap: 8px;
//             padding: 0 2px;
//           }

//           .lisa-method-btn {
//             padding: 8px;
//             gap: 4px;
//             border-radius: 5px;
//           }

//           .lisa-method-icon {
//             font-size: 16px;
//           }

//           .lisa-method-title {
//             font-size: 8px;
//           }

//           .lisa-method-value {
//             font-size: 6px;
//           }

//           .lisa-title {
//             font-size: 10px;
//           }

//           .lisa-subtitle {
//             font-size: 7px;
//           }

//           .lisa-header {
//             margin-top: 2px;
//           }

//           .lisa-apple-logo {
//             width: 14px;
//             height: 14px;
//             bottom: 16px;
//             left: 14px;
//           }
//         }

//         @media (max-width: 480px) {
//           .lisa-mouse-body {
//             max-width: 200px;
//             height: 320px;
//             padding: 14px;
//             border-radius: 12px;
//           }

//           .lisa-button {
//             height: 24px;
//             font-size: 7px;
//             margin-top: 10px;
//             margin-bottom: 14px;
//             width: 88%;
//           }

//           .lisa-methods-grid {
//             gap: 6px;
//             padding: 0;
//           }

//           .lisa-method-btn {
//             padding: 6px;
//             gap: 3px;
//             border-radius: 4px;
//             border: 1px solid #c9bfb0;
//           }

//           .lisa-method-btn.dark {
//             border: 1px solid rgba(16, 185, 129, 0.3);
//           }

//           .lisa-method-icon {
//             font-size: 14px;
//           }

//           .lisa-method-title {
//             font-size: 7px;
//           }

//           .lisa-method-value {
//             font-size: 6px;
//           }

//           .lisa-title {
//             font-size: 9px;
//             letter-spacing: 1px;
//           }

//           .lisa-subtitle {
//             font-size: 6px;
//           }

//           .lisa-apple-logo {
//             width: 12px;
//             height: 12px;
//             bottom: 14px;
//             left: 12px;
//           }
//         }
//       `}</style>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto">
//           {/* <h2 className="section-title mb-16 text-center">Contact</h2> */}

//           {/* Power Connector */}
//           <div className={`lisa-power-connector ${theme === "dark" ? "dark" : ""}`}></div>

//           {/* Power Cord - Thick Strain Relief */}
//           <div className={`lisa-power-cord ${theme === "dark" ? "dark" : ""}`}></div>

//           {/* Apple Lisa Mouse - Truncated Rectangular Prism */}
//           <div className={`lisa-mouse-body ${theme === "dark" ? "dark" : ""}`}>

//             {/* Primary Button - Horizontal, Inset, Top */}
//             <div className={`lisa-button ${theme === "dark" ? "dark" : ""}`}>
//               Connect
//             </div>
//             <div className={`lisa-subtitle ${theme === "dark" ? "dark" : ""}`}>
//               $ reach_out
//             </div>
//             {/* Interior Content */}
//             <div className="lisa-mouse-interior">
//               {/* Header */}
//               <div className="lisa-header">
//                 {/* <div className={`lisa-title ${theme === "dark" ? "dark" : ""}`}>
//                   Connect
//                 </div> */}
//                 {/* <div className={`lisa-subtitle ${theme === "dark" ? "dark" : ""}`}>
//                   $ reach_out
//                 </div> */}
//               </div>

//               {/* Contact Methods Grid */}
//               <div className="lisa-methods-grid">
//                 {contactMethods.map((method) => (
//                   <a
//                     key={method.id}
//                     href={method.action}
//                     onMouseEnter={() => setHoveredMethod(method.id)}
//                     onMouseLeave={() => setHoveredMethod(null)}
//                     className={`lisa-method-btn ${theme === "dark" ? "dark" : ""}`}
//                   >
//                     <div className="lisa-method-icon">{method.icon}</div>
//                     <div className="lisa-method-title">{method.title}</div>
//                     <div className="lisa-method-value">{method.value}</div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Apple Logo - Lower Front (Small, Understated) */}
//             <div className={`lisa-apple-logo ${theme === "dark" ? "dark" : ""}`}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactMacintosh

















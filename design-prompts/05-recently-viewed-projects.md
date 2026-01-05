# Prompt 5: ACN Home - Recently Viewed Projects

Design a horizontal scrollable section for recently viewed projects:

## SECTION HEADER
- Text: "Recently Viewed Projects" (18px, semi-bold, #1A1A1A)
- "View All" link on right (14px, primary color #0066CC with subtle arrow →)
- Margin: 24px top, 16px horizontal

## HORIZONTAL SCROLL
- Cards scroll horizontally with snap-to-point
- Show 1.3 cards at a time to indicate more content
- 12px gap between cards
- Padding: 0 16px horizontal
- Fade-out effect at right edge (subtle gradient overlay)

## PROJECT CARD (Width: 280px)
- White background (#FFFFFF)
- 12px border radius
- Shadow: 0 2px 12px rgba(0,0,0,0.08)

### IMAGE SECTION (Height: 160px)
- Property/project image (professional real estate photo)
- Subtle overlay gradient at bottom for text readability
- Top-left badge: "Premium" (small pill, gold background #FFD700, dark text)
- Top-right: Heart icon for shortlist (white with drop shadow, 32px touch target)
  - Outline style when not shortlisted
  - Filled red when shortlisted
- Bottom: Project name overlay on gradient "Prestige Lakeside" (white, 16px, semi-bold)

### CARD INFO SECTION (Padding: 12px)
- Project name: "Prestige Lakeside Habitat" (Bold, 16px, #1A1A1A, truncate after 2 lines)
- Location: "Varthur, Bangalore" (Gray #666666 with location pin icon, 13px)
- Price range: "₹85L - ₹1.5Cr" (Bold, primary color #0066CC, 15px)
- Property type pills: Small chips in gray outline style
  - "Resale" and "Rental" (10px text, 4px padding, rounded)
- Bottom row (12px text, gray #888888, with icons):
  - "2,3 BHK" with home icon
  - "1200-1800 sq.ft" with area/square icon
  - Separated by bullet or spacing

## EMPTY STATE (if no recent views)
- Illustration: Minimal property search graphic
- Text: "No recent views yet" (16px, gray)
- Subtext: "Properties you view will appear here" (14px, light gray)

## VISUAL STYLE
- Smooth scroll physics with momentum and rubber-banding effect
- Cards should feel premium and clickable
- Use real estate imagery style (modern apartment buildings, interiors)
- Consistent shadow and radius across cards

---

## Screen Dimensions
- Width: 390px
- Height: 320px (section with header and cards)

## Background
- Section background: Transparent (#F5F7FA page background visible)

# Prompt 6: ACN Home - Recently Viewed Requirements

Design a horizontal scrollable section for recently viewed requirements:

## SECTION HEADER
- Text: "Recently Viewed Requirements" (18px, semi-bold, #1A1A1A)
- "View All" link on right (14px, primary color #0066CC with arrow)
- Margin: 24px top, 16px horizontal

## HORIZONTAL SCROLL
- Cards scroll horizontally with snap-to-point
- Show 1.2 cards at a time to indicate more content
- 12px gap between cards
- Padding: 0 16px horizontal

## REQUIREMENT CARD (Width: 300px)
- White background (#FFFFFF)
- 12px border radius
- Border: 1px solid #E8E8E8
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Padding: 16px

### CARD LAYOUT

#### Header Row
- Left: "Requirement" label with document icon (small, gray #888888, 12px)
- Right: Status badge (pill shaped, 10px text, 6px vertical padding)
  - "Active" - Green background #E8F5E9, green text #2E7D32
  - "Matched" - Blue background #E3F2FD, blue text #1565C0
  - "Closed" - Gray background #F5F5F5, gray text #757575

#### Content Section
- Title: "Looking for 2 BHK Apartment" (16px, bold #1A1A1A, max 2 lines)
- Details (13px, gray #666666, with icons):
  - Location: "Koramangala, Bangalore" with pin icon
  - Budget: "₹50L - ₹80L" with rupee icon
  - BHK: "2, 3 BHK" with home icon
- Type badge: "Buy" (small outline pill, primary color border/text)
- Posted date: "2 days ago" (11px, gray #999999, bottom-right)

#### Footer
- Match indicator: "5 matching properties →" (primary color #0066CC, 13px, bold)
- Entire footer row tappable to navigate to matches

## EMPTY STATE
- When no requirements viewed:
- Illustration: Document with magnifying glass
- Text: "No requirements viewed yet"
- Subtext: "Requirements you view will appear here"

## VISUAL STYLE
- Cards should have clear hierarchy
- Status badges should be prominent
- Use consistent iconography (line icons, 16px)
- Smooth horizontal scroll with momentum

---

## Screen Dimensions
- Width: 390px
- Height: 280px (section with header and cards)

## Color Palette
- Primary: #0066CC
- Success/Active: #2E7D32 on #E8F5E9
- Info/Matched: #1565C0 on #E3F2FD
- Neutral/Closed: #757575 on #F5F5F5

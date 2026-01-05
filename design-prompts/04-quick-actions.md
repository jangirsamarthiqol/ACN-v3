# Prompt 4: ACN Home - Quick Actions Overview

Design an actionable overview section showing key metrics and quick actions:

## SECTION HEADER
- Text: "Quick Actions" (18px, semi-bold, #1A1A1A)
- Margin: 24px top, 16px sides
- Optional "View All" link on right (14px, primary color #0066CC)

## GRID LAYOUT (2x2)
- 4 cards in grid with 12px gap
- Equal sizing, responsive (card width: ~175px each)
- Card background: White (#FFFFFF)
- Border radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Padding: 16px

## CARD CONTENT

### Card 1 - "Delist" Card (Top Left)
- Icon: Trash/remove icon (red tint #FF5252)
- Count badge: Large number "12" (24px, bold, #1A1A1A)
- Label: "Properties to Delist" (12px, gray #666666)
- Left accent border: 3px solid #FF5252 (red)
- Background: White with very subtle red tint

### Card 2 - "New Enquiry" Card (Top Right)
- Icon: Mail/message icon (blue tint #0066CC)
- Count badge with notification dot: "8" with red dot
- Label: "New Enquiries"
- Left accent border: 3px solid #0066CC (blue)
- Badge: Small red circle if unread

### Card 3 - "New Matching" Card (Bottom Left)
- Icon: Link/match/connection icon (green tint #00C853)
- Count badge: "15"
- Label: "New Matches"
- Left accent border: 3px solid #00C853 (green)

### Card 4 - "Deal Tracking" Card (Bottom Right)
- Icon: Chart/progress/pie icon (orange tint #FF9800)
- Count badge: "5"
- Label: "Active Deals"
- Left accent border: 3px solid #FF9800 (orange)

## INTERACTION STATES
- Press state: Scale 0.97 with subtle shadow increase
- Ripple effect on tap (Material style)
- Each card clearly tappable (navigates to respective section)

## VISUAL STYLE
- Use clean, modern iconography (Lucide or Feather icons style)
- Numbers should be prominent and scannable
- Cards should feel tappable and interactive
- Consistent icon size: 24px
- Icon positioned top-left of card

---

## Screen Dimensions
- Width: 390px
- Height: 280px (section including header and grid)

## Background
- Section background: Transparent (shows #F5F7FA page background)

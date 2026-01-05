# Prompt 9: Search Results Screen

Design a search results listing page with filtering:

## HEADER (Sticky, fixed at top)
- Back button (left, 44px)
- Search query chip (center):
  - "Koramangala" in pill with light background
  - Edit/pencil icon (right of text, small)
  - Tap to go back to search screen
- Filter button (right):
  - Filter icon
  - Badge with number if filters active ("3")

## RESULTS INFO BAR (Below header)
- Left: "245 Properties found" (14px, gray #666666)
- Right: Sort dropdown button
  - "Relevance ▾" (14px, primary color)
  - Tap opens sort options:
    - Relevance (selected, checkmark)
    - Price: Low to High
    - Price: High to Low
    - Newest First
    - Area: Large to Small

## FILTER BAR (Horizontal scroll, below results info)
- Quick filter chips (horizontal scroll)
- Chips: "Price ▾", "BHK ▾", "Property Type ▾", "Possession ▾", "More Filters ▾"
- Active filters show differently:
  - "₹50L - 1Cr ×" (primary color background, white text, × to remove)
  - "2,3 BHK ×" (same style)
- Inactive filters: White background, gray border, dropdown arrow

## VIEW TOGGLE (Right side, inline with filter bar)
- Grid/List view icons
- Active view: Primary color
- Inactive: Gray

## RESULTS LIST (Scrollable content)

### LIST VIEW PROPERTY CARD (Default)
- White background (#FFFFFF)
- 12px border radius
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Margin: 12px horizontal, 10px vertical gap
- Horizontal layout

#### Left Side (120px width)
- Property image (aspect ratio ~4:3)
- Badge overlay (top-left):
  - "Premium" (gold/yellow)
  - "Verified ✓" (green)
  - "New" (blue)
- Bottom-left: Image count "1/8" with camera icon (small pill, dark bg)

#### Right Side (Padding: 12px)

**Top Row:**
- Price: "₹85 Lakhs" (18px, bold, primary color #0066CC)
- Shortlist heart icon (top-right, outline when not saved, filled red when saved)

**Middle Section:**
- Property name: "Prestige Sunset Park" (16px, semi-bold, #1A1A1A, 1 line max)
- Location: "Koramangala, Bangalore" (13px, gray #666666, with pin icon)
- Config: "2 BHK | 1200 sq.ft" (13px, gray, with icons)

**Bottom Section:**
- Type badge: "Resale" (small pill, outline style)
- Match indicator (if from requirement search):
  - "92% Match" with progress bar (green gradient)
- Posted: "2 days ago" (11px, gray #999999, right-aligned)

#### Action Buttons (Card footer)
- Two buttons side-by-side, full card width
- "View Details" (outline button, 36px height)
- "Enquire Now" (filled primary button, 36px height)
- Gap: 8px between buttons

## INFINITE SCROLL BEHAVIOR
- Load more properties on scroll
- Loading state: Skeleton card placeholders (3 cards)
- End state: "No more results" message with divider

## FLOATING ACTION BUTTON (Bottom-right)
- Circular, primary color (#0066CC)
- Map icon (white)
- Shadow for elevation
- Label on first view: "Map View" (tooltip/badge)
- Position: 16px from right and bottom

---

## Screen Dimensions
- Width: 390px
- Height: 844px (full screen)

## Example Data
1. "Prestige Sunset Park" - ₹85L - 2 BHK - Koramangala
2. "Brigade Orchards" - ₹1.2Cr - 3 BHK - Whitefield
3. "Sobha Dream Gardens" - ₹95L - 2 BHK - HSR Layout

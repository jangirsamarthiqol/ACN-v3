# Prompt 8: Dedicated Search Screen

Design a full-screen search interface for properties and requirements:

## HEADER (Fixed, top)
- Back button (left, 44px touch target)
- Search input field (expanded, flex grow):
  - Large, prominent (56px height)
  - White background (#FFFFFF)
  - Subtle border: 1px solid #E0E0E0
  - Border radius: 12px
  - Search icon inside left (gray #888888, 20px)
  - Clear "×" button when text entered (right, gray, 20px)
  - Placeholder: "Search by location, project, or keyword" (16px, #999999)
  - Active cursor shown
- Filter button (right, 44px touch target):
  - Filter icon
  - Badge shows count if filters applied (small red circle with number)

## SEARCH MODE TOGGLE (Below header, 12px gap)
- Segmented control (full width, 16px side margins)
- 2 options: "Properties" (default selected) | "Requirements"
- Active segment: Primary color background (#0066CC), white text
- Inactive segment: Light gray background (#F0F0F0), gray text (#666666)
- Smooth sliding indicator animation
- Height: 44px
- Border radius: 12px (container)
- Each segment has 8px radius

## RECENT SEARCHES SECTION
- Header: "Recent Searches" with "Clear All" link (right, primary color)
- 16px top margin
- List items (each 52px height):
  - Clock/history icon (left, gray #888888)
  - Search text: "2 BHK in Koramangala" (16px, #1A1A1A)
  - "×" delete icon (right, gray #999999)
  - Thin divider line (#E8E8E8) between items
- Show last 5 searches max
- Tap item to reuse that search query

## TOP/TRENDING SEARCHES SECTION
- Header: "Trending Searches" (16px, semi-bold, #1A1A1A)
- 24px top margin
- Pill-style chips in flowing wrap layout:
  - Examples: "Whitefield", "3 BHK", "Under 1 Cr", "Premium Apartments", "HSR Layout"
  - White background (#FFFFFF)
  - Gray border (1px, #E0E0E0)
  - Padding: 10px 16px
  - Border radius: 20px (fully rounded)
  - Text: 14px, #1A1A1A
  - Gap: 8px between chips
  - Wrap to multiple lines
  - Tap to apply search term

## QUICK FILTERS (Below trending, contextual)

### For Properties mode:
- Horizontal scrollable chips row
- "2 BHK", "3 BHK", "4 BHK", "Apartment", "Villa", "Plot"
- Price ranges: "< 50L", "50L-1Cr", "1Cr-2Cr", "> 2Cr"
- Outline style, tappable to filter

### For Requirements mode:
- "Looking to Buy", "Looking to Rent", "Budget Defined", "Urgent"

## KEYBOARD
- Auto-focus on screen entry (show keyboard)
- Search button on keyboard triggers search action
- Smooth keyboard handling with content adjustment

## EMPTY/NO RESULTS STATE
- When typing with no results:
- Illustration: Search with no results
- Text: "No results found for 'xyz'"
- Suggestions below

---

## Screen Dimensions
- Width: 390px
- Height: 844px (full screen)

## Background
- White (#FFFFFF) or very light (#FAFAFA)

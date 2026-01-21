# Prompt 10: Filter Bottom Sheet

Design a comprehensive filter modal/bottom sheet:

## SHEET CONTAINER
- Bottom sheet modal (slides up from bottom)
- Height: 85% of screen (can drag to dismiss)
- White background (#FFFFFF)
- Border radius: 24px (top corners only)
- Shadow: 0 -4px 20px rgba(0,0,0,0.15)
- Backdrop: Dark overlay (black 50% opacity)

## SHEET HEADER
- Handle bar at top (centered, gray #CCCCCC, 40px wide, 4px height, 2px radius)
- 8px margin top
- Title: "Filters" (20px, bold, #1A1A1A, center)
- "Reset All" link (right, primary color #0066CC, 14px)
- Close "×" button (left, 24px, gray #666666)
- Thin divider line below (#E8E8E8)
- Header height: 56px

## SHEET CONTENT (Scrollable)
- Padding: 16px horizontal
- Each section has 24px margin top

### SECTION 1 - PROPERTY TYPE
- Label: "Inventory Type" (16px, semi-bold, #1A1A1A)
- 12px gap below label
- Multi-select chips (wrap to multiple rows):
  - "Apartment", "Villa", "Plot", "Commercial", "PG"
  - Selected: Primary color fill (#0066CC), white text
  - Unselected: White background, border 1px #E0E0E0, gray text
  - Chip height: 40px, padding: 0 16px
  - Border radius: 20px
  - Gap: 8px between chips

### SECTION 2 - PRICE RANGE
- Label: "Price Range" (16px, semi-bold)
- Dual-handle range slider:
  - Track: Light gray (#E0E0E0), 4px height
  - Active track: Primary color (#0066CC)
  - Handles: White circles with primary border, 24px diameter
  - Min/Max value labels above handles: "₹25L" and "₹1.5Cr"
- Range: 0 to 10Cr with smart increments
- Quick select chips below: "< 50L", "50L-1Cr", "1-2Cr", "> 2Cr"
- Custom input link: "Enter custom range" (14px, primary color)

### SECTION 3 - BHK CONFIGURATION
- Label: "BHK Type" (16px, semi-bold)
- Chip selection: "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"
- Multi-select enabled
- Selected state has checkmark icon inside chip

### SECTION 4 - AREA RANGE
- Label: "Carpet Area" (16px, semi-bold)
- Range slider: 0 - 5000 sq.ft
- Same slider style as price
- Unit toggle below: "sq.ft" | "sq.m" (segmented control, small)

### SECTION 5 - LOCATION
- Label: "Preferred Locations" (16px, semi-bold)
- Search input: "Add location..." (with search icon)
  - White background, gray border, 44px height
- Selected locations as removable chips below:
  - "Koramangala ×", "Whitefield ×"
  - Primary color background, white text
- Auto-suggested: Popular locations (gray chips)

### SECTION 6 - AMENITIES (Expandable)
- Label: "Amenities" with expand/collapse chevron
- Collapsed by default (shows "6 selected" if any)
- Grid of options when expanded (3 columns):
  - "Parking", "Gym", "Pool", "Security", "Power Backup", "Lift", "Garden", "Club House"
  - Checkbox style with icons
  - Selected: Primary color checkmark and text
  - Unselected: Gray

### SECTION 7 - POSSESSION STATUS
- Label: "Possession Status" (16px, semi-bold)
- Radio buttons (only one selectable):
  - "Ready to Move" (green dot)
  - "Under Construction" (orange dot)
  - "Any" (gray dot, default selected)
- Radio style: Outlined circle, filled when selected

### SECTION 8 - POSTED DATE
- Label: "Posted Within" (16px, semi-bold)
- Single select chips: "24 Hours", "7 Days", "30 Days", "Any Time"
- Selected chip: Primary color fill

### SECTION 9 - ADDITIONAL TOGGLES
- Toggle switches with labels:
  - "Verified Properties Only" (toggle right)
  - "With Photos Only"
  - "Negotiable Price"
- Toggle: Pill shape, primary color when on, gray when off

## FOOTER (Sticky at bottom)
- White background with top shadow
- Height: 72px with padding
- Two buttons side-by-side:
  - "Clear All" (outline button, 48px height)
  - "Show 245 Results" (filled primary button, 48px height)
- Gap: 12px between buttons
- 16px horizontal padding
- Button count updates dynamically based on filter

---

## Screen Dimensions
- Width: 390px
- Height: 716px (85% of 844px)

## Interaction
- Smooth slide-up animation (300ms)
- Drag down to dismiss
- Tap backdrop to dismiss
- Filters apply in real-time (count updates)

# Prompt 14: My Business - My Requirements List

Design the requirements management screen:

## HEADER
- Back button (left, 44px)
- Title: "My Requirements" (20px, bold, center)
- Add button: "+ Add Requirement" (right, primary color #0066CC)

## TOGGLE (Below header)
- Segmented control: "Buy (18)" | "Rent (12)" | "Commercial (3)"
- Count badges in each segment
- Active: Primary fill, white text
- Height: 44px, 16px margins, 12px radius

## SEARCH & FILTER
- Search bar: "Search requirements..." (placeholder)
  - Search icon left, 48px height
  - White background, subtle border
- Filter chips (horizontal scroll, below search):
  - "Status ▾", "Budget ▾", "Location ▾", "BHK ▾", "Posted Date ▾"
  - Outline style, tap to open filter

## BULK SELECTION BAR (When items selected)
- Floating/sticky at top
- "3 selected | Update Status | Delete"
- Checkbox for select all

## REQUIREMENT CARDS (List)
- White background (#FFFFFF)
- 12px border radius
- 16px margin bottom
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Padding: 16px

### Card Layout

#### Header Row
- Left: Checkbox (for selection)
- Requirement ID: "#REQ5678" (11px, gray #888888)
- Right: Status badge (pill):
  - "Active" - Green bg (#E8F5E9), green text (#2E7D32)
  - "Matched" - Blue bg (#E3F2FD), blue text (#1565C0)
  - "Fulfilled" - Purple bg (#F3E5F5), purple text (#7B1FA2)
  - "Closed" - Gray bg (#F5F5F5), gray text (#757575)
- Three-dot menu (far right):
  - Edit, Share, Change Status, Delete

#### Main Content
- Title (generated or custom):
  - "Looking for 2 BHK in Koramangala" (16px, semi-bold, #1A1A1A)
  - Primary color link style
  - Tap to expand details

#### Details Grid (2 columns)
- Budget: "₹50L - ₹80L" with ₹ icon
- Location: "Koramangala, Bangalore" with pin icon
- BHK: "2, 3 BHK" with home icon
- Area: "1000 - 1500 sq.ft" with area icon
- Text size: 13px, gray #666666
- Icons: 16px, matching text color

#### Type Badge
- "Buy" or "Rent" (small outline pill, primary color border/text)
- "Apartment" type badge next to it

#### Client Info Row
- Small avatar (24px) + "Priya Desai"
- Phone masked: "******7890" (tap to reveal with permission)
- Relationship chip: "Direct Client"

#### Stats Row (Light background strip)
- Background: #F8F9FA
- Padding: 10px
- Border radius: 8px
- Stats:
  - Matches: "23 Properties Match" with link icon (primary color, clickable)
  - Enquiries: "5 Enquiries Sent" with mail icon (clickable)
  - Views: "67 Profile Views" with eye icon

#### Match Indicator (Prominent)
- Visual progress bar (gradient green)
- "23 Properties Match (12 New)" in primary color
- Small thumbnail previews of top 3 matching properties (optional)

#### Metadata Row
- Posted date: "Posted 1 week ago" (11px, gray)
- Last updated: "Updated 2 days ago" (11px, gray)
- Expires: "Valid for 23 more days" (if applicable, with warning if <7 days)

#### Action Buttons (Footer)
- Two buttons:
  - "View Matches" (outline, full width if single)
  - "Enquire Properties" (filled primary)
  - Height: 40px

### Expanded State (When card tapped)
- Card expands to show:
  - Full description text
  - Detailed preferences (all criteria)
  - Amenities needed checklist
  - Additional notes section
  - Mini activity timeline

## FILTER STATES
- Active filters: "Showing 12 of 23 requirements" (12px, gray)
- "Clear all filters" link (primary color)

## SORTING
- Dropdown at top right: "Sort by:"
- Options: Newest, Budget (High-Low), Budget (Low-High), Matches, Status

## EMPTY STATE
- Illustration: Document search graphic
- Text: "No requirements added yet" (18px, bold)
- Subtext: "Add a requirement to find matching properties" (14px, gray)
- Button: "Add Requirement" (large, primary, filled)

## FLOATING ACTION BUTTON
- Bottom-right, circular (56px)
- Purple/teal accent color (to differentiate from Properties)
- "+" icon
- Shadow for elevation

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable)

## Color Accent
- Use purple/teal accent for Requirements section (#8B5CF6 or #00BCD4)
- Differentiates from Properties (blue) section

# Prompt 12: My Business - My Properties List

Design the My Properties management screen:

## HEADER
- Back button (left, 44px)
- Title: "My Properties" (20px, bold, center, #1A1A1A)
- Add button: "+ Add Inventory" (right, primary color #0066CC text, or icon)

## TOGGLE & FILTERS
- Segmented control (full width, 16px margins):
  - "Resale (34)" | "Rental (18)" | "Commercial (5)"
  - Active: Primary fill, white text, count in parentheses
  - Inactive: Light gray background, gray text
  - Height: 44px, 12px radius
- Search bar (below, 16px margins):
  - "Search your properties..." placeholder
  - Search icon left, 48px height
  - White background, subtle border
- Filter row (horizontal scroll):
  - Dropdowns: "Status: All ▾", "BHK: All ▾", "Location ▾", "Price Range ▾"
  - Active filter: Shows applied value, × to clear

## BULK ACTIONS BAR (Appears when items selected)
- Floating or sticky bar at top
- Left: Checkbox + "5 selected" (text)
- Actions: "Update Status", "Delete", "Share" (icon buttons)
- "Select All" option (right)
- Background: White with shadow

## PROPERTY CARDS (List view)
- White background (#FFFFFF), 12px border radius
- 12px margin horizontal, 10px gap vertical
- Shadow: 0 2px 8px rgba(0,0,0,0.06)

### Card Layout (Horizontal)

#### Checkbox (Left edge)
- Selection checkbox for bulk actions
- 24px, gray when unselected, primary when selected

#### Image Section (120px width)
- Inventory image (aspect 3:2)
- Status badge overlay (top-left):
  - "Active" - Green pill (#4CAF50)
  - "Inactive" - Gray pill (#9E9E9E)
  - "Under Review" - Orange pill (#FF9800)
  - "Delisted" - Red pill (#F44336)
- Edit image icon (bottom-right corner, small camera)

#### Content Section (Right, padding 12px)

**Header Row:**
- Inventory ID: "#ACN12345" (11px, gray #888888)
- Three-dot menu (right):
  - Options: Edit, Share, Change Status, Delete

**Main Content:**
- Inventory title: "3 BHK Apartment" (16px, semi-bold, #1A1A1A)
- Project: "Prestige Lakeside Habitat" (14px, primary color, clickable link)
- Location: "Varthur, Bangalore" (13px, gray, with pin icon)
- Details row (12px, gray):
  - "1450 sq.ft" with area icon
  - "3 BHK" with home icon
  - "2 Bathrooms" with bath icon
- Price: "₹1.2 Cr" (18px, bold, primary color #0066CC)
- Negotiable badge (if applicable, small pill)

**Info Row:**
- Inventory type: "Apartment" (outline pill)
- Listing type: "Resale" (outline pill)
- Posted: "5 days ago" (11px, gray)

**Stats Row (Light gray background strip):**
- Padding: 8px, margin: 8px 0
- Border radius: 8px
- Icons with numbers:
  - Views: "234 👁"
  - Enquiries: "12 📧" (clickable, primary color)
  - Matches: "8 🔗" (clickable)
  - Shortlisted: "15 ❤️"

**Client Tag (If associated):**
- Small chip: "Client: Rahul Sharma" with small avatar

**Footer Actions:**
- Two buttons side-by-side:
  - "View Matches" (outline, 36px height)
  - "View Details" (filled primary, 36px height)

## SORTING DROPDOWN
- Top right above list: "Sort by: Newest ▾"
- Options: Newest, Price, Location, Status, Enquiries

## FLOATING ACTION BUTTON
- Bottom-right, circular (56px), primary color
- "+" icon (white)
- Shadow for elevation
- "Add Inventory" on first tap/tooltip

## EMPTY STATE
- Illustration: Empty folder/inventory outline
- Text: "No properties added yet" (18px, bold)
- Subtext: "Add your first inventory to start managing your inventory" (14px, gray)
- Button: "Add Inventory" (large, primary, filled)

## FILTER RESULTS INFO
- Above list: "Showing 34 of 48 properties" (12px, gray)
- "Clear filters" link if filters applied

---

## Screen Dimensions
- Width: 390px
- Height: 844px (full screen, scrollable)

## Background
- #F5F7FA (light gray-blue)

# Prompt 13: My Business - Property Detail/Edit

Design a comprehensive property detail and edit screen:

## HEADER (Sticky)
- Back button (left, 44px touch target)
- Property ID: "#ACN12345" (center, 16px, #666666)
- Three-dot menu (right):
  - Options: Share, Delete, Duplicate

## MODE TOGGLE (Below header)
- Two tabs: "View" | "Edit"
- Pill-style toggle
- Active tab: Primary color background, white text
- Inactive: Light gray background
- Sliding indicator animation
- Height: 40px

## IMAGE GALLERY (Top section)
- Large image carousel (height: 280px)
- Swipeable images with smooth transitions
- Dot indicators at bottom
- Image counter: "3/8" (top-right, semi-transparent pill)
- In Edit mode additions:
  - Add photo button (dashed border card at end)
  - Delete icon on each image (top-right of each)
  - "Set as Cover" button on images
  - Drag handles for reordering

## STATUS BANNER (If not active)
- Full-width colored banner below gallery
- "This property is currently Inactive"
- "Activate Now" button (white outline)
- Colors: Orange for Inactive, Red for Delisted, Yellow for Under Review

## INFORMATION SECTIONS

### SECTION 1 - BASIC INFO
- Section header: "Basic Information" (16px, semi-bold, #1A1A1A)
- Card: White, 12px radius, shadow, 16px padding
- Divider between sections

**View Mode:**
- Label: Value pairs in clean rows
- Labels: 13px, gray #888888
- Values: 15px, #1A1A1A

**Edit Mode:**
- Input fields with floating labels
- Required field indicator (red asterisk)

**Fields:**
- Property Type: Dropdown (Apartment, Villa, Plot, etc.)
- Listing Type: Radio cards (Resale / Rental)
- Property Title: Text input
- Project Name: Searchable dropdown + "+ Add New Project" link
- Configuration: "3 BHK" dropdown
- Carpet Area: Number input + unit selector (sq.ft / sq.m)
- Built-up Area: Optional number input (grayed label)
- Floor: Dropdown ("Ground", "1", "2"... "Penthouse")
- Total Floors: Number input
- Furnishing: Chips (Unfurnished, Semi-furnished, Fully furnished)
- Possession Status: Dropdown
- Age of Property: Number input (years)

### SECTION 2 - PRICING
- Section header: "Pricing" (16px, semi-bold)
- Card style same as above

**Fields:**
- Price: Large number input with "₹" prefix (28px font for value)
- Negotiable: Toggle switch (with label)
- Price per sq.ft: Auto-calculated, gray text, non-editable
- Maintenance: Number input (monthly)
- Deposit (for rental): Number input
- Expected Rental (for resale): Optional input

### SECTION 3 - LOCATION
- Section header: "Location" (16px, semi-bold)

**Fields:**
- Address: Multi-line text input (3 lines)
- Landmark: Text input
- Locality: Searchable dropdown
- City: Dropdown (Bangalore default)
- Pin Code: Number input (6 digits)
- Map preview (View mode):
  - 160px height map with property pin
  - "Get Directions" link
- Map (Edit mode):
  - Drag pin interaction
  - "Select on Map" button

### SECTION 4 - AMENITIES
- Section header: "Amenities" (16px, semi-bold)
- Grid of checkboxes with icons (3 columns)

**Items:**
- Parking (with count input: "2 spaces")
- Gym, Pool, Club House
- Security (24/7), Power Backup, Lift
- Garden, Play Area, Maintenance Staff

**View Mode:**
- Only show selected amenities with icons (green checkmarks)

**Edit Mode:**
- Full grid with toggleable checkboxes

### SECTION 5 - DESCRIPTION
- Section header: "Description" (16px, semi-bold)

**View Mode:**
- Readable paragraph text
- "Read more" / "Read less" toggle if long

**Edit Mode:**
- Rich text area (500 char limit)
- Character counter: "245/500"
- Note: "Phone numbers will be auto-masked"

### SECTION 6 - ADDITIONAL DETAILS
- Expandable section (collapsed by default)
- Chevron to expand

**Fields (when expanded):**
- Facing: Dropdown (North, South, East, West, NE, NW, SE, SW)
- Overlooking: Text input
- Flooring: Dropdown (Marble, Vitrified, Wooden, etc.)
- Water Supply: Dropdown (Corporation, Borewell, Both)
- Car Parking: Number selector
- Two Wheeler Parking: Number selector

### SECTION 7 - DOCUMENTS (View mode only)
- Section header: "Documents" (16px, semi-bold)
- List of uploaded documents
- Each: Document icon, name, view/download buttons
- Edit mode: File upload interface

### SECTION 8 - CLIENT ASSOCIATION
- Section header: "Client Information" (16px, semi-bold)
- Privacy note: Lock icon + "This information is private"

**Fields:**
- Client Name: Text input (or select from contacts)
- Client Phone: Number input (masked display: ******7890)
- Relationship: Dropdown (Owner, Broker, Direct Client)
- Private Notes: Text area

## MATCHING REQUIREMENTS (View mode only)
- Section header: "8 Matching Requirements" with "View All →"
- Horizontal scroll: 3 preview cards
- Each card:
  - Requirement summary
  - Match %: "92% Match" with color indicator
  - "Enquire" button

## ENQUIRIES SECTION (View mode only)
- Tab toggle: "Received (12)" | "Sent (5)"
- List of enquiry cards
- Each: Agent name, date, status pill, "Respond" button

## ACTIVITY LOG
- Section header: "Activity Log" (16px, semi-bold)
- Timeline of property changes
- "Created on Jan 1, 2026" with user
- "Price updated on Jan 3" with old→new value
- "Status changed to Active on Jan 4"

## FOOTER (Sticky)

**Edit mode:**
- Two buttons:
  - "Cancel" (outline)
  - "Save Changes" (primary, filled)
  - Disabled state when no changes
- Auto-save indicator (optional): "Last saved 2 min ago"

**View mode:**
- Two buttons:
  - "Edit Property" (outline)
  - "Share Property" (primary, filled)

## VALIDATION (Edit mode)
- Required field indicators (red asterisk)
- Inline error messages (red text below field)
- Success toast on save: "Property updated successfully"

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable content)

## Background
- #F5F7FA

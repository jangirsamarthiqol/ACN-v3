# Prompt 15: My Business - Add/Edit Requirement Form

Design the add/edit requirement form wizard:

## HEADER
- Back button (left)
- Title: "Add Requirement" or "Edit Requirement" (20px, bold, center)
- Save button (right, primary color, disabled until valid)

## PROGRESS INDICATOR (For add flow)
- Horizontal step indicator
- Steps: "Basic Info" → "Preferences" → "Client Details"
- Active step: Primary color dot + bold text
- Completed: Green checkmark
- Future: Gray dot + light text
- Can tap to navigate between completed steps
- Progress bar connecting dots

## FORM SECTIONS

### SECTION 1 - BASIC INFORMATION
- Header: "Basic Information" (16px, semi-bold, #1A1A1A)
- Card: White, 12px radius, shadow, 16px padding

**Transaction Type:**
- Large radio cards (horizontal, 2 cards):
  - "Looking to Buy" with shopping bag icon
  - "Looking to Rent" with key icon
- Selected: Primary border + fill tint
- Full width, height: 80px each
- Icon above text (centered)

**Inventory Type:**
- Label: "Inventory Type" (14px, gray)
- Multi-select chips (wrap layout):
  - "Apartment", "Villa", "Plot", "Commercial", "PG"
- Selected: Primary fill, white text, checkmark
- Unselected: White bg, gray border
- "Select all that apply" helper text

**BHK Configuration:**
- Label: "BHK Configuration"
- Chip selection: "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"
- Multi-select enabled
- Helper text: "Select all that apply"

**Budget Range:**
- Label: "Budget Range" (required asterisk)
- Two inputs side by side:
  - "Min Budget" | "Max Budget"
  - Prefix: ₹ symbol
  - Number input with formatting (lakhs/crore)
- Quick select chips below:
  - "Under 50L", "50L-1Cr", "1Cr-2Cr", "2Cr+"
- Tap chip to auto-fill range

**Preferred Locations:**
- Label: "Preferred Locations" (required)
- Searchable input: "+ Add location" with search icon
- Selected locations as removable chips below:
  - "Koramangala ×", "HSR Layout ×"
- Location suggestions dropdown on focus
- Limit: 5 locations max
- "Can add up to 5 locations" helper

### SECTION 2 - PROPERTY PREFERENCES
- Header: "Inventory Preferences" (16px, semi-bold)
- Card styling consistent

**Carpet Area Range:**
- Dual input: "Min Area" - "Max Area" (sq.ft)
- Unit toggle below: "sq.ft" | "sq.m" (small segmented control)

**Furnishing Preference:**
- Single select chips:
  - "Any", "Unfurnished", "Semi-furnished", "Fully furnished"
- Selected: Primary fill

**Possession:**
- Single select chips:
  - "Ready to Move", "Under Construction", "Any"

**Age of Inventory:**
- Dropdown selector:
  - "New (0-1 yr)", "Relatively New (1-5 yrs)", "Moderate (5-10 yrs)", "Old (10+ yrs)", "Any"

**Floor Preference:**
- Multi-select checkboxes:
  - "Ground Floor", "Low Floor (1-5)", "Mid Floor (6-10)", "High Floor (10+)", "Penthouse"

**Facing Preference:**
- Chips: "North", "South", "East", "West", "North-East", "Any"
- Single select

### SECTION 3 - AMENITIES & FEATURES
- Header: "Amenities & Features" with expand/collapse chevron
- Collapsed by default (saves space)

**Must-have Amenities:**
- Grid of checkboxes with icons (3 columns):
  - Parking (with count input)
  - Lift, Security, Power Backup
  - Gym, Pool, Club House
  - Garden, Kids Play Area
- Selected items highlighted with primary color

**Nice-to-have (Optional, collapsed):**
- Same grid format for optional preferences

### SECTION 4 - ADDITIONAL DETAILS
- Header: "Additional Details" (16px, semi-bold)

**Urgency Level:**
- Radio buttons (vertical):
  - "Urgent (< 1 month)" with ⚡ icon
  - "Moderate (1-3 months)"
  - "Flexible (3+ months)"

**Requirement Title (Optional):**
- Text input
- Placeholder: "e.g., Family Home in Koramangala"
- Helper: "Give this requirement a memorable name"

**Detailed Description:**
- Text area (4 lines visible)
- 500 character limit
- Character counter: "0/500"
- Placeholder: "Add any additional preferences or specific requirements..."

**Valid Until:**
- Date picker input
- Default: 60 days from today
- Helper: "This requirement will automatically expire after this date"

### SECTION 5 - CLIENT INFORMATION
- Header: "Client Information" (16px, semi-bold)

**Privacy Notice:**
- Info card with lock icon:
  - "Client data is end-to-end encrypted"
  - "Learn more about data security" link

**Client Name:**
- Text input (required asterisk)
- Label: "Client Name"

**Client Phone:**
- Number input (required)
- Country code dropdown: "+91"
- Format validation
- Helper: "Will be used for matching notifications"

**Client Email (Optional):**
- Email input
- Validation for format

**Relationship:**
- Dropdown:
  - "Direct Client", "Referred", "Family", "Friend", "Other"

**Private Notes:**
- Text area (2 lines)
- 200 char limit
- Helper: "Notes only you can see"

## MATCHING PREVIEW (Real-time)
- Floating card at bottom (above footer):
  - "Currently matching with X properties"
  - Small thumbnails of top 3 matches
  - "View all matches →" link
- Updates as user fills form

## FOOTER (Sticky)
- Two buttons:
  - "Save as Draft" (outline) - for add flow
  - "Save & Find Matches" (primary, filled)
- 16px horizontal margin
- Height: 72px including padding

## AUTO-SAVE
- Indicator: "Last saved 2 min ago" (top right of form area)
- Draft badge if saved as draft

## VALIDATION
- Real-time validation on blur
- Required fields marked with * (red asterisk)
- Error messages inline (red text below field)
- Disable Save until required fields complete
- Scroll to first error on submit attempt

## SUCCESS STATE
- On save: Success animation (checkmark)
- Success message: "Requirement added successfully!"
- Options after:
  - "View Matches" (primary)
  - "Add Another" (outline)
  - "Go to My Requirements" (text link)

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable form)

## Style Notes
- Use encouraging microcopy
- Helpful tooltips (i icons)
- Clear field grouping
- Consistent spacing (16px between sections)

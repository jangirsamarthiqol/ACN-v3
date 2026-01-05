# Prompt 24: Property Detail View (Discovery)

Design a comprehensive property detail screen for property discovery:

## IMAGE GALLERY (Top, full-width)
- Full-width swipeable image carousel
- Height: 320px on initial load
- Parallax scroll effect (images move slower than content)

**Overlay Elements:**
- Image counter: "3 / 12" (top-right, pill, dark bg with white text)
- Back button (top-left, white circle with shadow, back arrow)
- Share button (top-right row, white circle, share icon)
- Shortlist heart (below share, white circle):
  - Outline when not shortlisted
  - Filled red when shortlisted
  - Animation on tap (scale + color change)
- "View All Photos" button (bottom-center, pill, semi-transparent dark bg)

**Verification Badge (Overlaying bottom of images):**
- Position: Bottom-left corner
- "✓ Verified Property" (green pill, checkmark icon)
- Or "★ Premium Listing" (gold pill)

## QUICK ACTION BAR (Sticky below images)
- Horizontal scroll of action chips
- White background with shadow
- Height: 56px

**Chips:**
- "Call" (phone icon, primary outline)
- "WhatsApp" (green, WhatsApp icon)
- "Email" (mail icon, outline)
- "Share" (share icon)
- "Schedule Visit" (calendar icon)

Each chip: 40px height, 16px horizontal padding, border radius 20px

## PROPERTY HEADER SECTION
- 16px padding horizontal
- White card or continuous with background

**Price (Prominent):**
- "₹1.2 Crore" (28px, bold, primary color #0066CC)
- Subtext: "₹8,275 per sq.ft" (14px, gray #666666)
- Negotiable badge (if applicable): "Negotiable" (small green pill)

**Property Title:**
- "Spacious 3 BHK Apartment" (20px, semi-bold, #1A1A1A)
- Property ID: "#ACN12345" (12px, gray, with copy icon, tappable)

**Project Name (if applicable):**
- "Prestige Lakeside Habitat" (16px, primary color, link style)
- Verification badge if verified project

**Location:**
- "Varthur, Bangalore" (16px, gray, with pin icon)
- Distance: "5.2 km away" (12px, gray)
- "Get Directions →" link (primary color)

## LISTING INFO
- Posted by section (row):
  - Small avatar (32px)
  - "Rahul Sharma • Verified Agent" (14px)
  - Rating: "4.8★" (small)
- Posted date: "5 days ago" (12px, gray)
- Views: "234 views" (12px, gray, eye icon)

## KEY FEATURES (Icon grid, 2x3)
- 16px horizontal margin
- 24px top margin
- Grid gap: 12px

**Feature Cards (6 cards):**
Each card: White, 12px radius, subtle shadow, 12px padding
- Icon (24px, colored, top)
- Value (18px, bold, center)
- Label (12px, gray, center)

1. "3 BHK" (home icon, blue)
2. "1,450 sq.ft" (area icon, green)
3. "2 Bathrooms" (bath icon, teal)
4. "2 Balconies" (balcony icon, purple)
5. "5th Floor" (building icon, orange)
6. "2 Parking" (car icon, gray)

## PROPERTY OVERVIEW SECTION
- Section tabs (horizontal):
  - "Overview" (default active)
  - "Amenities"
  - "Location"
  - "Similar"
- Tab bar with sliding indicator
- Content changes based on selected tab

### OVERVIEW TAB
- Card: White, shadow, 16px padding

**Details Grid (2 columns, label:value):**
- Transaction Type: "Resale"
- Property Type: "Apartment"
- Furnishing: "Semi-Furnished"
- Facing: "North-East"
- Overlooking: "Garden View"
- Floor: "5 out of 15"
- Age of Property: "3 years"
- Possession: "Ready to Move"
- Total Floors: "15"
- Carpet Area: "1,250 sq.ft"
- Built-up Area: "1,450 sq.ft"
- Maintenance: "₹3,500/month"
- Car Parking: "2 Covered"
- Availability: "Immediate"

Labels: 13px, gray
Values: 14px, #1A1A1A

**Description Section:**
- "About this property" header (16px, semi-bold)
- Description text (14px, gray, line-height 1.6)
- "Read more" / "Read less" toggle if text exceeds 4 lines
- Well-formatted paragraphs

### AMENITIES TAB
- Grid of amenities (3 columns)
- Each: Icon (24px) + Label (12px)
- Available: Colored icon, bold text
- Not available: Grayed out with strikethrough

**Categories:**
- Building: Lift, Security, Power Backup, Water Supply
- Recreation: Gym, Pool, Club House, Garden, Play Area
- Services: Maintenance Staff, Intercom, Visitor Parking

### LOCATION TAB
**Map View:**
- Interactive map (height: 250px)
- Property marker (custom ACN pin)
- "Open in Maps" button overlay
- "Get Directions" button

**Nearby Section (List):**
- Header: "What's Nearby"
- List items with icons:
  - Schools: "DPS School - 0.5 km" (with direction arrow)
  - Hospitals: "Apollo Hospital - 1.2 km"
  - Shopping: "Phoenix Mall - 2.0 km"
  - Transport: "Metro Station - 0.8 km"
  - Restaurants: "10+ options within 1 km"
  - Banks: "HDFC ATM - 0.2 km"

### SIMILAR TAB
- Horizontal scrollable cards
- 5-6 similar properties
- Card shows: Image, Price, "3 BHK", Location
- Match indicator: "85% Similar" (badge)
- "View All Similar →" button at end

## FINANCIAL DETAILS SECTION
- Expandable/collapsible
- Header: "Financial Details" with chevron

**Content (when expanded):**

**Price Breakup:**
- Base Price: ₹1.15 Cr
- Stamp Duty (5.6%): ₹6.9 L
- Registration (1%): ₹1.15 L
- GST: ₹-- (N/A for resale)
- **Total: ₹1.23 Cr** (bold, primary)

**EMI Calculator:**
- Loan amount: Slider (50L to 1.2Cr)
- Interest rate: Input (default 8.5%)
- Tenure: Selector (5, 10, 15, 20, 25 years)
- "Calculate" button
- Result: "Monthly EMI: ₹95,000" (large, bold)

## LISTING AGENT SECTION
- Card: White, shadow, 16px padding

**Content:**
- Large avatar (80px, left)
- Name: "Rahul Sharma" (18px, semi-bold)
- Role: "Premium Agent" (14px, gray, with badge icon)
- Rating: "4.8★ (234 reviews)" (14px, gold stars)
- Member since: "2 years on ACN" (12px, gray)
- Response time: "Usually responds within 2 hours" (12px, green)

**Stats Row (small icons + numbers):**
- Properties: "48"
- Requirements: "23"
- Deals: "67"

**Contact Buttons:**
- "Call Agent" (filled primary, phone icon)
- "WhatsApp" (outline, green WhatsApp icon)
- "View Profile →" (text link, below)

## MATCHING REQUIREMENTS SECTION (If this is your property)
- Header: "5 Matching Requirements" with "View All →"
- Horizontal scroll: Top 3 requirement cards preview
- Each card: Requirement summary, Match %, "Enquire" button

## PROPERTY DOCUMENTS (If available)
- Header: "Documents Available"
- List of documents:
  - "Sale Deed" - View/Download icons
  - "Encumbrance Certificate"
  - "Building Approval"
- Lock icon if document requires verification

## REPORT SECTION
- "Report this listing" link (gray, small)
- Opens: Reason selection (Incorrect info, Already sold, Duplicate, Spam)

## SIMILAR SEARCHES
- Horizontal pills:
  - "3 BHK in Varthur"
  - "Under 1.5 Cr"
  - "Ready to move"
- Tappable to search

## STICKY FOOTER (Always visible)
- White background with top shadow
- Height: 72px with padding

**Two Large Buttons:**
- "Schedule Visit" (outline, calendar icon, left, 50%)
- "Enquire Now" (filled primary, message icon, right, 50%)

**Or if it's your property:**
- "Edit Property" (outline, left)
- "View Matches" (filled, right)

## ENQUIRY BOTTOM SHEET (When "Enquire Now" tapped)
- Slide up from bottom
- Handle bar, close button

**Content:**
- Pre-filled message template: "Hi, I'm interested in this 3 BHK property..."
- Edit option (pencil icon)
- Your contact details:
  - Name (display)
  - Phone (toggle to show/hide)
  - Email (toggle)
- "Send Enquiry" button (primary, large)
- Privacy note: "Your info will only be shared with the listing agent"

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable, sticky footer)

## Background
- #F5F7FA page
- Cards: #FFFFFF

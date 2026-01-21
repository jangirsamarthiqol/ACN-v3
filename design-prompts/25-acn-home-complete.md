# Prompt 25: ACN Home - Complete Full Screen

Design the complete ACN Home screen with all sections combined:

## SCREEN STRUCTURE (Top to Bottom)

### FIXED HEADER (60px)
- White background with subtle bottom shadow
- Left: Profile avatar (40px circle) with green online dot
- Text: "ACN" or user greeting (optional)
- Right: Notification bell with red badge "3"
- 16px horizontal padding

### HORIZONTAL TAB BAR (48px)
- Below header
- 4 tabs: "ACN" (active), "My Business", "Services", "Edge"
- Active: Bold text, 3px bottom border (primary #0066CC)
- Inactive: Gray text (#666666)
- White background

---

## SCROLLABLE CONTENT AREA

### SECTION 1: SEARCH (Height ~100px)
- 16px margin all sides
- Search bar: White, 56px height, 16px radius
  - Search icon (left), placeholder text, filter icon (right)
  - Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Inventory type pills below (12px gap):
  - "Buy" (active, primary fill), "Rent", "Commercial", "Primary", "Land"
  - Horizontal scroll, 36px height each

### SECTION 2: BANNER CAROUSEL (Height ~200px)
- 16px horizontal margin
- 12px top margin
- Carousel height: 180px
- First banner visible: Blue-purple gradient
  - Left: "Premium Properties" (headline), "Explore Now" button
  - Right: Decorative illustration
- Dot indicators: 3 dots, active elongated
- Slight peek of next banner (indicates swipe)

### SECTION 3: QUICK ACTIONS (Height ~240px)
- Header: "Quick Actions" (18px) + "View All" link
- 24px top margin, 16px horizontal
- 2x2 grid, 12px gap

**Cards:**
1. "Delist" - Red accent, trash icon, "12"
2. "New Enquiry" - Blue accent, mail icon, "8" with dot
3. "New Matching" - Green accent, link icon, "15"
4. "Deal Tracking" - Orange accent, chart icon, "5"

Each: White bg, 12px radius, shadow, 16px padding, ~100px height

### SECTION 4: RECENTLY VIEWED PROJECTS (Height ~320px)
- Header: "Recently Viewed Projects" + "View All →"
- 24px top margin, 16px horizontal
- Horizontal scroll
- Cards: 280px width, show 1.3 cards

**Card Content:**
- Image (160px height) with overlay badge "Premium", heart icon
- Project name, location with pin
- Price range: "₹85L - ₹1.5Cr" (primary)
- Pills: "Resale", "Rental"
- Config: "2,3 BHK | 1200-1800 sq.ft"

### SECTION 5: RECENTLY VIEWED REQUIREMENTS (Height ~260px)
- Header: "Recently Viewed Requirements" + "View All →"
- 24px top margin
- Horizontal scroll
- Cards: 300px width

**Card Content:**
- Header: Document icon + "Active" status badge (green)
- Title: "Looking for 2 BHK Apartment"
- Details: Location, Budget, BHK (with icons)
- "Buy" type badge
- Footer: "5 matching properties →" (primary)

### SECTION 6: MARKET INSIGHTS (Height ~360px)
- Header: "Market Insights" + "Powered by ACN Edge" + "View All →"
- 24px top margin, 16px horizontal

**Featured Card (First):**
- Height: 160px
- Gradient: Blue-purple
- "Featured" badge
- Title: "2026 Real Estate Market Outlook" (white, bold)
- Arrow indicator

**Regular Cards (2 more):**
- Height: 120px each
- Horizontal layout: Image (40%) + Content (60%)
- Category badge: "Trend", "News"
- Title, description (2 lines), metadata (date, read time)

### PADDING AT BOTTOM
- 80px extra padding for bottom nav clearance

---

## FIXED BOTTOM NAVIGATION (56px + safe area)
- White background with top shadow
- 4 items: Home (active, primary fill), Properties, Requirements, Shortlist
- Labels below icons
- Active item: Primary color
- Inactive: Gray

---

## DESIGN SPECIFICATIONS

**Colors:**
- Primary: #0066CC
- Secondary: #00C853
- Background: #F5F7FA
- Card: #FFFFFF
- Text Primary: #1A1A1A
- Text Secondary: #666666
- Text Tertiary: #999999

**Typography:**
- Headers: SF Pro Bold / Roboto Bold
- Body: SF Pro Regular / Roboto Regular
- Numbers: SF Pro Semibold

**Spacing:**
- Section gap: 24px
- Card radius: 12px
- Card shadow: 0 2px 8px rgba(0,0,0,0.06)
- Horizontal margin: 16px

**Interactions:**
- Cards: Press state scale 0.98
- Scroll: Smooth with momentum
- Tabs: Smooth sliding indicator
- Hearts: Fill animation on tap

---

## Screen Dimensions
- Width: 390px
- Height: 844px (iPhone 14 Pro dimensions)
- Scrollable content extends beyond screen
- Fixed header and bottom nav

## Overall Feel
- Modern, clean, spacious
- Premium and professional
- Trust-building for real estate professionals
- Efficient access to key actions
- Data-rich without being cluttered

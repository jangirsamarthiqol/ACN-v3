# Prompt 16: My Business - My Enquiries

Design the enquiries management screen with incoming/outgoing views:

## HEADER
- Back button (left)
- Title: "My Enquiries" (20px, bold, center)
- Filter/search icon (right)

## TAB TOGGLE (Large, prominent)
- Full width tabs: "Received (45)" | "Sent (32)"
- Active tab: Bold text, primary color bottom border (3px)
- Inactive: Gray text
- Unread count badge (red) on Received if new enquiries
- Height: 48px

## SEARCH & FILTER BAR
- Search: "Search enquiries..." (48px height)
- Filter chips (horizontal scroll):
  - "Status ▾": All, New, Responded, Closed
  - "Type ▾": Property, Requirement
  - "Date ▾": Today, This Week, This Month
  - "Sort ▾": Newest, Oldest

---

## RECEIVED ENQUIRIES TAB

### Enquiry Card Layout
- White background (#FFFFFF)
- 12px border radius
- 12px margin horizontal, 10px gap
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Padding: 16px

#### New/Unread Indicator
- Blue dot (8px) on left edge if unread
- Subtle blue tint background for new enquiries

#### Card Header
- Left: Enquirer avatar (48px circle)
  - Name: "Rajesh Kumar" (16px, semi-bold)
  - Rating: 4.8★ (small stars, if available)
  - Badge: "Verified Agent" (small green pill) or "Direct Client"
- Right:
  - Time: "2 hours ago" (12px, gray)
  - Priority flag icon (if marked priority, orange)

#### Enquiry Type Badge
- Small pill below header:
  - "Property Enquiry" - Blue (#E3F2FD bg, #1565C0 text)
  - "Requirement Enquiry" - Purple (#F3E5F5 bg, #7B1FA2 text)

#### Property/Requirement Preview
- Mini card within card:
  - Thumbnail image (60x60px, left, rounded)
  - Property ID: "#ACN12345" (11px, gray)
  - Title: "3 BHK Apartment, Prestige Lakeside" (14px, #1A1A1A)
  - Key detail: "₹1.2 Cr | 1450 sq.ft" (13px, gray)
  - "View Details →" link (12px, primary color)
- Background: #F8F9FA, 8px radius

#### Enquiry Message
- Quote-style box (left border 3px, light blue bg):
  - Message preview (2 lines): "Hi, I'm interested in this property for my client who is..."
  - "Read More" link if longer
- Contact info row:
  - "📞 +91 98765 43***" (masked, "Tap to reveal" tooltip)

#### Status Indicator
- Pill badge (prominent):
  - "New" - Green bg (#E8F5E9, #2E7D32 text)
  - "Responded" - Blue bg (#E3F2FD, #1565C0)
  - "In Discussion" - Orange bg (#FFF3E0, #E65100)
  - "Closed" - Gray bg (#F5F5F5, #757575)

#### Action Buttons Row
- Three buttons:
  - "Respond" (primary filled)
  - "Call" (outline, phone icon)
  - "WhatsApp" (outline, green WhatsApp icon)
- Height: 40px
- Gap: 8px

#### Three-dot Menu Options
- Mark as Priority
- Change Status
- Archive
- Block/Report

#### Response Section (If already responded)
- Collapsible: "Your Response" with chevron
- Shows your response text
- Timestamp
- "Edit Response" link

#### Quick Actions (Bottom of card)
- Quick reply templates (horizontal pills):
  - "Share More Details"
  - "Schedule Visit"
  - "Discuss Price"
- Tap to use template in response

---

## SENT ENQUIRIES TAB

### Sent Enquiry Card Layout
- Similar card styling

#### Card Header
- Property/Requirement info at top:
  - Thumbnail and title
- "To: Priya Sharma (Agent)" (14px, gray)

#### Status Tracking
- Timeline view (horizontal or vertical mini-timeline):
  - "✓ Sent" - Green checkmark, timestamp
  - "✓ Seen" - Green checkmark, timestamp (if read)
  - "✓ Responded" - Green checkmark (if replied)
  - "Waiting for response" - Gray dot, pulsing (if pending)

#### Response Section (If received)
- Agent's response in quote box
- Their contact info (if revealed)
- Rating prompt: "Rate this interaction" (5 stars)

#### Your Message
- Your original enquiry text
- Timestamp sent
- "Edit" option if no response yet

#### Action Buttons
- "Follow Up" (if no response after 2 days)
- "Call" / "WhatsApp" icons
- "View Property" link

#### Three-dot Menu
- Withdraw enquiry
- Archive

#### Reminder Badge
- If 3+ days no response:
- Orange badge: "Follow up recommended"

---

## FILTER PANEL (Bottom Sheet)
- Slide up from bottom when filter tapped
- Handle bar, close button

**Sections:**
- Status: Multi-select chips
- Enquiry Type: Property / Requirement / Both
- Date Range: Custom date picker
- Priority: High Priority / All
- Verification: Verified Only / All
- Response Status: Responded / Pending / All

**Footer:**
- "Clear All" (outline) | "Apply Filters" (filled)

---

## EMPTY STATES

### No Received Enquiries
- Illustration: Empty inbox graphic
- Text: "No enquiries yet" (18px, bold)
- Subtext: "Your enquiries will appear here"

### No Sent Enquiries
- Illustration: Search/outbox graphic
- Text: "You haven't sent any enquiries yet" (18px, bold)
- Subtext: "Browse properties to start"
- Button: "Go to Properties" (primary)

---

## STATISTICS BANNER (Top, collapsible)
- Expandable stats section (tap to expand/collapse)
- Header: "This Week" with chevron

**Stats (when expanded):**
- Received: "12" (↑ 3 from last week) - Green arrow
- Sent: "8" (↑ 1)
- Response Rate: "75%" - Green indicator circle
- Card style with gradient or light blue background

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable)

## Color Coding
- Received enquiries: Blue accent
- Sent enquiries: Teal accent
- New/Unread: Subtle highlight

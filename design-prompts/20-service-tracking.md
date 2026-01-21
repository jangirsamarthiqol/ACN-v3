# Prompt 20: Services - Service Tracking Dashboard

Design a service tracking and management screen:

## HEADER
- Back button (left)
- Title: "My Services" (20px, bold, center)
- Filter/sort icon (right)

## TAB NAVIGATION
- "Active (3)" | "Completed (12)" | "All (15)"
- Active tab: Primary color underline, bold text
- Count badges in each tab
- Swipeable tabs

## FILTER ROW (Below tabs)
- Horizontal scroll chips:
  - "Service Type ▾"
  - "Status ▾"
  - "Date ▾"
- Tap opens filter options

## SERVICE CARDS (List)
- White background (#FFFFFF)
- 12px border radius
- 12px margin horizontal, 12px gap
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Padding: 16px

### Card Layout

#### HEADER ROW
- Left: Service type icon (32px, in colored circle)
  - Legal: Blue
  - Title verification: Green
  - Registration: Purple
- Service name: "Title Verification" (16px, semi-bold)
- Right: Service ID "#SVC1234" (12px, gray)

#### STATUS INDICATOR (Prominent)
- Status badge (pill):
  - "Requested" - Orange bg (#FFF3E0), orange text (#E65100)
  - "In Progress" - Blue bg (#E3F2FD), blue text (#1565C0)
  - "Under Review" - Purple bg (#F3E5F5), purple text (#7B1FA2)
  - "Completed" - Green bg (#E8F5E9), green text (#2E7D32)
  - "Requires Action" - Red bg (#FFEBEE), red text (#C62828)

#### PROGRESS TRACKER
- Timeline view (horizontal or vertical mini):

**If Horizontal:**
- Steps as dots connected by line
- Completed: Green dot with checkmark
- Current: Blue pulsing dot
- Future: Gray dot
- Labels below each dot

**Steps:**
1. "Requested" ✓ (timestamp: "Jan 3, 10:30 AM")
2. "Documents Verified" ✓ (timestamp)
3. "Assigned to Lawyer" ← Current (blue, pulsing)
4. "Processing" (gray)
5. "Completed" (gray)

- Tap step for details

#### PROPERTY INFO
- Mini card (light gray bg, 8px radius):
  - Inventory thumbnail (40px, left)
  - Inventory name: "3 BHK, Prestige Lakeside"
  - Inventory ID link: "#ACN12345 →"

#### ASSIGNED PROFESSIONAL (If assigned)
- Row with:
  - Avatar (40px, left)
  - Name: "Adv. Ramesh Kumar" (14px, semi-bold)
  - Rating: "4.8★" (small)
  - Contact buttons (icons only, right):
    - Call (phone icon)
    - WhatsApp (green icon)
    - Email (mail icon)
  - "View profile →" link

#### KEY DETAILS
- Grid (2 columns):
  - Requested on: "Jan 3, 2026"
  - Expected completion: "Jan 8, 2026"
  - Urgency badge: "Standard" or "Express" (pill)
  - Days remaining: "3 days" (or overdue warning)

#### ACTION ITEMS (If any)
- Alert box with warning styling:
  - Yellow/red background tint
  - Warning icon
  - "Action Required" badge
  - Message: "Please upload missing documents"
  - "Upload Now" button (primary)

#### DOCUMENTS SECTION (Expandable)
- Header: "Documents (5)" with chevron
- When expanded:
  - Uploaded docs list:
    - Doc icon + name + size + date
    - View (eye) / Download icons
  - If docs pending:
    - "Sale Deed" - "Upload Required" (red badge) + Upload button

#### MESSAGES/UPDATES (Expandable)
- Header: "Communication (3)" with chevron
- Latest message preview:
  - "Lawyer: Documents received, starting review..."
- "View all / Send message →" link

#### PAYMENT INFO
- Payment status card (light bg):
  - Advance: "✓ Paid ₹10,000" (green checkmark)
  - Balance: "Pending ₹10,000" (gray or orange)
  - "View invoice" link (right)
  - "Pay Balance" button (if applicable, primary)

#### ACTION BUTTONS (Footer)
- Two buttons side by side:
  - "View Details" (outline, 40px)
  - "Contact Support" (outline, 40px)
- Or if completed:
  - "Download Report" (primary filled, full width)

#### CARD FOOTER
- Last updated: "Updated 2 hours ago" (11px, gray)
- Notification toggle: Bell icon (tap to enable/disable alerts)

---

## COMPLETED SERVICES VIEW

Additional elements for completed services:

**Completion Badge:**
- "✓ Completed on Jan 8, 2026" (green, prominent)

**Rating Prompt:**
- Card: "Rate this service"
- 5 star input (tappable)
- Text field: "Share your experience..." (optional)
- "Submit Review" button
- Skip link

**Download Options:**
- "Download Report" (PDF icon)
- "Download Invoice" (receipt icon)
- "Save to Drive" (cloud icon)

**Reorder:**
- "Request Again" button (outline)

---

## DETAILED VIEW (When card tapped)
Full-screen detail page with:
- All above info in expanded format
- Full communication history (chat-like interface)
- Complete document list
- Detailed invoice breakdown
- Complete tracking timeline with all timestamps
- Lawyer profile card (full)
- Related FAQs for this service
- Support contact card

---

## FILTER PANEL (Bottom Sheet)
When filter icon tapped:

**Service Type:**
- Multi-select checkboxes:
  - Title Verification
  - Agreement Drafting
  - Registration
  - Consultation
  - Due Diligence

**Status:**
- Multi-select:
  - All statuses listed

**Date Range:**
- Custom date picker (From - To)

**Sort by:**
- Radio buttons:
  - Newest first (default)
  - Oldest first
  - Status
  - Expected completion

**Footer:**
- "Clear All" (outline) | "Apply" (primary)

---

## EMPTY STATES

### No Active Services
- Illustration: Completed checklist or empty folder
- Text: "No active services" (18px, bold)
- Subtext: "Your active services will appear here"
- "Browse Services" button (primary)

### No Completed Services
- Illustration: Empty state graphic
- Text: "No completed services yet"
- Subtext: "Completed services will appear here"

---

## NOTIFICATIONS PROMPT
- Card (if notifications not enabled):
  - Bell icon
  - "Enable notifications"
  - "Get updates about your services"
  - Toggle switch
  - Dismiss (×)

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable)

## Background
- #F5F7FA page
- Cards: #FFFFFF

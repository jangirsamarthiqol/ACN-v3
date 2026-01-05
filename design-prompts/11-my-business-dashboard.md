# Prompt 11: My Business - Dashboard

Design the My Business dashboard with analytics and quick actions:

## HEADER (Fixed)
- Title: "My Business" (24px, bold, #1A1A1A)
- Date range selector (right): "This Month ▾" (14px, primary color #0066CC)
  - Dropdown arrow, tappable
- Background: White (#FFFFFF)
- Height: 60px with 16px horizontal padding

## HORIZONTAL TAB BAR (My Business specific)
- Position: Below header
- Active tab: "My Business"
- Same styling as main app tabs

## STATS CARDS (Grid 2x2, 12px gap)
- 16px margin from edges
- Each card: equal size, gradient background, white text
- Border radius: 16px
- Padding: 20px
- Height: 120px
- Shadow: 0 4px 12px rgba(0,0,0,0.1)

### Card 1 - Total Properties (Top Left)
- Gradient: Blue (#0066CC to #004C99)
- Large number: "48" (36px, bold, white)
- Label: "Active Properties" (14px, white 90% opacity)
- Trend indicator: "+5 this week" (12px, with ↑ arrow, white)
- Building icon (top-right, white, 24px, low opacity)

### Card 2 - Total Requirements (Top Right)
- Gradient: Purple (#8B5CF6 to #6D28D9)
- Number: "23" (36px, bold)
- Label: "Active Requirements"
- Trend: "+3 new" with arrow
- Document icon (top-right)

### Card 3 - Enquiries (Bottom Left)
- Gradient: Green (#00C853 to #00897B)
- Number: "156" (36px, bold)
- Label: "Total Enquiries"
- Split row: "↓ 89 Received | ↑ 67 Sent" (12px)
- Mail icon (top-right)

### Card 4 - Matches (Bottom Right)
- Gradient: Orange (#FF9800 to #F57C00)
- Number: "34" (36px, bold)
- Label: "New Matches"
- "View All →" link (12px, white, underlined)
- Link icon (top-right)

## PERFORMANCE SECTION
- Header: "This Month's Performance" (18px, semi-bold, #1A1A1A)
- 24px top margin, 16px horizontal margin
- Card: White background, shadow, 12px radius, 16px padding

### Chart Area
- Bar chart showing weekly activity
- Height: 160px
- Y-axis: Numbers (0, 50, 100, 150)
- X-axis: "Week 1", "Week 2", "Week 3", "Week 4"
- Multiple colored bars per week:
  - Listings (Blue #0066CC)
  - Enquiries (Green #00C853)
  - Matches (Orange #FF9800)
- Legend at bottom: Color dots with labels

## QUICK ACTIONS SECTION
- Header: "Quick Actions" (18px, semi-bold)
- 24px top margin
- Grid: 2 rows × 3 columns (or 3×2)
- Gap: 12px between cards

### Action Cards (6 cards)
- White background, 12px radius, shadow
- Height: 100px
- Icon on top (32px, colored), label below (12px, gray)
- Press state: Scale 0.95

1. "Add Property" - Plus icon (blue #0066CC)
2. "Add Requirement" - Document+ icon (purple #8B5CF6)
3. "View Enquiries" - Mail icon (green #00C853)
4. "Manage Shortlist" - Heart icon (red #FF5252)
5. "Update Status" - Refresh icon (orange #FF9800)
6. "Generate Report" - Chart icon (teal #009688)

## RECENT ACTIVITY FEED
- Header: "Recent Activity" with "View All" link (right)
- 24px top margin
- Timeline-style list (last 5 activities):

### Activity Item
- Left: Avatar or activity icon (40px circle)
- Content:
  - Activity text: "New enquiry on Prestige Lakeside" (14px, #1A1A1A)
  - Timestamp: "2 hours ago" (12px, gray #888888)
- Right: "View" button (small, outline style)
- Timeline connector line (vertical, thin, gray) between items
- Each item height: ~64px

## BOTTOM NAVIGATION
- 4 items: Dashboard (active), My Properties, My Requirements, My Enquiries
- Active: Dark blue (#004C99) color scheme for business mode
- Icons with labels

---

## Screen Dimensions
- Width: 390px
- Height: 844px (full screen, scrollable)

## Background
- Page background: #F5F7FA

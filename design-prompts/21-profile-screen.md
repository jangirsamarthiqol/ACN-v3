# Prompt 21: Profile Screen

Design a comprehensive agent profile screen:

## HEADER (Gradient background)
- Gradient: Primary blue to darker blue (#0066CC to #004C99)
- Height: 200px (curves down at bottom)
- Back button (white, left)
- Settings gear icon (white, right)

## PROFILE CARD (Overlapping header, elevated)
- White background (#FFFFFF)
- 16px border radius
- Shadow: 0 4px 20px rgba(0,0,0,0.15)
- Margin: 16px horizontal
- Position: Overlaps header by 80px
- Padding: 20px

### Profile Content
- Large circular avatar (100px):
  - Profile photo
  - Online status dot (green, bottom-right)
  - Camera icon for edit (small, bottom-right on avatar)
- Name: "Rahul Sharma" (22px, bold, #1A1A1A)
- Role: "Premium Agent" (14px, gray #666666, with crown icon)
- Member since: "Member since Jan 2023" (12px, gray)
- Edit button: Small pencil icon (top-right of card)

### Verification Status
- Badge row below name:
  - "✓ Verified Agent" (green pill, checkmark icon)
  - "✓ RERA Registered" (blue pill)
- "View verification details →" link (12px, primary)

## CONTACT INFO SECTION
- Header: "Contact Information" (16px, semi-bold)
- Card: White, 12px radius, shadow, 16px padding

**Info Rows:**
- Phone: "+91 98765 43210"
  - "Primary" badge (small, blue)
  - "✓ Verified" badge (green)
  - "Change" link (right)
- Alternative Phone: "+ Add alternative number" (gray, tappable)
- Email: "rahul.sharma@email.com"
  - Verification status badge
- RERA: "RERA12345678"
  - Or "Add RERA" link if not added

## SUBSCRIPTION SECTION
- Prominent card with gradient background (gold/premium feel)
- Border radius: 16px
- Padding: 20px
- 16px margin top

**Content:**
- Plan badge: "Premium Plan" with crown icon (top-left)
- Validity: "Valid until Jan 30, 2026" (white text)
- Progress bar: Visual indicator of validity timeline
- Days remaining: "25 days left" (white)

**Stats Row:**
- Credits: "48 remaining" with coin stack icon
- Next renewal: "Jan 30, 2026"

**Action Buttons:**
- "Upgrade Plan" (if not highest, white outline)
- "Add Booster Credits" (white outline)
- "Manage Subscription →" link (white text)

## PERFORMANCE STATS
- Header: "Your Performance" (16px, semi-bold)
- Grid 2x2 of stat cards
- Gap: 12px
- Card: White, 12px radius, 16px padding

**Stats:**
1. Total Properties: "48" (large number) + building icon + trend "↑5"
2. Total Requirements: "23" + document icon + trend
3. Enquiries: "156" + mail icon + split "Rec/Sent"
4. Rating: "4.8★" (colored stars) + "45 reviews"

## REPUTATION SECTION
- Header: "Your Reputation" (16px, semi-bold)
- Card: White, shadow

**Content:**
- Overall rating: "4.8/5" (large, with 5 star icons, 4.8 filled)
- Based on: "45 reviews" (12px, gray)
- Progress bars for criteria:
  - Response time: 4.9 (green bar)
  - Professionalism: 4.8 (green bar)
  - Knowledge: 4.7 (green bar)
- "View all reviews →" link

## ACTIVITY SUMMARY
- Header: "This Month" (16px, semi-bold)
- Card with quick stats:
  - New listings: "12"
  - Enquiries handled: "45"
  - Deals closed: "3"
- "View full dashboard →" button (outline)

## KAM SECTION (Key Account Manager)
- Header: "Your Relationship Manager"
- Card: White, shadow

**Content:**
- KAM avatar (60px, left)
- Details:
  - Name: "Priya Desai" (16px, semi-bold)
  - Role: "Senior KAM - Bangalore" (14px, gray)
  - Contact icons: Phone, WhatsApp (right)
- "Contact your KAM" button (primary, full width)

## ACCOUNT MANAGEMENT (Settings List)
- Section headers with grouped options
- Each option: Icon (left) + Label + Right arrow
- Dividers between groups

### Profile Settings:
- "Edit Profile Details" →
- "Change Password" →
- "Privacy Settings" →
- "Notification Preferences" → (with badge if settings needed)

### Business Settings:
- "Manage Subscription" →
- "Payment History" →
- "Credits & Usage" →

### Support & Help:
- "Help & Support" →
- "Contact KAM" (phone icon)
- "FAQs" →
- "Tutorial Videos" →

### Feedback:
- "Send Feedback" →
- "Rate ACN on Play Store" → (stars icon)
- "Share ACN" → (share icon)

### Legal:
- "Terms & Conditions" →
- "Privacy Policy" →
- "Data Security" → (lock icon)

## ABOUT SECTION
- App version: "v3.0.2" (centered, gray)
- "Check for updates" link
- Social media row: Facebook, Instagram, LinkedIn, Twitter icons

## DANGER ZONE
- "Logout" button (outline, red text center aligned)
- "Delete Account" link (small, gray, below logout)

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable)

## Background
- #F5F7FA below the header gradient

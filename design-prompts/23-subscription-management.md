# Prompt 23: Subscription Management Screen

Design a subscription and credits management screen:

## HEADER
- Back button (left)
- Title: "Subscription" (20px, bold, center)
- "Help" icon (right, question mark)

## CURRENT PLAN CARD (Hero, prominent)
- Full width minus 16px margins
- Height: 180px
- Gradient background (gold to dark gold: #FFD700 to #FFA000, or premium blue)
- Border radius: 16px
- Shadow: 0 6px 20px rgba(0,0,0,0.2)
- Padding: 20px

**Content (white text):**
- Plan badge: Crown icon + "Premium Plan" (top-left, 14px)
- Plan name: "ACN Premium" (28px, bold)
- Status badge: "Active" (green pill, small)

**Validity Section:**
- "Valid until Jan 30, 2026" (16px)
- Progress bar: White track, showing time elapsed
- "25 days left" (14px)

**Action Buttons (Row):**
- "Upgrade Plan" (white outline, if not highest tier)
- "Renew Now" (white filled background, primary text)

**Quick Link:**
- "Plan Details →" (white text link, bottom-right)

## CREDITS SECTION
- Header: "Available Credits" (18px, semi-bold)
- 24px margin top
- Card: White, 12px radius, shadow

**Content:**
- Large number: "48" (40px, bold, primary color)
- Type: "Inventory Listing Credits" (14px, gray)
- Subtext: "Renews on Jan 30, 2026" (12px, gray)

**Usage Bar:**
- Visual progress bar showing used vs remaining
- "32 of 80 used this cycle" (12px, gray)
- Bar: Primary color for used portion, light gray for remaining

**Action Button:**
- "Add Booster Credits" (outline, full width)

## PLAN COMPARISON SECTION
- Header: "Choose Your Plan" (18px, semi-bold)
- 24px margin top

**Billing Toggle:**
- Segmented control: "Monthly" | "Yearly"
- "Yearly" has "Save 20%" badge (green)
- Selected: Primary fill

### Plan Cards (Vertical stack or horizontal scroll)
- Gap: 12px between cards

#### FREE PLAN Card
- White background, gray border (if current)
- 12px radius
- Padding: 16px

**Content:**
- Badge: "Current Plan" (if applicable, gray pill)
- Price: "₹0" (28px, bold) + "/month" (14px, gray)
- Features list (checkmarks and X):
  - ✓ "5 Inventory Listings"
  - ✓ "Basic Search"
  - ✓ "10 Enquiries/month"
  - ✗ "Priority Support" (gray, crossed)
  - ✗ "Analytics" (gray)
  - ✗ "Unlimited Requirements" (gray)
- Button: "Current Plan" (disabled, gray) or "Downgrade" (outline)

#### BASIC PLAN Card
- White background, subtle shadow
- 12px radius, padding 16px

**Content:**
- Badge: "Popular" (blue pill)
- Price: "₹999" (28px, bold) + "/month"
- Yearly: "₹9,990/year" + "Save ₹2,000" (green badge)
- Features list (all checkmarks):
  - ✓ "25 Inventory Listings"
  - ✓ "Advanced Search & Filters"
  - ✓ "50 Enquiries/month"
  - ✓ "Basic Analytics"
  - ✓ "Priority Listings"
  - ✗ "Dedicated Support"
  - ✗ "API Access"
- Button: "Select Plan" (primary filled)

#### PREMIUM PLAN Card (Highlighted)
- Primary color border (2px) or gradient border
- "Best Value" + "Current Plan" badges (if current)
- Shadow more prominent

**Content:**
- Price: "₹2,499" (28px, bold) + "/month"
- Yearly: "₹24,990/year" + "Save ₹5,000"
- Features (all checkmarks, green):
  - ✓ "Unlimited Inventory Listings"
  - ✓ "Advanced Search & Filters"
  - ✓ "Unlimited Enquiries"
  - ✓ "Advanced Analytics"
  - ✓ "Featured Listings"
  - ✓ "Priority Support (24/7)"
  - ✓ "Smart Matching"
  - ✓ "Verified Badge"
  - ✓ "API Access"
- Button: "Current Plan" (disabled) or "Upgrade Now" (primary)

#### ENTERPRISE Card
- White background with subtle pattern
- 12px radius

**Content:**
- Badge: "For Teams" (purple pill)
- Price: "Custom Pricing" (24px, bold)
- Features:
  - ✓ "Everything in Premium"
  - ✓ "Multi-user access"
  - ✓ "Custom branding"
  - ✓ "Dedicated account manager"
  - ✓ "API integration"
  - ✓ "White-label options"
  - ✓ "Advanced reporting"
- Button: "Contact Sales" (outline)

### Compare All Features Link
- "Compare All Features →" (primary color, below cards)
- Opens detailed comparison table (modal or new screen)

## BOOSTER CREDITS SECTION
- Header: "Add More Credits Anytime" (18px, semi-bold)
- 24px margin top

### Credit Packs (Horizontal scroll or grid)
- Gap: 12px

#### Pack 1 - Small
- White card, 12px radius, padding 16px
- Width: 120px (in scroll) or 33%
- "10 Credits" (16px, bold)
- Price: "₹500" (18px, primary)
- Validity: "30 days" (12px, gray)
- "Add" button (small, outline)

#### Pack 2 - Medium (Popular)
- Highlighted border (primary or gold)
- "Popular" badge (top-right)
- "25 Credits" (16px, bold)
- Original: "₹1,250" (crossed, gray)
- Discounted: "₹1,000" (18px, primary)
- Save: "Save ₹250" (green, small)
- Validity: "60 days"
- "Add" button (primary filled)

#### Pack 3 - Large (Best Deal)
- "Best Deal" badge (green)
- "50 Credits" (16px, bold)
- Original: "₹2,500" (crossed)
- Discounted: "₹1,800" (18px, primary)
- Save: "Save ₹700" (green)
- Validity: "90 days"
- "Add" button (primary filled)

## PAYMENT HISTORY SECTION
- Header: "Payment History" with "View All →" link (right)
- 24px margin top

### Recent Transactions (Last 3)
- List style, each row:
  - Date: "Dec 15, 2024" (14px, gray)
  - Description: "Premium Plan Renewal" (14px, #1A1A1A)
  - Amount: "₹2,499" (14px, bold, primary for success)
  - Status: "Success" (green badge) or "Failed" (red)
  - "Download Invoice" icon (right)
- Divider between rows

## RENEWAL SETTINGS SECTION
- Card: White, shadow, 12px radius

**Content:**
- "Auto-Renewal" label (16px, semi-bold, left)
- Toggle switch (right)
- Status: "Enabled" (green) or "Disabled" (gray)
- Details below:
  - Next renewal date: "Jan 30, 2026"
  - Payment method: "••••1234 Visa" with card icon
  - "Change payment method" link
- Info note: "Cancel anytime. No questions asked." (12px, gray)

## FAQ SECTION
- Header: "Frequently Asked Questions"
- Collapsible accordion items:

1. "What happens when my plan expires?"
2. "Can I change plans anytime?"
3. "How do credits work?"
4. "What payment methods are accepted?"
5. "Do unused credits carry forward?"

Each: Question text + chevron, tap to expand answer

## SUPPORT SECTION
- Card: Light blue background
- "Need help choosing?" (16px, semi-bold)
- "Talk to our subscription expert"
- Buttons: "Call" (phone icon) | "Chat" (chat icon)

## PROMOTIONAL BANNER (If applicable)
- Card with gradient or festive background
- "Limited time offer" (14px, bold)
- "Get 20% off on yearly plans" (18px)
- "Offer expires in 5 days" with countdown (optional)
- CTA button: "Claim Offer" (white filled)

## STICKY FOOTER (When viewing plan to select)
- Appears when plan selected (not current)
- White background, shadow
- Selected plan summary: "Premium Plan - ₹2,499/mo"
- "Proceed to Payment" button (large, primary, full width)

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable)

## Background
- #F5F7FA page
- Cards: #FFFFFF
- Premium accents: Gold (#FFD700), Primary blue (#0066CC)

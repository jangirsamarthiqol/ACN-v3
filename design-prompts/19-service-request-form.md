# Prompt 19: Services - Legal Service Request Form

Design the service request/booking form:

## HEADER
- Back button (left)
- Title: "Request Service" (20px, bold, center)
- Progress indicator: "Step 1 of 3" (right, 12px, gray)

## PROGRESS BAR (Below header)
- Segmented progress bar
- Segments: "Details" | "Documents" | "Review"
- Active segment: Primary color fill + bold label
- Completed: Green with checkmark
- Future: Gray
- Connector line between segments
- Tappable for navigation (to completed steps only)

## FORM SECTIONS (Scrollable)

### SECTION 1 - SERVICE DETAILS
- Header: "Service Selection" (16px, semi-bold, #1A1A1A)
- Card: White, 12px radius, shadow, 16px padding

**Service Type (Pre-filled if coming from card):**
- Dropdown showing selected service:
  - "Title Verification" (selected, with checkmark)
- "Change" link to go back and select different

**Service Variant (If applicable):**
- Radio cards for options
- Example for Agreement Drafting:
  - "Sale Agreement" - "₹8,000" (most common badge)
  - "Rental Agreement" - "₹5,000"
  - "Lease Agreement" - "₹6,000"
- Each shows name + price
- Selected: Primary border + fill tint

**Property Details:**
- Radio buttons:
  - "For existing property" (links to my properties)
  - "For new property" (shows form fields)
- If existing:
  - Search dropdown: "Select from My Properties"
  - Shows property cards in dropdown
- If new:
  - Property address: Multi-line text input
  - Property type: Dropdown
  - Transaction value: Number input with ₹ (for pricing calculation)

**Urgency:**
- Radio buttons (vertical, with price impact):
  - "Standard (5-7 days)" - "Standard price" (default selected)
  - "Express (2-3 days)" - "+30% (₹3,600 extra)"
  - "Rush (24 hours)" - "+60% (₹7,200 extra)"
- Price updates dynamically above
- Each option has clock icon with time

### SECTION 2 - DOCUMENT UPLOAD
- Header: "Required Documents" (16px, semi-bold)
- 24px margin top

**Document Checklist:**
Each document type as card (stacked vertically):
- Document icon (left, colored)
- Document name: "Property Documents" (16px, semi-bold)
- Required/Optional badge (right):
  - Required: Red text
  - Optional: Gray text
- Upload status:
  - "Not uploaded" - Gray text
  - "✓ Uploaded" - Green text
- "Upload" button (right)
- File types accepted: "PDF, JPG (Max 5MB)" (10px, gray)
- "View sample" link

**Upload Area:**
- Dashed border box
- Drag and drop zone (or tap to select)
- "Choose Files" button (center)
- Multiple file support
- Upload progress bars (when uploading)
- Uploaded files list:
  - File icon + filename + size
  - Preview button (eye icon)
  - Remove button (× icon)

**Info Box (Tip):**
- Light blue background, info icon:
- "Don't have all documents now?"
- "You can upload them later via your service dashboard"

### SECTION 3 - CONTACT DETAILS
- Header: "Contact Information" (16px, semi-bold)

**Your Info (Pre-filled from profile):**
- Your Name: Text input (pre-filled, editable)
- Phone Number: (pre-filled, with edit icon)
- Alternative Phone: Optional input ("+Add alternative")
- Email Address: (pre-filled)
- Preferred contact method:
  - Radio: Phone | Email | WhatsApp (icons with each)

**Property Owner Details (If different):**
- Toggle: "I am the property owner" (default on)
- If toggled off:
  - Owner Name: Text input
  - Owner Phone: Number input
  - Relationship: Dropdown (Owner, Authorized Rep, etc.)

**Lawyer Preference (Optional):**
- Toggle: "Request specific lawyer" (default off)
- If on:
  - Searchable dropdown of available lawyers
  - Lawyer cards in dropdown:
    - Photo + Name + Rating + Specialization

### SECTION 4 - ADDITIONAL INFORMATION
- Header: "Additional Details" (16px, semi-bold)

**Special Instructions:**
- Text area (4 lines, 500 char limit)
- Placeholder: "Any specific requirements or concerns..."
- Character counter

**Timeline/Deadline:**
- Toggle: "I have a specific deadline" (default off)
- If on: Date picker
- Helper: "We'll prioritize accordingly"

### SECTION 5 - REVIEW & PRICING
- Header: "Order Summary" (16px, semi-bold)
- Summary card with light gray background

**Service Breakdown:**
- Service: "Title Verification"
- Variant: "Comprehensive"
- Urgency: "Standard (5-7 days)"
- Divider line

**Pricing:**
- Base Price: ₹10,000
- Add-ons (if any):
  - Express delivery: +₹3,000
  - Additional property: +₹5,000
- Subtotal: ₹18,000
- GST (18%): ₹3,240
- Discount: -₹1,000 (if applied, green text)
- **Total: ₹20,240** (bold, large, primary)

**Payment Terms:**
- "Advance payment: ₹10,120 (50%)"
- "Balance on completion: ₹10,120"
- Info icon with tooltip explaining terms

**Offer Code:**
- Input field: "Have a coupon code?"
- "Apply" button (small, primary)
- Applied code shows: "FIRST20 applied ✓" (green) with "-₹1,000"
- Remove option (×)

### TERMS & CONDITIONS
- Checkbox (required):
  - "I agree to the terms and conditions"
  - "Terms" is link (opens modal/page)
- Checkbox (optional):
  - "Send me updates via WhatsApp"

## FOOTER (Sticky)
- White background with top shadow
- Height: 80px with padding

**Two Buttons:**
- "Save as Draft" (outline, left, 48px)
- "Proceed to Payment" (primary filled, right, 48px)

**Payment Note:**
- "You'll be redirected to secure payment gateway"
- Trust badges: Payment partner logos (Razorpay, etc.)

## VALIDATION
- Real-time validation on fields
- Required field indicators (red asterisk)
- Error messages inline (red text below field)
- Scroll to first error on submit

## SUCCESS STATE (After payment return)
- Success animation (green checkmark)
- "Service request submitted!" (20px, bold, green)
- Service ID: "#SVC1234" (with copy icon)
- "Track your service" button (primary)
- "Back to services" text link

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable form)

## Background
- #F5F7FA page
- Cards: #FFFFFF

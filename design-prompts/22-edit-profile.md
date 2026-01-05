# Prompt 22: Edit Profile Screen

Design a profile editing form:

## HEADER
- Back button (left)
- Title: "Edit Profile" (20px, bold, center)
- Save button (right, primary color):
  - Disabled (gray) when no changes
  - Enabled (primary) when edited
  - Loading spinner when saving

## PROFILE PHOTO SECTION
- Centered at top
- 20px margin top

**Avatar Container:**
- Large circular avatar (120px)
- Profile photo
- Overlay on bottom:
  - Camera icon with semi-transparent dark background
  - "Change Photo" text (small, white)
- Tap opens options:
  - Bottom sheet with:
    - "Take Photo" (camera icon)
    - "Choose from Gallery" (image icon)
    - "Remove Photo" (trash icon, red)
    - "View Full Size" (expand icon)
    - "Cancel" (gray)

## FORM SECTIONS
- Card styling: White, 12px radius, shadow
- Section gap: 16px
- Field gap: 16px within sections

### SECTION 1 - BASIC INFORMATION
- Header: "Basic Information" (16px, semi-bold, #1A1A1A)
- 16px margin horizontal

**Fields:**

**Full Name:**
- Prefix dropdown: "Mr." | "Mrs." | "Ms." (small, left)
- Text input: Full name
- Or split: First Name + Last Name
- Required asterisk

**Display Name (Optional):**
- Text input
- Helper text: "This will be shown to other agents"
- Character limit: 30

**Gender:**
- Radio buttons (horizontal):
  - Male | Female | Other | Prefer not to say
- Selected: Primary color filled circle

**Date of Birth:**
- Date picker input
- Format: DD/MM/YYYY
- Optional label
- Age auto-calculated and shown: "Age: 32"

### SECTION 2 - CONTACT DETAILS
- Header: "Contact Details"

**Primary Phone:**
- Display only (locked input, gray background)
- Lock icon
- "This is your login number"
- "✓ Verified" badge (green)
- Cannot be changed here

**Alternative Phone:**
- Number input with country code dropdown (+91)
- "Add number" button if empty
- "Verify" button if not verified (orange)
- "✓ Verified" badge if verified

**Email Address:**
- Email input
- Validation (email format)
- "Verify" button if not verified
- "✓ Verified" badge if verified
- Info icon: "Used for important updates"

**WhatsApp Number:**
- Checkbox: "Same as primary phone" (default checked)
- If unchecked: Separate number input

### SECTION 3 - PROFESSIONAL DETAILS
- Header: "Professional Information"

**Agency/Firm Name:**
- Text input
- Optional checkbox: "I'm an Independent Agent"
- If checked, firm name becomes optional

**RERA Number:**
- Text input with format hint
- Format: "KARNRAMAXXXXXXX"
- "Upload RERA certificate" button (below)
  - File picker opens
  - Shows uploaded file name if uploaded
- Verification status:
  - "Pending Verification" (orange)
  - "✓ Verified" (green)

**Years of Experience:**
- Dropdown: "0", "1-2", "3-5", "5-10", "10-15", "15+"
- Or number input with stepper

**Specialization:**
- Multi-select chips (wrap layout):
  - "Residential Sales"
  - "Residential Rental"
  - "Commercial"
  - "Land/Plots"
  - "Luxury Properties"
  - "Investment Properties"
- Selected: Primary fill, white text

**Operating Areas:**
- "+ Add location" input (searchable)
- Selected locations as removable chips below
- Limit: 10 locations
- Example: "Koramangala ×", "HSR Layout ×"

**Languages Known:**
- Multi-select chips:
  - English, Hindi, Kannada, Tamil, Telugu, etc.
- "+ Add custom" option for unlisted languages

### SECTION 4 - BUSINESS ADDRESS
- Header: "Business Address"

**Office Address:**
- Multi-line text input (3-4 lines)
- Placeholder: "Enter your office address"

**Landmark:**
- Text input
- Placeholder: "Near..."

**City:**
- Dropdown (searchable)
- Default: "Bangalore"

**Pin Code:**
- Number input (6 digits)
- Auto-validate format

**Location Buttons:**
- "Use current location" (location icon, primary outline)
- "Show on map" link (opens map preview)

### SECTION 5 - ONLINE PRESENCE (Optional)
- Header: "Online Presence"
- Collapsed by default (expandable)

**Website:**
- URL input
- Placeholder: "https://yourwebsite.com"
- Validation for URL format

**LinkedIn Profile:**
- URL input with LinkedIn icon (left)
- Placeholder: "linkedin.com/in/yourprofile"

**Facebook Page:**
- URL input with Facebook icon
- Placeholder: "facebook.com/yourpage"

**Instagram Handle:**
- Text input with @ prefix (shown in field)
- Instagram icon (left)
- Placeholder: "yourhandle"

### SECTION 6 - ABOUT ME
- Header: "About You"

**Bio/Description:**
- Text area (6 lines visible)
- 500 character limit
- Character counter: "245/500"
- Placeholder: "Tell other agents about your experience, specialization, and what makes you unique..."
- Optional rich text: Bold, Italic buttons
- Emoji picker button (optional)

### SECTION 7 - NOTIFICATION PREFERENCES
- Header: "Visibility Preferences"

**Toggle Switches:**
Each row: Label (left) + Toggle (right)
- "Show phone number to other agents"
- "Show email to other agents"
- "Allow direct messages"
- "Show in agent directory"
- "Include in agent network"

Toggle: Pill shape, primary when on, gray when off

## VALIDATION
- Real-time validation on blur
- Required fields: Red asterisk after label
- Error state:
  - Red border on input
  - Red error text below: "Please enter a valid email"
- Success state:
  - Green checkmark icon (right of input)
- Email format validation
- Phone format validation
- RERA format validation

## UNSAVED CHANGES HANDLING
- On back/close with unsaved changes:
  - Alert dialog:
    - Title: "Unsaved Changes"
    - Message: "You have unsaved changes. What would you like to do?"
    - Buttons: "Discard" (outline) | "Save Changes" (primary) | "Cancel"

## AUTO-SAVE (Optional)
- Indicator: "Draft saved 2 min ago" (top, subtle)
- Or rely on manual Save button only

## FOOTER (Sticky)
- White background with top shadow
- Height: 72px with padding
- Two buttons:
  - "Cancel" (outline, left)
  - "Save Changes" (primary filled, right)
- Disabled state when no changes made

## SUCCESS STATE
- On save success:
  - Toast notification: "Profile updated successfully" (green, top or bottom)
  - Or success checkmark animation
- Navigate back to profile view

## VERIFICATION PROMPTS
- Banner (if important fields unverified):
  - "Verify your email to unlock all features"
  - "Verify Now" button
  - Dismissible (×)

---

## Screen Dimensions
- Width: 390px
- Height: 844px (scrollable form)

## Background
- #F5F7FA page
- Input fields: #FFFFFF

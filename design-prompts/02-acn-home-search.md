# Prompt 2: ACN Home - Search Section

Design the top search section for ACN real estate app home screen:

## SEARCH BAR
- Prominent placement at top (16px margin from all sides)
- White background with border radius 16px
- Left: Search icon (gray, 20px)
- Placeholder: "Search " (gray text, 15px)
- Right: Filter icon button (gray, with subtle tap state)
- Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Height: 56px
- On tap: Navigate to dedicated search screen (non-functional input appearance)
- Inner padding: 16px horizontal

## PROPERTY TYPE PILLS (Below search, 12px gap)
- Horizontal scrollable chips with snap scrolling
- Pills: "Buy", "Rent", "Commercial", "Primary", "Land"
- Active pill (Buy): Solid primary color (#0066CC) with white text
- Inactive pills: White background with 1px gray border and gray text
- Pill dimensions: auto-width with 16px horizontal padding, 36px height
- Border radius: 18px (fully rounded)
- Include subtle press animation (scale 0.95)
- Gap between pills: 8px
- Scroll indicators fade at edges

## VISUAL STYLE
- Modern, clean, spacious design
- Use SF Pro or Roboto font
- Smooth transitions between states
- Ensure touch targets are minimum 44px
- Subtle gradient background from white to light blue (#F8FBFF) behind this section

## HEADER CONTEXT
- This section appears below the main tab bar
- Include the header with profile avatar (left) and notification bell (right)
- "ACN" tab should be shown as active

---

## Screen Dimensions
- Width: 390px
- Height: 300px (partial screen showing just this section with header)

---

## Color Reference
- Primary: #0066CC
- Background: #F8FBFF to #FFFFFF gradient
- Card/Pill background: #FFFFFF
- Border: #E0E0E0
- Text: #1A1A1A
- Placeholder text: #999999

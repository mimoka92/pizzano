Product Requirements

Document: Pizzano Menu Table

Formatting

Document Version: 1.0

Last Updated: February 10, 2026

Author: Product Team

Scope: Menu Table Layout \& Product Placement Standards

Executive Summary

This PRD de nes the speci cations for Pizzano's menu table layout,

focusing exclusively on visual formatting, product placement

hierarchy, spacing consistency, and table structure. The goal is to

create a professional, scannable menu that guides users to premium

items while maintaining visual clarity and brand consistency.

1\. Product Overview

1.1 Objective

De ne precise formatting and placement standards for the Pizzano

menu table to ensure:

Clear visual hierarchy of menu items

Optimal user scanning and readability

Strategic product promotion through placement

Consistent spacing and alignment

Professional presentation across all menu categories

1.2 Scope

This document covers:

Menu Table Structure: Grid layout, row/column speci cations

Product Placement: Strategic positioning of items

Spacing Standards: Vertical and horizontal padding, gaps

between items

Typography Hierarchy: Font sizes, weights for visual

distinction

Visual Elements: Borders, separators, highlighting treatments

Responsive Behavior: Table adaptation across breakpoints

Out of Scope:

Color palette or branding guidelines (existing brand reference)

Content copy or product descriptions

Backend data structure or API design

Business logic for menu ltering or ordering

2\. Menu Table Structure

2.1 Overall Layout Architecture

Grid System

Base Unit: 4pt (for ne-tuning), 8pt (for major spacing)

Column Grid: Left margin (16px) 

→

&nbsp;Content area 

→

&nbsp;Right

margin (16px)

Maximum Width: 1200px for desktop, full width with margins

for mobile

Row Height: Dynamic based on content, minimum 60px per

item

Table Orientation

Desktop: Multi-column grid (2-4 columns depending on

category)

Tablet (768px - 1023px): 2-column layout

Mobile (<768px): Single-column stacked layout

2.2 Category Sections

Each menu category is divided into logical sections:

●

●

●

●

●

●

Pizza - Featured section (top placement, "Golden Triangle")

Appetizers - Secondary placement

Pasta - Mid-priority positioning

Desserts - Lower priority (footer area)

Beverages - Lower priority (footer area)

Sides - Supporting items (grid corners)

2.3 Section Header Speci cations

Element

Speci cation

Font Size

Font Weight

Line Height

28px desktop / 24px mobile

700 (Bold)

1.2 (33.6px)

Color

Primary brand color

Top Margin

40px (from previous section)

Bottom Margin 24px (to rst item)

Letter Spacing

0.5px

Text Transform Title Case

Table 1: Section Header Typography Standards

3\. Product Card Layout \& Placement

3.1 Individual Product Card Structure

Each menu item is presented as a structured card with standardized

spacing:

Component

Height/Size Spacing

20px font

Product Name

Description (if present) 14px font

Price Area

Card Padding

Card Border Radius

Minimum Card Height —

0px top (baseline anchor)

8px from name

18px font

—

8px from description

16px all sides

—

8px

80px

Table 2: Product Card Component Speci cations

3.2 Placement Hierarchy (Golden Triangle Principle)

Strategic placement to maximize visibility and conversions:

1\. Top Right (Premium Position): Bestseller items, highest-margin

products, special o erings

2\. Top Center: Featured daily specials or signature items

3\. Top Left: Popular complementary items

4\. Middle Section: Standard menu items in balanced distribution

5\. Bottom Section: Supporting items, basic options, less promoted

products

3.3 Grid Positioning Rules

→

→

→

→

→

Desktop Grid: 4-column layout for Pizza category, 3-column for

other categories

Tablet Grid: 2-column layout for all categories

Mobile Grid: 1-column stacked layout

Grid Gap: 16px horizontal, 20px vertical (desktop); 12px both

(mobile)

Even Distribution: Items distributed evenly without visual

clustering

4\. Spacing \& Alignment Standards

Spacing Context Distance (px)

Section Title to First Item 24

Item to Item (vertical gap) 20

Section to Section (between

categories) 40

Product Card Internal Top Padding 16

Product Card Internal Bottom

Padding 16

Between Product Name Description (content

gap) 8

Between Description \& Price 12

Table 3: Vertical Spacing Speci cations

Spacing Context Distance (px)

Page Left Margin (desktop) 16

Page Right Margin (desktop) 16

Item to Item (horizontal gap - desktop) 16

Item to Item (horizontal gap - mobile) 12

Product Card Left Padding 16

Product Card Right Padding 16

Text to Left Edge (inside card) 16

Text to Right Edge (inside card) 16

Price Alignment Right Margin 16

Table 4: Horizontal Spacing Speci cations

Vertical Alignment: All items within a row align to baseline grid

(4pt increments)

Horizontal Alignment: Left-aligned text for primary content,

right-aligned for prices

4.1 Vertical Spacing

4.2 Horizontal Spacing

4.3 Alignment Principles

Product Name: Left-aligned, 16px from card edge

Price: Right-aligned, 16px from card edge

Descriptions: Left-aligned, wrapping to multiple lines if needed

5\. Typography Speci cations

5.1 Font Scale System

Element

Size

Weight Line Height

Section Header 28px / 24px

700

Product Name 20px / 18px 600

1.2

1.4

Product Price

Description

18px / 16px

14px / 13px

700

400

1.2

1.5

Badge/Label

12px / 11px

500

Table 5: Typography Scale (Desktop / Mobile values)

5.2 Font Family

1.2

Primary Font: System font stack or brand-aligned serif (e.g.,

Playfair Display for headers, Out t for body)

Fallback: Arial, Helvetica, sans-serif

Monospace (optional): For prices only if design system requires

6\. Visual Hierarchy \& Distinction

6.1 Product Card Styling

Standard Card

Background: White or brand secondary color

Border: 1px solid #E0E0E0 (light gray)

Border Radius: 8px

Shadow: 0px 2px 8px rgba(0,0,0,0.08)

Hover State: Shadow increases to 0px 4px 16px rgba(0,0,0,0.15)

Featured/Special Card

Background: Subtle background tint (brand accent at 10%

opacity)

Border: 2px solid brand primary color

Badge: "Bestseller" or "Chef's Pick" label (12px, bold)

Icon: Optional visual indicator (e.g., star icon)

Promoted Item Card (Top Right Position)

Treatment: Combination of featured styling + subtle highlight

Additional Visual Cue: 3px left border accent (brand primary

color)

6.2 Visual Separators

●

●

●

●

Between Sections: 2px solid divider, 40px margin top/bottom

Between Rows: Implicit through spacing (20px gap), no visible

line required

Between Columns: Implicit through spacing (16px gap), no

visible line required

Category Separator (Optional): Subtle background color shift

every 2 rows

7\. Responsive Breakpoints

7.1 Breakpoint Speci cations

Device

Mobile

Width

Columns Grid Gap

<768px

Tablet

Desktop

768px - 1023px

1

2

12px

14px

1024px - 1439px

Large Desktop

≥

1440px

3-4

4

Table 6: Responsive Breakpoint Grid Con guration

16px

20px

7.2 Mobile Optimization

Single Column: Full width minus margins (20px each side on

mobile)

Card Height: Flexible, minimum 80px

Font Scaling: Reduce headers to 24px, body text to 16-14px

Spacing Reduction: Decrease gaps by 2-4px on mobile

7.3 Touch Targets

Minimum Card Height (Mobile): 80px for adequate tap target

Minimum Horizontal Spacing: 12px between items to prevent

accidental taps

8\. Special Elements \& Treatments

8.1 Badges \& Labels

Badge Type

"Bestseller"

Placement \& Style

Top-right corner, 12px bold, brand primary bg

"New"

"Spicy"

Top-right corner, 12px bold, success green bg

Icon next to name or in description, 16px icon

"Vegetarian"

Leaf icon, inline with name

"Special Price" Bottom-right card corner, strike-through old price

Table 7: Badge Speci cations and Placements

8.2 Price Display Format

Standard: $XX.XX (right-aligned, bold 18px)

Sale Price: Show original (strike-through) + new price

Spacing Above Price: 12px from description or name

8.3 Images (Optional)

If product images are included:

Placement: Above product name (top of card)

Aspect Ratio: 1:1 square or 3:2 landscape

Height: 120px (mobile), 150px (desktop)

Border Radius: 6px (match card rounding)

Margin Below Image: 12px to product name

9\. Accessibility \& Readability

9.1 Color Contrast

Text on Card Background: Minimum 4.5:1 WCAG AA standard

Price Text: Bold weight to enhance legibility

Links/Badges: Su cient contrast for color-blind users

9.2 Readability Guidelines

✓

✓

✓

✓

✓

Line Length: Maximum 70 characters for descriptions

White Space: Minimum 16px padding in all cards

Text Wrapping: Product names should not wrap (keep under 30

chars)

Descriptions: Keep to 1-2 sentences maximum (14px)

Font Size Minimum: 14px for body text (desktop), 13px (mobile)

9.3 Mobile Readability

Thumb Zone: Most important items positioned in middle 60% of

screen

Scroll Zones: Category headers sticky or prominently positioned

Card Tappability: Full card is tap target, minimum 48x48px

10\. Implementation Details

10.1 CSS Grid/Flexbox Structure

Desktop Layout

grid-template-columns: repeat(4, 1fr);

gap: 16px 16px;

max-width: 1200px;

margin: 0 auto;

padding: 0 16px;

Tablet Layout

grid-template-columns: repeat(2, 1fr);

gap: 14px 14px;

Mobile Layout

grid-template-columns: 1fr;

gap: 12px;

padding: 0 20px;

10.2 Typography Implementation

Line Height: Set to 1.4 for body text (improve readability)

Letter Spacing: 0.5px for headers, 0 for body

Font Fallback Chain: Ensures degradation on missing fonts

10.3 Card Component Structure

.menu-card

Product Image (optional, 150px height)

Product Name (20px, 600 weight)

Description (14px, 400 weight)

Price Container

Original Price (strike-through if sale)

Current Price (18px, 700 weight, right-aligned)

Badge Container (top-right, if applicable)

11\. Quality Assurance Criteria

11.1 Layout Veri cation

\[ ] All cards maintain consistent padding (16px all sides)

\[ ] Spacing between items matches speci cations (±2px

tolerance)

\[ ] Grid alignment veri ed using browser dev tools with grid

overlay

\[ ] No text over ow in cards across all breakpoints

\[ ] Images display correctly at speci ed aspect ratios

11.2 Responsive Testing

\[ ] Mobile layout: Single column, 20px margins, readable at

375px width

\[ ] Tablet layout: 2 columns, 768px and 1023px breakpoints

veri ed

\[ ] Desktop layout: 3-4 columns display correctly at 1024px+

\[ ] Touch targets: Minimum 48px on mobile, 60px on desktop

11.3 Visual Consistency

\[ ] Typography scales match speci cations (±1px tolerance on

font sizes)

\[ ] Color contrast meets WCAG AA (4.5:1 minimum)

\[ ] Hover states function smoothly

\[ ] Cards align perfectly to baseline grid

11.4 Usability Testing

\[ ] Users can quickly identify premium/featured items (top right

placement)

\[ ] Menu items scannable without reading full descriptions

\[ ] Prices clearly visible and easy to locate

\[ ] No visual clustering or overwhelming density

12\. Appendix: Spacing Reference Grid

Visual Spacing Breakdown

Component

Top Right Bottom Left

Page Container 0px 16px

Section Header 40px 0px

0px

24px

16px

0px

Menu Card

0px

0px 20px (gap) 0px

Card Internal 16px 16px

16px

16px

Product Name 0px 0px

Description

8px

0px

8px

12px

0px

0px

Price

12px 0px

0px

0px

Table 8: Complete Spacing Reference (px values)

13\. Version History

Version Date

1.0

Changes

2026-02

10

Initial PRD - Menu table formatting and

placement standards

Table 9: Document Version History

Approval \& Stakeholders

Product Owner: \[To be assigned]

Design Lead: \[To be assigned]

Frontend Lead: \[To be assigned]

Date Created: February 10, 2026

Next Review Date: March 10, 2026


# Final Project

- **RESEARCH 4 Finishing Up**
- **TJ Clement**
- **Due Sun Aug 28**

<br>

## [Writing Clean Code](https://americanexpress.io/clean-code-dirty-code/)

**What is clean code?**

Clean code is a consistent style of programming that makes your code easier to write, read, and maintain.

- Clean code is DRY
  - Don't Repeat Yourself
- Clean code is predictable and testable
- Clean code is self-commenting
- Clean code follows proven design patterns and best practices
- Clean code doesn’t (necessarily) take longer to write
- Separate stateful aspects from rendering
- Use stateless functional components
- Destructure when applicable

## [Style Lint Guides](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)

- ABCSS (Alphabetical CSS)
  - Easy to find properties.
  - Scatters context.
- Groups (Property types)
  - Layout Properties (position, float, clear, display)
  - Box Model Properties (width, height, margin, padding)
  - Visual Properties (color, background, border, box-shadow)
  - Typography Properties (font-size, font-family, text-align, text-transform)
  - Misc Properties (cursor, overflow, z-index)
  - More than one standard.

**Reasons to use groups:**

- Groups is the most natural way of putting things together: that’s the way your write them.
- A good reason for groups could be atomic CSS.
- Smaller teams may prefer to cluster related properties.

**Reasons not to use groups:**

- "Groups" is great if it means the same thing to everyone. It usually doesn't.
- Larger teams may prefer the simplicity and ease-of-maintenance that comes with alphabetical ordering.

**Reasons to use alphabetical ordering:**

- Group sorting is too subjective. Plus there are plenty of addons to alpha sort a set of lines.
- New team members do not need to learn the group order.
- It’s easy to lint, there are tools to format it automatically, and there is no learning curve.
- When editing a CSS file, finding the declaration to change can be time consuming.
- Google css guide recommends ABCSS.

**_ABCSS_**

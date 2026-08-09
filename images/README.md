# Blazes screenshots

The gallery on the resume page loads these six files. Save each screenshot here
using the **exact filename** below — the gallery matches on filename.

| Filename | Which screenshot |
|---|---|
| `blazes-game.png` | The in-game question screen ("How many angles are in a triangle?") |
| `blazes-home.png` | Home / Quick Actions, with the Classes list |
| `blazes-achievements.png` | Achievements, showing 18/103 unlocked |
| `blazes-level.png` | Player profile — Level 3, daily XP, BlazesBucks |
| `blazes-stats.png` | Analytics dashboard — accuracy, totals, performance by category |
| `blazes-pricing.png` | Plans & Pricing — Blazes Plus and the BlazesBucks store |

Any file that's missing shows a "Screenshot not found" card in its slot naming
the file it wants, so the gallery keeps working while you fill it in.

## Notes

- `.png` is assumed. To use `.jpg` instead, update the `src` values in the
  `gallery` array at the top of `../script.js`.
- Slides are sized `16 / 10` and images are `object-fit: contain`, so any
  aspect ratio displays without cropping.
- Screenshots at 2560px wide are larger than needed. Resizing them to about
  1600px wide will noticeably speed up page load.
- To reorder slides, change the order of the `gallery` array in `../script.js`.
  Captions live there too.

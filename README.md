---
# Puzzle Vault

A tiny browser-based puzzle app that loads riddles from `puzzles.json`.

Quick start

- Open `index.html` in your browser (double-click the file).
- Or serve the folder and visit http://localhost:8080:

```powershell
npx http-server -c-1 -p 8080
# or
python -m http.server 8080
```

Files

- `index.html` — app UI
- `script.js` — frontend logic
- `style.css` — styles
- `puzzles.json` — sample puzzles

License: MIT

---

Simple and minimal — enjoy solving! 🧠


# Puzzle Vault

A tiny browser-based puzzle app that loads riddles from `puzzles.json`.

Quick start

- Open `index.html` in your browser (double-click the file).
- Or serve the folder and visit http://localhost:8080:

```powershell
npx http-server -c-1 -p 8080
# or
python -m http.server 8080
```

Files

- `index.html` — app UI
- `script.js` — frontend logic
- `style.css` — styles
- `puzzles.json` — sample puzzles



Puzzle Vault — Bugs

A small static web app  with beginner-friendly bugs for contributors to practice debugging, testing, and submitting focused PRs.

🎯 Purpose

- Provide beginner-friendly issues for Hacktoberfest and newcomers
- Give contributors a simple, real-world repo to practice finding and fixing bugs
- Teach common frontend issues (DOM refs, event binding, sanitization, styling)

Quick run

```bash
# clone
git clone https://github.com/<owner>/<repo>.git
cd <repo>

# open directly
start index.html    # Windows


Then open http://localhost:8080 in your browser.

Short list of bugs (high priority first)

- Frontend: puzzles do not display — `showPuzzle()` is intentionally disabled; page load calls it but it returns immediately. (High)
- Frontend: Show Answer is not bound — script queries `show-ans` while HTML button uses `show-answer`, so clicking does nothing. (High)
- Frontend: Check Answer listener may not attach — HTML button id is `chek-answer` (typo), so the script cannot find it in some builds. (High)
- Frontend: Progress bar invisible — `#progress` lacks a visible background color, so width changes aren't visible. (Medium)
- Frontend: Navigation boundary off-by-one — next handler may let `currentIndex` reach `puzzles.length`, risking undefined puzzle access. (Medium)
- Backend: (N/A) This is a static frontend-only project — no server-side code to validate here. (Low)
- CSS: minor responsiveness improvements recommended for small screens. (Low)

Project structure

```
Puzzle Vault/
├── index.html      # Main HTML
├── style.css       # Styles
├── script.js       # Frontend logic (with intentional bugs)
├── puzzles.json    # Sample puzzles
└── README.md       # This file
```

Testing your fixes

1. Start the app (open `index.html` or serve locally).
2. Reproduce the reported bug (steps listed above).
3. Implement a focused fix and reload the page.
4. Verify behaviour and check DevTools console for errors.
5. Test edge cases (empty input, navigating at boundaries).

Contributing guidelines

- One bug per PR. Keep changes small and focused.
- Include a short description of the problem, what you changed, and how you verified the fix.
- Add tests or manual verification steps when applicable.
- Be respectful; ask for help if you get stuck.

Labels for issues

- good first issue — beginner-friendly
- bug — broken functionality
- enhancement — improvements
- documentation — docs only
- help wanted — extra attention needed

Acknowledgments

Created for learning and Hacktoberfest practice. Thanks to contributors who help improve this repo.

Happy debugging! 🐛✨



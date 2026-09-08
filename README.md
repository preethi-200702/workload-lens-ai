# Workload Lens

Build a polished, functional web application prototype called "DeadlineLens AI".

IMPORTANT:

This is a hackathon/innovation prototype and we have only a short time to demonstrate it. Prioritize a working, clickable and visually polished MVP over complex backend infrastructure.

CONCEPT:

DeadlineLens AI is an AI-powered workload intelligence application.

The problem:

Students and young professionals receive work from many sources such as assignment descriptions, project requirements, meeting notes and messages. Traditional task managers require users to manually create and organize tasks. They do not focus primarily on whether the user's overall workload is realistically achievable.

Our solution:

The user can paste unstructured work requirements into DeadlineLens AI. The application analyzes the information, extracts tasks, identifies deadlines, estimates effort, assigns priority, detects workload collisions and generates a recommended work plan.

The key differentiator is:

"Don't just manage tasks. Understand whether your workload is achievable."

BUILD THESE 5 MAIN SCREENS:

1. LANDING / DASHBOARD

Create a modern productivity dashboard.

Header:

DeadlineLens AI

"See your workload before it overwhelms you."

Show summary cards:

- 7 Active Tasks

- 3 High Priority

- 2 Workload Conflicts

- 24 Estimated Hours

Show a weekly workload visualization.

Use a clean modern UI with:

- White/light background

- Dark text

- Subtle blue/purple accent

- Rounded cards

- Professional SaaS-style interface

- Good spacing

- Responsive desktop and mobile layout

Include a prominent:

"+ Add New Work"

button.

--------------------------------------------------

2. ADD WORK SCREEN

Create a page where the user can paste or type unstructured work information.

Heading:

"Add your work"

Subheading:

"Paste assignments, project requirements, meeting notes or other work. DeadlineLens will turn them into an actionable workload."

Large textarea.

Pre-fill it with this DEMO DATA:

"DBMS Assignment: Complete normalization and SQL questions. Due September 12. Estimated effort 3 hours.

Java Project: Build the authentication and dashboard modules. Due September 15. Estimated effort 8 hours.

Presentation: Prepare a 10-slide presentation and practice the explanation. Due September 14. Estimated effort 4 hours.

Aptitude Practice: Complete 3 practice modules before the assessment. Due September 13. Estimated effort 2 hours.

Project Documentation: Prepare the final project documentation. Due September 16. Estimated effort 3 hours."

Add a large button:

"Analyze My Workload"

When clicked, show a short loading animation:

"Analyzing your workload..."

"Extracting tasks..."

"Estimating effort..."

"Checking deadline conflicts..."

Then navigate to the analysis results.

--------------------------------------------------

3. AI ANALYSIS SCREEN

Create an AI analysis results page.

Heading:

"Workload Analysis"

Show extracted tasks in a professional table.

Columns:

Task

Deadline

Estimated Effort

Priority

Status

Use these results:

DBMS Assignment | Sep 12 | 3 hrs | High | Not Started

Aptitude Practice | Sep 13 | 2 hrs | Medium | Not Started

Presentation | Sep 14 | 4 hrs | High | Not Started

Java Project | Sep 15 | 8 hrs | High | Not Started

Project Documentation | Sep 16 | 3 hrs | Medium | Not Started

Above the table show:

"5 tasks identified"

"20 estimated hours"

"3 high-priority tasks"

Add a small explanation:

"AI identified multiple high-effort tasks with closely spaced deadlines."

Add button:

"View Workload"

--------------------------------------------------

4. WORKLOAD MAP SCREEN

This is the CORE FEATURE and should be visually impressive.

Heading:

"Your Workload Map"

Show a 7-day workload visualization.

Use:

September 9 — 2 hrs — Light

September 10 — 3 hrs — Moderate

September 11 — 4 hrs — Moderate

September 12 — 6 hrs — High

September 13 — 7 hrs — Critical

September 14 — 6 hrs — High

September 15 — 5 hrs — High

Use visual workload indicators:

Green = Light

Yellow = Moderate

Orange = High

Red = Critical

Clearly highlight September 13 and September 14.

Add a warning card:

"⚠ Workload Collision Detected"

"September 13–14 contains approximately 13 hours of planned work across multiple deadlines."

Then show:

"Your workload is unevenly distributed. Starting the Java Project and DBMS Assignment earlier can reduce peak workload."

Add button:

"Get AI Recommendation"

--------------------------------------------------

5. AI RECOMMENDATION SCREEN

This should be the final WOW screen.

Heading:

"AI Recommended Plan"

Show a prominent recommendation card:

"Start earlier to avoid a deadline collision."

Then show:

TODAY

→ Start DBMS Assignment

→ Spend 1.5 hours

SEPTEMBER 10

→ Start Java Project

→ Spend 2 hours

SEPTEMBER 11

→ Continue Java Project

→ Spend 2 hours

SEPTEMBER 12

→ Complete DBMS Assignment

→ Practice Aptitude

→ Total: 3 hours

SEPTEMBER 13

→ Continue Java Project

→ Total: 3 hours

SEPTEMBER 14

→ Complete Presentation

→ Total: 4 hours

SEPTEMBER 15

→ Finish Java Project

→ Total: 3 hours

Add another card:

"Why this plan?"

"Your original workload had a high concentration of tasks around September 13–14. Starting high-effort tasks earlier reduces the peak workload and creates buffer time before deadlines."

Add a button:

"Back to Dashboard"

--------------------------------------------------

IMPORTANT PRODUCT BEHAVIOR:

The prototype should feel like a REAL APPLICATION, not a static presentation.

Buttons should work.

The user should be able to follow this demo flow:

Dashboard

→ Add New Work

→ Analyze My Workload

→ AI Analysis

→ View Workload

→ Get AI Recommendation

→ Recommended Plan

Use smooth transitions where appropriate.

For this prototype, you may use pre-configured demo data instead of requiring a real LLM API.

However, the UI should clearly communicate where AI analysis occurs.

Do NOT build:

- Login/signup

- Payment

- Android application

- Complex authentication

- Complex database

- Gmail integration

- Google Calendar integration

- Slack integration

- Notifications

- Admin dashboard

Those belong in future scope.

--------------------------------------------------

IMPORTANT DESIGN REQUIREMENTS:

Make the interface look like a serious startup/hackathon product.

Avoid:

- Generic chatbot appearance

- Excessive gradients

- Stock images

- Unnecessary animations

- Too many pages

- Fake statistics

- Lorem ipsum

- Generic task-manager design

The main visual focus should be:

1. Workload visualization

2. Collision detection

3. AI recommendation

Use clear typography, cards, charts, badges and progress indicators.

Include a small label somewhere:

"AI Workload Intelligence"

and a footer:

"DeadlineLens AI — Plan smarter. Avoid workload collisions."

Make the final result polished enough to demonstrate to hackathon judges.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://workload-lens-ai.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/235054e9-4a91-409f-ae18-50fc383c16d2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# Job Portal SPA (Frontend-only)

A professional dark-themed Job Portal built with Vite + React + React Router and vanilla CSS. It fetches initial jobs from a public fake API and persists all client actions in localStorage. No backend or real authentication.

## Tech Stack
- Vite + React (JavaScript)
- React Router v6
- Vanilla CSS (single global stylesheet)

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
   The app runs on http://localhost:5173

3. Build for production
   ```bash
   npm run build && npm run preview
   ```

## Features
- Recruiter / Job Seeker roles (purely client-side toggle)
- Fetch initial jobs from https://jsonfakery.com/jobs
- Normalize and merge API jobs with locally created jobs (local jobs appear first)
- Persist state to localStorage keys:
  - `jp_userRole` ("recruiter" | "seeker")
  - `jp_jobs_custom` (array of recruiter-created jobs)
  - `jp_applied_job_ids` (array of applied job IDs)
- Search by title/company (debounced 250ms)
- Filter by type (All/Full-time/Part-time/Contract)
- Sort by posted date (Newest/Oldest)
- Recruiter CRUD: create, edit, delete job postings
- Job Seeker can apply/withdraw applications
- Job Detail page with actions based on role
- Accessible dark theme, responsive layout, subtle micro-animations

## Project Structure
```
src/
  components/      # UI components (Header, Toolbar, Cards, Menus, Toast, Modal)
  pages/           # Route pages: Landing, PostJob, MyListings, MyJobs, JobDetail
  hooks/           # Custom hooks (debounce)
  utils/           # API, storage, formatting helpers
  App.jsx          # Routes + global shell
  main.jsx         # App bootstrap
  styles.css       # Global dark theme styles
```

## Data Model & Normalization
Jobs are normalized to:
```
{
  id: string,
  title: string,
  company: string,
  type: 'Full-time' | 'Part-time' | 'Contract',
  location: string,
  postedAt: ISOString,
  description: string,
  salary?: string,
  source: 'api' | 'custom'
}
```
- Custom jobs created in-app get `source: 'custom'` and an id like `local_<timestamp>`.
- For the current session, newly created jobs show a transient "New" tag (not persisted).

## Routing
- `/` Landing (Job Seeker default view)
- `/post` New Job Posting (Recruiter) — same form used for editing via `?id=<jobId>`
- `/my-listings` My Job Listings (Recruiter)
- `/my-jobs` My Jobs / Applications (Job Seeker)
- `/job/:id` Job Detail (Both roles)

## Key Decisions
- Single global CSS for simplicity and performance; CSS Modules could be added later if needed.
- localStorage used as the durable store; React state is the immediate UI source of truth.
- When API fetch fails, an inline error is shown with Retry, and local job creation remains fully functional.
- Edit flow reuses the Post form via `?id=` prefill.

## Limitations
- No backend or authentication. Role switch only changes the UI controls.
- No pagination or infinite scroll.
- API schema is assumed; `utils/format.js` normalizes fields defensively.
- Basic optimistic UI without complex error handling for storage quota or network flakiness.

## Accessibility
- High-contrast dark theme.
- Focus styles for interactive controls.
- ARIA attributes for menus, modals, toasts where appropriate.

## Credits
- Fake jobs API: https://jsonfakery.com/jobs

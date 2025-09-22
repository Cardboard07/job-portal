# Job Portal Application

## Project Overview
This project is a **frontend-only Job Portal web application** built with **React, Vite, and CSS**.  
It simulates a job board where **Recruiters can post/manage jobs** and **Job Seekers can view/apply for jobs**.

The app uses a **dummy jobs API** (`https://jsonfakery.com/jobs`) for initial job listings and relies on **localStorage** to persist user interactions (posted jobs, applied jobs, and role selection).  

The application follows a **dark theme** with a professional look, responsive design, and role-based views for **Recruiter** and **Job Seeker**.  

---

## Features

###  Core Features
- Add, update, delete job postings (Recruiter role).
- Sort jobs by date posted (Newest/Oldest).
- View job details with full description.
- Switch between roles (Recruiter / Job Seeker).
- Job Seekers can apply to jobs and see their applications.
- Search & Filter jobs (by title/company and job type).

### Additional Features
- **“New” tag** for jobs created by recruiters.
- **Kebab menu (⋮)** for recruiters to edit/delete their own jobs.
- **Relative dates** (e.g., “3d ago”).
- **Responsive grid layout** for listings.
- **Accessible dark theme** with good contrast and keyboard navigation.

---

## Tech Stack

- **React (Vite + JSX)** → fast and modular SPA setup.  
- **React Router** → page navigation (`/`, `/post`, `/my-listings`, `/my-jobs`, `/job/:id`).  
- **CSS (custom)** → dark theme, responsive grid, hover states, consistent typography.  
- **LocalStorage** → persist recruiter’s jobs, applied jobs, and role state.  
- **Fetch API** → pull jobs from `jsonfakery.com`.  

---

## Pages

- **Landing Page (`/`)** – Default Job Seeker page, search, filter, sort, listings grid.
- **Post Job (`/post`)** – Recruiter form to create a new job posting.
- **My Listings (`/my-listings`)** – Recruiter’s posted jobs with Edit/Delete options.
- **My Jobs (`/my-jobs`)** – Job Seeker’s applied jobs with Withdraw option.
- **Job Detail (`/job/:id`)** – Full job description with Apply/Withdraw or Edit/Delete.

---

## Why Seeker is the Default Role

The majority of users in any job portal are **Job Seekers** rather than recruiters.  
By defaulting to the **Seeker role** on landing:
- First-time visitors instantly see job listings without setup.  
- It aligns with real-world usage patterns (most users come to apply, not to post).  
- It reduces friction and improves onboarding for the majority group.  

Recruiters can easily switch roles using the role selector in the header.  

---

## UI/UX Design Decisions

- **Dark Theme**: Gives the app a professional, modern feel with high contrast and accessibility.  
- **Responsive Layout**: Job cards adapt to 1–3 columns depending on screen size.  
- **Intuitive Navigation**:  
  - Header always visible with role switcher and actions dropdown.  
  - Clear separation of Recruiter vs Seeker features.  
- **Interactive Feedback**:  
  - Hover effects guide users without clutter.  
  - Toasts/confirmation messages ensure users understand their actions.  
- **Accessible Design**: Keyboard-friendly dropdowns, visible focus outlines, and WCAG-compliant contrasts.  

Together, these choices make the application **easy to follow, intuitive for first-time users, and scalable for more advanced features in the future**.  

---

## Installation & Usage

```bash
# Clone the project
git clone <repo_url>
cd job-portal

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## Limitations

- No backend: Jobs and applications are only saved in localStorage.  
- Roles are client-side only (no real authentication).  
- API data is mock/fake and may differ in schema.  
- Search/filter/sort are simple and not optimized for large datasets.  

---

## Future Improvements

- Add real backend (Node.js + MongoDB/Express).  
- Implement authentication (JWT-based).  
- Add resume upload for applicants.  
- Pagination or infinite scroll for jobs.  
- Unit tests (React Testing Library / Jest).  

---

## Conclusion

This project demonstrates:  
- Building a **multi-page React SPA** with role-based UI.  
- Integrating a **public API** with local state management.  
- Implementing **CRUD operations** on local data.  
- Designing a **dark-themed, responsive, intuitive UI/UX**.  

It fulfills the assignment requirements while also showing attention to **real-world user behavior** and **user-centered design principles**.

# AI Context: Splitwise Clone

## Product Understanding
The application is a simplified clone of Splitwise, designed to help users track shared expenses, manage group balances, and settle debts. The core value proposition is keeping a transparent ledger of "who owes whom" to eliminate the awkwardness of splitting bills. It relies on a double-entry style accounting system simplified into "Expense Shares" and "Settlements".

## Workflows Identified
1. **User Onboarding**: Users register, log in, and manage their session.
2. **Group Management**: Users create groups (e.g., "Goa Trip", "Apartment"), and add/remove members.
3. **Expense Management**: A user creates an expense in a group, specifying the total amount, who paid it, and how it's split (Equally, Unequally, Percentage, or Shares) among participants.
4. **Expense Interaction**: Users can view expense details and comment in real-time.
5. **Balance Tracking**: The system dynamically calculates net balances for each user globally and per group.
6. **Settlement**: Users record payments to settle their debts with other users.

## Edge Cases Identified
- **Invalid Split Amounts**: Creating an unequal split where the sum of parts does not exactly match the total expense amount.
- **Removing Members with Balances**: Attempting to remove a member from a group when they still have an unsettled balance within that group.
- **Zero Amount Expenses**: Preventing creation of $0 expenses.
- **Self-Settlement**: Preventing a user from settling a debt with themselves.
- **Concurrent Updates**: Handling race conditions if multiple users update/delete an expense simultaneously.

## Scope
### In Scope
- Authentication (Register, Login, Session)
- Group Management (Create, Update, Delete, Members)
- Expense Tracking (Equal, Unequal, Percentage, Share splits)
- Settlements (Record payments)
- Balance Summaries (Total Owed, Total Receivable, Group/User Balances)
- Real-time Comments on Expenses

### Out of Scope (Non-Goals)
- OCR Receipt Scanning
- Currency Conversion
- Mobile Applications
- Push Notifications
- Recurring Expenses
- AI Features
- Complex Debt Simplification (unless implicitly required by standard "Who owes whom" display, we will focus on standard Net Balance calculations)

## Technical Decisions
- **Framework**: Next.js 15 (App Router) for full-stack capabilities, simplified routing, and SSR/SSG.
- **Database**: MongoDB for scalable document data. Prisma as ORM.
- **Auth**: NextAuth.js for secure session management.
- **Real-time**: Pusher for real-time WebSocket communication for expense comments.
- **Styling**: Tailwind CSS + shadcn/ui for modern, accessible, and fast UI development.
- **State Management**: React Query for data fetching, caching, and synchronization.
- **Validation**: Zod for both client-side and server-side validation.

## Database Schema Design
- `User`: id, name, email, passwordHash, createdAt, updatedAt
- `Group`: id, name, description, createdBy, createdAt, updatedAt
- `GroupMember`: id, groupId, userId, joinedAt
- `Expense`: id, groupId, title, description, amount, paidBy, splitType, createdAt, updatedAt
- `ExpenseShare`: id, expenseId, userId, amountOwed, percentage, shares
- `Settlement`: id, groupId, payerId, receiverId, amount, note, createdAt
- `ExpenseComment`: id, expenseId, userId, message, createdAt

## APIs
- **Auth**: `POST /api/auth/register`
- **Groups**: `GET`, `POST /api/groups`, `GET`, `PATCH`, `DELETE /api/groups/:id`
- **Members**: `POST /api/groups/:id/members`, `DELETE /api/groups/:id/members/:memberId`
- **Expenses**: `GET`, `POST /api/expenses`, `GET`, `PATCH`, `DELETE /api/expenses/:id`
- **Comments**: `GET`, `POST /api/expenses/:id/comments`
- **Settlements**: `POST`, `GET /api/settlements`
- **Balances**: `GET /api/balances`, `GET /api/groups/:id/balances`

## Frontend Structure
- `/app/login/`
- `/app/register/`
- `/app/dashboard/`
- `/app/groups/`
- `/app/groups/[id]/`
- `/app/expenses/`
- `/app/expenses/[id]/`
- `/app/settlements/`
- `/app/profile/`

## Deployment Plan
- **Frontend & Serverless Functions**: Vercel
- **Database**: MongoDB Atlas

## Known Limitations
- None currently.

## Change History
- **2026-06-12**: Initial context created.
- **2026-06-12**: Completed Phase 1 (Research & Context), Phase 2 (Build Plan), and Phase 3 (Prisma Schema).

# Build Plan: Splitwise Clone

## 1. Product Research
Splitwise simplifies the process of splitting bills among friends and roommates. 
Core functionalities include:
- A user can create a group and invite others.
- Any user in the group can add an expense.
- Expenses can be split in multiple ways: Equally, Exact Amounts, Percentages, and Shares.
- The system automatically calculates "Who owes whom".
- Users can record a settlement payment to balance the books.
- Real-time updates (like comments) keep participants in sync.

The most complex part of Splitwise is the balance calculation logic and debt simplification (optional, but net balances are mandatory). 

## 2. Architecture
- **Framework**: Next.js 15 App Router. Next.js offers a great developer experience and simple API route creation for the backend, co-located with the frontend code.
- **Language**: TypeScript (Strict mode enabled).
- **Backend API**: Next.js Route Handlers (`app/api/...`).
- **Database**: MongoDB using Prisma ORM. Prisma provides excellent type safety with TypeScript.
- **Authentication**: NextAuth.js (v4/v5 depending on compatibility with Next 15) using credentials or magic links.
- **Real-time Engine**: Pusher. Since Next.js API routes are serverless, WebSockets can be difficult to maintain persistently. Pusher is a great service for integrating real-time Pub/Sub without managing a dedicated WebSocket server.
- **State Management**: React Query (TanStack Query) for fetching and caching API data. Zustand for any local global state (e.g., active group selection, UI toggles).
- **Styling**: Tailwind CSS with shadcn/ui. This provides pre-built, accessible, and customizable UI components, accelerating development.

## 3. Database Design
We will use a relational model to ensure data integrity, especially for financial transactions.
- **Users**: Core identities.
- **Groups**: Collections of users.
- **GroupMembers**: Join table for Users and Groups.
- **Expenses**: The root record of a cost.
- **ExpenseShares**: Represents each individual's stake in a single Expense (how much they owe).
- **Settlements**: Represents direct payments from one user to another to clear debt.
- **ExpenseComments**: Chat messages attached to an Expense.

*Refer to `AI_CONTEXT.md` for specific schema fields.*

## 4. API Design
RESTful API principles will be used to design Next.js API routes.
- `/api/auth/*`: Managed by NextAuth.
- `/api/groups`: CRUD operations for Groups.
- `/api/groups/:id/members`: Managing Group Memberships.
- `/api/expenses`: CRUD operations for Expenses.
- `/api/expenses/:id/comments`: Managing Real-time comments.
- `/api/settlements`: Recording debt settlements.
- `/api/balances`: Computing and retrieving user and group net balances.

## 5. Frontend Design
We will build a responsive web application.
- **Design System**: shadcn/ui (Radix UI primitives + Tailwind CSS).
- **Pages**:
  - `/(auth)/login` & `/(auth)/register`: Unauthenticated flows.
  - `/dashboard`: Overall summary (Total owed/owed to, recent activity).
  - `/groups`: List of groups.
  - `/groups/[id]`: Group detail view (Expenses list, members list, group specific balance).
  - `/expenses/create`: Form to add a new expense.
  - `/expenses/[id]`: Detail view of an expense, including the breakdown and the real-time comment section.
  - `/settlements`: Form to record a payment.

## 6. Deployment Strategy
- **Frontend & Backend**: Deployed as a single monolithic application on Vercel. Vercel perfectly supports Next.js 15 features, including Edge functions and Serverless API routes.
- **Database**: MongoDB Atlas. Excellent integration with Vercel and Prisma.
- **Real-time**: Pusher Channels.

## 7. Tradeoffs
- **Next.js API Routes vs. Dedicated Backend (e.g., Express/NestJS)**: We are using Next.js API routes to simplify deployment and development speed. The tradeoff is that long-running tasks or persistent WebSockets are difficult, which is why we must use Pusher for real-time features.
- **Prisma vs. Raw SQL**: Prisma provides a great developer experience and type safety for rapid prototyping.
- **Floating Point Math for Balances**: Standard JS numbers (floating-point) can lead to precision errors. For a real financial app, we would use an integer-based cents system. For this clone, we will use Float in MongoDB.

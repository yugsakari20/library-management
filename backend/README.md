# Library Management System — Backend

## Setup
1. Copy `.env.example` to `.env` and set values.
2. Install deps: `npm install`
3. Run dev server: `npm run dev` (or `npm start`)

## API
- `POST /api/auth/register` {name,email,password}
- `POST /api/auth/login` {email,password}
- `GET /api/books?q=search` public list/search
- `POST /api/books` (admin) create
- `PUT /api/books/:id` (admin) update
- `DELETE /api/books/:id` (admin) delete
- `POST /api/loans/borrow/:bookId` (auth) borrow
- `POST /api/loans/return/:loanId` (auth) return
- `GET /api/loans` (auth) my loans or all if admin

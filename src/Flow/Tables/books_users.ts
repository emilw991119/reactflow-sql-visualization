const booksUsersTable = {
  name: "books_users",
  columns: [
    {
      name: "book_id",
      description: "Book’s id.",
      handleType: "target",
      type: "integer"
    },
    {
      name: "user_id",
      description: "User’s id.",
      handleType: "target",
      type: "integer"
    },
    {
      name: "last_page",
      description: "A number of the last page a user read in the book.",
      type: "integer"
    },
    {
      name: "created_at",
      description: "When the user started reading the book.",
      type: "datetime"
    },
  ]
};

export default booksUsersTable;

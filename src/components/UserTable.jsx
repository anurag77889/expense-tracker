import React, { memo, useCallback, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const handleSort = useCallback(
    (key) => {
      setSortConfig((prevConfig) => {
        const direction =
          prevConfig.key === key && prevConfig.direction === "asc"
            ? "desc"
            : "asc";

        const sortedUsers = [...users].sort((a, b) => {
          if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
          if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
          return 0;
        });

        setUsers(sortedUsers);
        return { key, direction };
      });
    },
    [users]
  );
  return (
    <>
      <h2>User Management Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <SortableHeader
              columnKey="id"
              label="ID"
              sortConfig={sortConfig}
              onSort={handleSort}
            />
            <SortableHeader
              columnKey="name"
              label="Name"
              sortConfig={sortConfig}
              onSort={handleSort}
            />
            <SortableHeader
              columnKey="age"
              label="Age"
              sortConfig={sortConfig}
              onSort={handleSort}
            />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const SortableHeader = memo(({ columnKey, label, sortConfig, onSort }) => {
  const isSorted = sortConfig.key === columnKey;
  const direction = isSorted
    ? sortConfig.direction === "asc"
      ? "↑"
      : "↓"
    : "";

  console.log(`rendering header for column : ${label}`);

  return (
    <th onClick={() => onSort(columnKey)} style={{ cursor: "pointer" }}>
      {label} {direction}
    </th>
  );
});

export default UserTable;

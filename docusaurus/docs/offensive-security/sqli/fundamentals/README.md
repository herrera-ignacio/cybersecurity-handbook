# SQLi Fundamentals

## Overview

A SQL injection occurs when a malicious user attempts to pass input that changes the final SQL query sent by the web application to the database, enabling the user to perform other unintented SQL queries.

1. The attacker has to inject code outside the expected user input limits, so it does not get executed as simple user input. In most cases, this is done by injecting a single quote (`'`) or a double quote (`"`) to escape the limits of user input and inject data directly into the SQL query.
2. Attacker has to look for a way to execute a different SQL query. This can be done using SQL to make up a working query that executes both the intended and the new SQL queries (e.g., using [stacked](https://www.sqlinjection.net/stacked-queries/) queries or [union](https://www.mysqltutorial.org/sql-union-mysql.aspx/) queries).
3. To retrieve the new query's output, we have to interpret it or capture it on the web application's frontend.

### Use cases

SQLi can have a great impact, especially if privileges on the server and database are lax.

- Retrieve secret/sensitive information that shouldn't be visible to us.
- Subvert the inteded web application logic (e.g., bypass login, access admin panels).
- Read/write files directly on the server which, in turn, might lead to placing back doors.

### Prevention

SQLi is usually caused by poorly coded web applications or poorly secured back-end server and database privileges. Secure coding methods can reduce the changes of being vulnerable to SQLi (e.g., input sanitization and validation, proper back-end user privileges and control).

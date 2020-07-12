# SQL Injection

SQLi attack consists of __injection of a SQL Query via the input data from the client to the application__.

Successful SQLi explot can read sensitive data from database, modify it, execute administration operations (suh as shutdown the DBMS), recover the content of a given ifle present on the DBMS file system, and in some cases, issue commands to the operating system.

* [OWASP: SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
* [SQLWiki Netspi](https://sqlwiki.netspi.com/#mysql)
* [OWASP: Testing for SQLi](https://github.com/OWASP/wstg/blob/master/document/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05-Testing_for_SQL_Injection.md)
* [SQL Injection Knowedge Base](https://www.websec.ca/kb/sql_injection#MySQL_Testing_Injection)
* [Bobby Tables XKCD](https://stackoverflow.com/questions/332365/how-does-the-sql-injection-from-the-bobby-tables-xkcd-comic-work)

## Threat Modeling

SQLi attacks allows attacerks to spoof identity, tamper with existing data, allow the complete disclosure of all data on the system, destroy data/make it unavailable, and become administrators of the database server.

SQLi is very common with PHP and ASP applications due to the prevalence of older functional interaces.

Severity of SQLi is limited by attacker's skill and imaginatino, and to a lesser extent, defense in depth countermeasures, such as low privilege connections to the database server and so on.

In general, consider SQL injection a high impact severity.

## How it works

Essentially, the attack is accomplished by placing a meta characeter into data input to then place SQL ommands in the control plane, which did not exist there before.

Some common payloads for a SELECT query are:
* `' OR 1=1 --` (constant true)
* `' AND 0=1 --` (constant false)
* [More common payloads](https://medium.com/@ismailtasdelen/sql-injection-payload-list-b97656cfd66b)

## Data Exfiltration

Exfiltrating data allows easier data analysis, as well as an offline copy of any compromised data.

[Netspi's SQL Wiki: Exfiltrating methods](https://sqlwiki.netspi.com/attackQueries/dataExfiltration/#mysql)

### Examples

#### Example 1

SQL

```sql
select id, firstname, lastname from authors
```

Input
```
Firstname: evil'ex
Lastname: Newman
```

Result Query
```sql
select id, firstname, lastname from authors where forename = 'evil'ex' and surname ='n
```

Which database attempts to run:
```
Incorrect syntax near il' as the database tried to execute evil.
```

#### Example 2

We construct a SQL query dynamically
```
 ...
    string userName = ctx.getAuthenticatedUserName();
    string query = "SELECT * FROM items WHERE owner = "'"
                    + userName + "' AND itemname = '"
                    + ItemName.Text + "'";
    sda = new SqlDataAdapter(query, conn);
    DataTable dt = new DataTable();
    sda.Fill(dt);
    ...
```

This is intended to execute as follows
```sql
    SELECT * FROM items
    WHERE owner =
    AND itemname = ;
```

Suppose we enter as `itemname` the string `"name' OR 'a'='a" `

```sql
    SELECT * FROM items
    WHERE owner = 'wiley'
    AND itemname = 'name' OR 'a'='a';
```

The addition of the `OR 'a'='a'` condition causes the where clasue to evaluate to true, so the query becomes logically equivalent to:

```sql
    SELECT * FROM items;
```

This simplification allows the attacker to bypass the requiremnt that the query only return items owned by the authenticated user.

Even worst, suppose we enter as `itenname`: `"name'); DELETE FROM items;--"`

This now becomes
```sql
    SELECT * FROM items
    WHERE owner = 'hacker'
    AND itemname = 'name';

    DELETE FROM items;
```

Notice the trailing pair of hypens (`--`). This specifies to most database ervers that the remainder of the statement is to be treated as a comment and not executed. In this case, it serves to remove te trailing single-quote left over from the modified query.

In a database where comments are not allowed to be used in this way, the general attack could still be made effective using: `“name’); DELETE FROM items; SELECT * FROM items WHERE ‘a’=’a”`.

## Mitigation

* Handle SQLi attackas as an input validation problem
    * Whitelist safe values
    * Identify and escape a blacklist of potentially malicious values
* Parameterized SQL statements
* Use Stored Procedures (help limiting types of statements but they still fail to protect against many SQLi vulnerabilities)

## Types

* Blind SQLi
    * Oracles (Partial Blind)
    * Truly Blind or Full Blind
* Union Based injection
* Error Based injection

### Blind SQLi

Your input is being inserted into a query, but you can't directly see the results of the query.

For instance, a login page might contain bind SQLi, in that you can only get back whether or not a login has succeeded.

__Oracles__ is when you're able to __get back a ginary condition__ (success or failure).

__Truly blind__ is when you see no difference whether the query failed or not.

### Union-Based injection

Union-Based SQL injection allows an attacker to extract information from the database by extending the results returned by the original query. The `UNION` keyword can be used to __retrieve data from other tables__.

The following SQL query will return a single result set with two columns. This implies that individual queries must return the same number of columns, and data types in each clumn ust be compatible with the individual queries.
```SQL
SELECT a,b FROM table1 UNION SELECT c,d FROM table2
```

The `UNION` operator can only be used if the original/new queries have the same structure (nubmer and data type of columns).

This method can also be used to __extract database's server related information__ such as database's users and credentials, table names, etc...

[Netspi's SQL Wiki - Union-Based injection](https://sqlwiki.netspi.com/injectionTypes/unionBased/#mysql)
[SQLi Medium note about Union-Based Injection on MySQL](https://medium.com/@nyomanpradipta120/sql-injection-union-attack-9c10de1a5635)

### Error Based injection

Error-Based injections are exploited through triggering errors in the database when invalid inputs are passed to it. The error messages can be used to return the full query results, or gain information on how to restructure the query for further exploitation.

## Tools

* Burp Suite
* SQL Map
* [SQL Map + Burp: Exploiting SQL Injection](https://www.youtube.com/watch?v=kuSS7Rd_e54)
* [Blind SQLi attack, manually with Burp and Automatically with SQL Map](https://www.youtube.com/watch?v=TjRK3aVEC60)

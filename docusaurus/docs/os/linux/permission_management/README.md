# Permission management

## Read, write, and execute

Permissions are assigned to _users_ and _groups_. Each user can be a member of different groups, and membership in these groupes gives the user specific, additional permissions.

Each file and directory belongs to a specific user and a specific group. The permissions are also defined for the _respective owners_.

Therefore, the permissions can be set for the `owner`, `group`, and `users`.

The whe whole permission system on Linux systems is based on the octal number system, and basically, there are __three different types__ of permissions a file or directory can be assigned:

- `r`: Read.
- `w`: Write.
- `x`: Execute.

```console
$ ls -l /etc/passwd

- rwx rw- r--   1 root root 1641 May  4 23:42 /etc/passwd
- --- --- ---   |  |    |    |   |__________|
|  |   |   |    |  |    |    |        |_ Date
|  |   |   |    |  |    |    |__________ File Size
|  |   |   |    |  |    |_______________ Group
|  |   |   |    |  |____________________ User
|  |   |   |    |_______________________ Number of hard links
|  |   |   |_ Permission of others (read)
|  |   |_____ Permissions of the group (read, write)
|  |_________ Permissions of the owner (read, write, execute)
|____________ File type (- = File, d = Directory, l = Link, ... )
```

To execute files within a directory, a user needs `execute` permissions on the corresponding file. To modify the contents of a directory (create, delete, or rename files and subdirectories), the user needs `write` permissions on the directory.

:::note
When a user wants to access the contents of a directory, they must first traverse the directory, which means navigating to that directory, requiring the user to have `execute` permissions on the directory. `execute` permissions only allow to traverse and access the content but not to execute or modify any files or contents within the directory.
:::

## Octal value assignment

Permissions are based on the octal number system and can be used to identify a set of permissions.

```text
Binary Notation:                4 2 1  |  4 2 1  |  4 2 1
----------------------------------------------------------
Binary Representation:          1 1 1  |  1 0 1  |  1 0 0
----------------------------------------------------------
Octal Value:                      7    |    5    |    4
----------------------------------------------------------
Permission Representation:      r w x  |  r - x  |  r - -
```

## Change permissions

Use the `chmod` command to change permissions and permission group references (`u` owner, `g` group, `o` others, `a` all users) and either a `+` or `-` to add/remove the designated permissions.

For example, apply `read` permissions for all users:

```console
chmod a+r <file/dir>
```

You can also use the octal value assignment:

```console
chmod 754 <file/dir>
```

## Change owner

Use the `chown` command to change ownership:

```console
chown <user>:<group> <file/directory>
```

## SUID & SGID

Besides assigning direct user and group permissions, you can also configure special permissions for files by setting the `Set User ID` (`SUID`) and `Set Group ID` (`SGID`) bits. The letter `s` is used instead of an `x`. Thus, when executing such a program, the SUID/SGID of the file owner is used.

They allow users to run programs with the rights of another user. Administrators often use this to give their users speciail rights for certain applications or files.

:::warning
Not being familiar with the applications but still assigning the SUID/SGID bits can lead to a high-security risk. For example, if the administrator sets the SUID bit to `journalctl`, any user with access to this application [could execute a shell](https://gtfobins.github.io/gtfobins/journalctl/) as `root`.
:::

## Sticky bit

Sticky bits are a type of file permission in Linux that can be set on directories. It provides an extra layer of security when controlling the deletion and renaming of files.

It's represented by the letter `t` in the execute permission of the directory's permission. If the sticky bit is capitalized `T`, it means that all other users do not have `execute` (`x`) permissions and, therefore, cannot see the contents of the folder nor run any programs from it.

Setting a sticky bit on a directory ensures that __only the owner__ of the file, the directory, or the root user can delete or rename files within the directory.

:::tip
You can use sticky bits on directories that are shared by multiple users to prevent one user from accidentally deleting or renaming files that are important to others.
:::

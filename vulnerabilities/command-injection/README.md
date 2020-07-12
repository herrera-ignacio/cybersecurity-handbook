# Command Injection

Attack in which the goal is __execution of arbitrary commands on the host operating system via a vulnerable application__.

Command Injection attacks are possible when an application passes unsafe user supplied data (forms, cookies, HTTP headers, etc) to a system shell.

Attacker-supplied operating system commands are usualy executed with the privilege of the vulnerable application.

[OWASP: Command Injection](https://owasp.org/www-community/attacks/Command_Injection)

#### Not Code Injection

This attack differs from _Code Injection_, in that code injection allows the attacker to add his own code that is then executed by the application. 

## Example

### Example 1

The following code prints the content of a file to standard output:

```c
#include <stdio.h>
#include <unistd.h>

int main(int argc, char **argv) {
 char cat[] = "cat ";
 char *command;
 size_t commandLength;

 commandLength = strlen(cat) + strlen(argv[1]) + 1;
 command = (char *) malloc(commandLength);
 strncpy(command, cat, commandLength);
 strncat(command, argv[1], (commandLength - strlen(cat)) );

 system(command);
 return (0);
}
```

Used normally...

```
$ ./catWrapper Story.txt
When last we left our heroes...
```

However if we add a semicolon and another command, the command is executed:

```
$ ./catWrapper "Story.txt; ls"
When last we left our heroes...
Story.txt               doubFree.c              nullpointer.c
unstosig.c              www*                    a.out*
format.c                strlen.c                useFree*
catWrapper*             misnull.c               strlength.c             useFree.c
commandinjection.c      nodefault.c             trunc.c                 writeWhatWhere.c
```

### Example 2

The following code uses the environment variable $APPHOME to execute an initialization script in that directory.

```
       ...
       char* home=getenv("APPHOME");
       char* cmd=(char*)malloc(strlen(home)+strlen(INITCMD));
       if (cmd) {
               strcpy(cmd,home);
               strcat(cmd,INITCMD);
               execl(cmd, NULL);
       }
       ...
```

An attacker can modify the environment variable $APPHOME to specify a different path containing a malicious version of INITCMD.


### Example 3

The following allows users to change their passwords. The password update process under NIS includes running `make` in the /var/yp directory. Note that since the program updates password records, it has been installed setuid root.

```
system("cd /var/yp && make &> /dev/null");
```

Even though this example is hardcoded and an attacker cannot control the argment passed to `system()`, since the program does not specify an absolute path for make, and does not scrub any environment variable prior to invoking the command, the attacker can modify their `$PATH` variable to point to a malicious binary named `make` and execute the CGI script from a shell propt. And since the proram has been installe setuid root, the attacker's version of make now runs with root privileges.
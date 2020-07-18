# Binwalk

Tool for malware analysis.

```
binwalk -B maliciousfile.exe
binwalk -3 maliciousfile.exe
```

## Find opcodes

Searching for commonly used opcodes can give us some information about what the malware may be trying to do.

```
binwalk -A maliciousfile.exe
```

For example, several _No Operation (NOP) codes are frequently used in exploits to land shellcode into the stack.

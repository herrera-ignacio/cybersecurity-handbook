# System management

- [System management](#system-management)
  - [User management](#user-management)
  - [Package management](#package-management)
    - [Advanced Package Manager (`apt`)](#advanced-package-manager-apt)
  - [Service and process management](#service-and-process-management)
    - [Kill a process](#kill-a-process)
    - [Background a process](#background-a-process)
    - [Foreground a process](#foreground-a-process)
  - [Task scheduling](#task-scheduling)
    - [Systemd](#systemd)
      - [1. Create a timer](#1-create-a-timer)
      - [2. Create a service](#2-create-a-service)
      - [3. Activate the timer](#3-activate-the-timer)
    - [Cron](#cron)
  - [Network services](#network-services)
    - [Secure Shell (SSH)](#secure-shell-ssh)
    - [NFS](#nfs)
    - [Web Server](#web-server)
    - [Virtual Private Network (VPN)](#virtual-private-network-vpn)
  - [Backup and restore](#backup-and-restore)
  - [File system management](#file-system-management)
    - [Disk \& drivers](#disk--drivers)
    - [Mounting](#mounting)
    - [SWAP](#swap)

## User management

Here's a list of common commands to deal with user management:

| Command | Description |
|---|---|
| `sudo` | Execute command as a different user. |
| `su` | The su utility requests appropriate user credentials via PAM and switches to that user ID (the default user is the superuser). A shell is then executed. |
| `useradd` | Creates a new user or update default new user information. |
| `userdel` | Deletes a user account and related files. |
| `usermod` | Modifies a user account. |
| `addgroup` | Adds a group to the system. |
| `delgroup` | Removes a group from the system. |
| `passwd` | Changes user password. |

## Package management

There are different package management system that cover different types of files like `.deb`, `.rpm` and others.

Here'sa list of examples of such programs:

| Command | Description |
|---|---|
| `dpkg` | The dpkg is a tool to install, build, remove, and manage Debian packages. The primary and more user-friendly front-end for dpkg is aptitude. |
| `apt` | Apt provides a high-level command-line interface for the package management system. |
| `aptitude` | Aptitude is an alternative to apt and is a high-level interface to the package manager. |
| `snap` | Install, configure, refresh, and remove snap packages. Snaps enable the secure distribution of the latest apps and utilities for the cloud, servers, desktops, and the internet of things. |
| `gem` | Gem is the front-end to RubyGems, the standard package manager for Ruby. |
| `pip` | Pip is a Python package installer recommended for installing Python packages that are not available in the Debian archive. It can work with version control repositories (currently only Git, Mercurial, and Bazaar repositories), logs output extensively, and prevents partial installs by downloading all requirements before starting installation. |
| `git` | Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals. |

### Advanced Package Manager (`apt`)

Debian-based distributions us the `apt` package manager. A package is an archive file containing multiple `.deb` files. `apt` makes updating and installing programs easier because many programs have dependencies, and it packages together all of the dependencies needed to install a program.

Each Linux distribution uses software repositories that can be labeled as stable, testing or unstable. This can be checked by viewing the contents of `/etc/apt/sources.list`.

## Service and process management

Some services run in the background without any user interaction. These are also called _daemons_ and are identified by the letter `d` at the end of the program name, for example, `sshd` or `systemd`.

`systemd` is an `Init process` started first and thus has the process ID (PID) 1. This daemon monitors and takes care of the orderly starting and stopping of other services. All processes have an assigned PID that can be viewed under `/proc/`.

Besides `systemctl` we can also uso `update-rc.d` to manage SysV init script links.

### Kill a process

A process can be in the following states:

- Running.
- Waiting (waiting for an event or system resource).
- Stopped.
- Zombie (stopped but still has an entry in the process table).

Process can be controlled using `kill`, `pkill`, `pgrep`, and `killall`. To interact with a process, we must send a signal to it.

You can view all signals with `kill -l`. Here are the common signals:

| Signal | Description |
|---|---|
| 1 | SIGHUP - This is sent to a process when the terminal that controls it is closed. |
| 2 | SIGINT - Sent when a user presses [Ctrl] + C in the controlling terminal to interrupt a process. |
| 3 | SIGQUIT - Sent when a user presses [Ctrl] + D to quit. |
| 9 | SIGKILL - Immediately kill a process with no clean-up operations. |
| 15 | SIGTERM - Program termination. |
| 19 | SIGSTOP - Stop the program. It cannot be handled anymore. |
| 20 | SIGTSTP - Sent when a user presses [Ctrl] + Z to request for a service to suspend. The user can handle it afterward |

### Background a process

Sometimes, you might want to put a process you just started in the background to continue using the current session to interact with the system or start other processes. You can do that with `CTRL+Z` which sends the `SIGTSP` (`20`) signal to the kernel, which suspends the process. Another option is to automatically set the proces with an AND sign (`&`) at the end of the command.

```console
ping -c 10 www.hackthebox.eu &
```

### Foreground a process

We can use the `jobs` command to list all background processes. Then, use the `fg <ID>` command to get the background process.

## Task scheduling

You can run tasks at a specific time or within specific frequencies without having to start them manually. In addition, alerts can be set up to display when certain events occur orr to contact administrators or users.

### Systemd

Systemd enables you to set up processes/scripts to run at a specific time or time interval and can also specify events and triggers that will trigger a specific task.

1. Create a timer.
2. Create a service.
3. Activate the timer.

#### 1. Create a timer

```console
sudo mkdir /etc/systemd/system/mytimer.timer.d
sudo vim /etc/systemd/system/mytimer.timer
```

Here's the file content:

```txt
[Unit]
Description=My Timer

[Timer]
OnBootSec=3min
OnUnitActiveSec=1hour

[Install]
WantedBy=timers.target
```

#### 2. Create a service

```console
sudo vim /etc/systemd/system/mytimer.service
```

Here we set a description and specify the full path to the script we want to run:

```txt
[Unit]
Description=My Service

[Service]
ExecStart=/full/path/to/my/script.sh

[Install]
WantedBy=multi-user.target
```

#### 3. Activate the timer

We have to let `systemd` read the folders again to include the changes:

```console
sudo systemctl daemon-reload
```

Then, we can use `systemctl` to `start` the service manually and `enable` the autostart:

```console
sudo systemctl start mytimer.service
sudo systemctl enable mytimer.service
```

### Cron

Cron is another tool to schedule and automate processes but the set up is a little different than `systemd`.

We need to store the tasks in a file called `crontab` and then tell the daemon when to run the tasks.

## Network services

### Secure Shell (SSH)

The most commonly used SSH server is the OpenSSH server (free and open-source). Administrators use it to securely manage remote systems by establishing an encrypted connection to a remote host.

### NFS

_Network File System_ (`NFS`) is a network protocol that allows us to store and manage files on remote systems as if they were stored on the local system.

There are several NFS servers, including NFS-UTILS (Ubuntu), NFS-Ganesha (Solaris), and OpenNFS (Redhat Linux).

### Web Server

Apache web server has a variety of features that allow us to host a secure and efficient web application. Moreover, we can also configure logging to get information about the traffic on our server. We can change which directories can be accesed and what actions can be perfomed on those directories.

```console
sudo apt install apache2 -y
```

### Virtual Private Network (VPN)

VPN is a technology that allows us to connect securely to another network as if we were directly in it. This is done by creating an encrypted tunnel connection between the client and the server, which means that all data transmitted over this connection is encrypted.

Some of the most popular VPN servers for Linux are OpenVPN, L2TP/IPsec, PPTP, SSTP, and SoftEther.

```console
sudo apt install openvpn -y
sudo openvpn --config internal.ovpn
```

## Backup and restore

There are many tools like:

- Rsync.
- Duplicity.
- Deja Dup.

Rsync supports auto-synchronization using `rsync`, you can use a combination of `cron` and `rsync` to automate it.

## File system management

Linux supports a wide range of file systems, including ext2, ext3, ext5, XFS, Btrfs, NTFS, and more.

### Disk & drivers

Disk management involves managing physical storage devices, including removable storage devices. The main tool on Linux is the `fdisk`, which allows us to create, delete, and manage partitions on a drive. It can also display information about the partition tabler.

Each partition can be formatted with a specific file system, and can be mounted as a separate file system. The most common partitioning tools are `fdisk`, `gpart`, and `GParted`.

```console
$ sudo fdisk -l

Disk /dev/vda: 160 GiB, 171798691840 bytes, 335544320 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x5223435f

Device     Boot     Start       End   Sectors  Size Id Type
/dev/vda1  *         2048 158974027 158971980 75.8G 83 Linux
/dev/vda2       158974028 167766794   8792767  4.2G 82 Linux swap / Solaris

Disk /dev/vdb: 452 KiB, 462848 bytes, 904 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### Mounting

Each logical partition or drive needs to be assigned to a specific directory on Linux. Mounting involves attaching a drive to a specific directory, making it accessible to the file system hierarchy. The `mount` tool is used for this, and the `/etc/fstab` file is used to define the default file systems that are booted at boot time.

For example, mount and unmount a usb drive:

```console
sudo mount /dev/sdb1 /mnt/usb
cd /mnt/usb && ls -l
sudo umount /mnt/usb
```

### SWAP

When the system runs out of physical memory, the kernel transfers inactive pages of memory to the swap space, freeing up physical memory for use by active processes. This process is known as _swapping_.

Swap space can be created either during the installation of the OS or at any time afterward using the `mkswap` (to set up a Linux swap area on a device or in a file) and `swapon` commands (used to activate a swap area).

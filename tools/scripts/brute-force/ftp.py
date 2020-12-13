import ftplib

def brute(ip, user, password):
    ftp = ftplib.FTP(ip)

def main():
    ip = 'localhost'
    f = open('users_password.txt', 'r')
    users = f.read().split('\n')
    pwds = users.copy()
    f.close()

    for user in users:
        for pwd in pwds:
            brute(ip, user, pwd)

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        exit()
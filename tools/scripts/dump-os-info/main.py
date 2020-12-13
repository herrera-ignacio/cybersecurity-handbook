import subprocess

# MAC: system_profiler -detailLevel full
# Windows: systeminfo

with open('test.txt', 'w+') as f:
    print('Hello, not doing anything suspicious :)')
    pipe = subprocess.check_call(['system_profiler','-detailLevel','mini','-timeout','0'],
        stdout=f,
        stderr=subprocess.STDOUT)

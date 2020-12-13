import ipinfo

ip_address = ''

handler = ipinfo.getHandler()
details = handler.getDetails(ip_address)
data_dict = details.all

for key in data_dict:
    print(f'{key}: {data_dict[key]}')

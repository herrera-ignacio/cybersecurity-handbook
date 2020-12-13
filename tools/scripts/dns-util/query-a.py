import dns.resolver

def main():
    try:
        res = dns.resolver.query("google.com", "A")
        for record in res:
            print(record)
    except Exception as e:
        print("Failed to perform DNS query")
        print(e)
    

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        exit()
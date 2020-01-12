#Fibbonacci Sequnecer

fibonacci_cache = {}

def fibonacci(n):
    if type(n) != int:
        raise TypeError("n must be an intiger, please try again.")
    if n < 1:
        raise ValueError("n must be a positive number, please try again.")
    if n in fibonacci_cache:
        return fibonacci_cache[n]

    if n == 1:
        value = 1
    elif n == 2:
        value = 1
    elif n > 2:
        value = fibonacci(n -1) + fibonacci(n-2)
    
    fibonacci_cache[n] = value
    return value

for n in range(1, 101):
    print(n, ":", fibonacci(n))        

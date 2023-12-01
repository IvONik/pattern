
def pearson_correlation(x, y):
    
    if len(x) != len(y):       
        return False

    n = len(x)

    mean_x = sum(x) / len(x)
    mean_y = sum(y) / len(y)

    cov = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(n)) / n
    std_x = (sum((x[i] - mean_x) ** 2 for i in range(n)) / n) ** 0.5
    std_y = (sum((y[i] - mean_y) ** 2 for i in range(n)) / n) ** 0.5

    correlation = cov / (std_x * std_y)

    return correlation


x_values = [1, 2, 3, 4]
y_values = [2, 3, 5, 4, 6]

result = pearson_correlation(x_values, y_values)
print(result)

def main():
    while True:
        lower_bound = input("Enter the lower bound or type 'q' to exit: ")
        if lower_bound.lower() == 'q':
            break

        upper_bound = input("Enter the upper bound or type 'q' to exit: ")
        if upper_bound.lower() == 'q':
            break

        try:
            lower_bound = float(lower_bound)
            upper_bound = float(upper_bound)
        except ValueError:
            print("Invalid input. Please enter numerical values.")
            continue

        mean, std_dev = calculate_mean_std_dev(lower_bound, upper_bound)

        print(f"Mean: {mean:.2f}, Standard Deviation: {std_dev:.2f}\n")

def calculate_mean_std_dev(lower_bound, upper_bound):
    range_ = upper_bound - lower_bound
    std_dev = range_ / 4
    mean = lower_bound + 2 * std_dev
    return mean, std_dev

if __name__ == "__main__":
    main()

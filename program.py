def x1(t_list, t_name, t_due):
    t = {'n': t_name, 'd': t_due, 'c': False}
    t_list.append(t)

def x2(t_list, t_name):
    return [t for t in t_list if t['n'] != t_name]

def x3(t_list):
    print("All Tasks:")
    for t in t_list:
        print(f"Task: {t['n']}, Due: {t['d']}, Completed: {t['c']}")

def x4(t_list, t_name):
    try:
        t_index = next(i for i, t in enumerate(t_list) if t['n'] == t_name)
        t_list[t_index]['c'] = True
    except StopIteration:
        print("Task not found.")

t_list = []

x1(t_list, "Fix bug in code", "2024-02-21")
x1(t_list, "Update documentation", "2024-02-22")
x3(t_list)
x4(t_list, "Fix bug in code")
t_list = x2(t_list, "Update documentation")  
x3(t_list)

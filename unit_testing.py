from unit_testing_sample_code import (
    string_capitalizer,
    capitalize_list,
    integer_manipulator,
    manipulate_list,
)

def assert_equal(test_name, expected, actual):
    if expected == actual:
        print(f"{test_name} passed! `{expected}` matches `{actual}`.")
    else:
        print(f"{test_name} failed. Expected: `{expected}`. Got: `{actual}`.")

def test_string(test_name, string, test):
    assert_equal(test_name, string, test)

def run_list_test(test_name, test_list, expected_list):
    for i in range(len(test_list)):
        assert_equal(f"Part {i} in {test_name}", expected_list[i], test_list[i])

def test_strlist(test_name, expected_list, test_list):
    print("Test", test_name, ":")
    run_list_test(test_name, test_list, expected_list)

def test_int(test_name, expected_num, test):
    assert_equal(test_name, expected_num, test)

def test_intlist(test_name, expected_list, test):
    print("Test", test_name, ":")
    run_list_test(test_name, test, expected_list)


print("\nString Capitalizer Tests:")
# test_string is the function for testing the string capitalizer and takes 
# three arguments: test number (“0”), expected output value (“TwO”), and
# the call to the string_capitalizer function with the argument “two”.
test_string("0", "TwO", string_capitalizer("two"))
test_string("1", "C", string_capitalizer("c"))
test_string("2", "FouR", string_capitalizer(4))
test_string("3", "", string_capitalizer(""))
print("\nList Capitalizer Tests:")
test_strlist("0", ["TwO","C","FouR",""], capitalize_list(["two","c",4,""]))
print("\nInteger Manipulator Tests:")
test_int("0", 66, integer_manipulator(10))
test_int("1", 2, integer_manipulator(2))
test_int("2", 6, integer_manipulator(3))
test_int("3", 0, integer_manipulator(0))
test_int("4", 1, integer_manipulator("three"))
print("\nManipulate List Tests:")
test_intlist("0", [66,2,6,0,1], manipulate_list([10,2,3,0,"three"]))
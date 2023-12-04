
from unit_testing_sample_code import string_capitalizer, capitalize_list, integer_manipulator, manipulate_list

def test_string_capitalizer():
    # Test if 'string_capitalizer' correctly capitalizes 'two' as 'TwO'
    assert string_capitalizer("two") == "TwO"
    # Test if 'string_capitalizer' correctly capitalizes 'c' as 'C'
    assert string_capitalizer("c") == "C"
    # Test if 'string_capitalizer' handles non-string input (4) incorrectly; this is expected to fail.
    assert string_capitalizer(4) != "FouR"  # This test is expected to fail
    # Test if 'string_capitalizer' returns an empty string when given an empty string.
    assert string_capitalizer("") == ""

def test_capitalize_list():
    # Test if 'capitalize_list' correctly capitalizes each element in the list.
    assert capitalize_list(["two", "c", 4, ""]) == ["TwO", "C", "FouR", ""]

def test_integer_manipulator():
    # Test various cases for 'integer_manipulator' function with different inputs.
    assert integer_manipulator(10) == 66
    assert integer_manipulator(2) == 2
    assert integer_manipulator(3) == 6
    assert integer_manipulator(0) == 0
    # Test if 'integer_manipulator' handles non-integer input ('three') incorrectly; expected to fail.
    assert integer_manipulator("three") != 1  # This test is expected to fail

def test_manipulate_list():
    # Test if 'manipulate_list' correctly manipulates a list of mixed data types.
    assert manipulate_list([10, 2, 3, 0, "three"]) == [66, 2, 6, 0, 1]

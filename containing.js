var SomeAPI = {
  threshold: 13,
  is_below_tres(x) {
    return x <= SomeAPI.threshold;
  }
};
var numbers = [];

function insert_sort_desc(v) {
  SomeAPI.threshold = v;
  var idx = numbers.findIndex(SomeAPI.is_below_tres);
  if (idx == -1) {
    idx = numbers.length;
  }
  numbers.splice(idx,0,v);
}

function get_sorted_nums(nums, v) {
  var [origin_numbers, origin_treshold] = [numbers, SomeAPI.threshold];
  numbers = nums.slice();
  insert_sort_desc(v);
  nums = numbers;
  [numbers, SomeAPI.threshold] = [origin_numbers, origin_treshold];
  return nums;
}

numbers = get_sorted_nums(numbers, 32);
numbers = get_sorted_nums(numbers, 456);
numbers = get_sorted_nums(numbers, 28);
numbers = get_sorted_nums(numbers, 777);
numbers = get_sorted_nums(numbers, 16);
numbers = get_sorted_nums(numbers, 1);
numbers = get_sorted_nums(numbers, 20);
numbers = get_sorted_nums(numbers, 9);
numbers = get_sorted_nums(numbers, 19);
numbers = get_sorted_nums(numbers, 4);
numbers;

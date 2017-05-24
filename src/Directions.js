/**
 * @right
 * Moves snake to the right direction
 * and makes snake appear at the left end
 * when snakes gets to the right edge
 * @param {number} position
 * @return {number} position
 */
export const right = (position) => {
  const num = position.toString();
  if(num.endsWith(9)) {
    const nums = num.split('');
    return parseInt(nums.length > 1 ? nums[0] + '0' : 0, 10);
  }
  return position + 1;
}

export const left = (position) => {
  const num = position.toString();
  if(num.endsWith(0)) {
    const nums = num.split('');
    return parseInt(nums.length > 1 ? nums[0] + '9' : 9, 10);
  }
  return position - 1;
}

export const up = (position) => {
  const nums = position.toString().split('');
  if(nums.length > 1) {
    return parseInt(position - 10, 10);
  }
  return parseInt('9' + position, 10);
}

export const down = (position) => {
  const nums = position.toString();
  if(nums.startsWith(9)) {
    return parseInt(position - 90, 10);
  }
  return parseInt(position + 10, 10);
}

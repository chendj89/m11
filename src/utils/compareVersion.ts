/**
 * 比较两个版本号的大小
 * @param v1 版本号1
 * @param v2 版本号2
 * @returns 如果版本号1大于版本号2，返回1；如果版本号1小于版本号2，返回-1；如果版本号1等于版本号2，返回0
 */
function compareVersion(v1: string, v2: string): number {
  // 将版本号字符串按照 . 分割成数字数组
  const v1Arr = v1.split('.').map(Number)
  const v2Arr = v2.split('.').map(Number)
  // 循环比较每个数字
  for (let i = 0; i < Math.max(v1Arr.length, v2Arr.length); i++) {
    // 如果当前位置的数字不存在，默认为0
    const v1Num = v1Arr[i] || 0
    const v2Num = v2Arr[i] || 0
    // 如果当前位置的数字相等，则继续比较下一个数字
    if (v1Num === v2Num) {
      continue
    }
    // 如果当前位置的数字不相等，则直接返回它们的大小关系
    if (v1Num > v2Num) {
      return 1
    } else {
      return -1
    }
  }
  // 如果所有的数字都相等，则说明两个版本号相等
  return 0
}

/**
 * 以下是几个测试案例：
console.log(compareVersion('1.0.0', '1.0.1')); // -1
console.log(compareVersion('1.0.1', '1.0.0')); // 1
console.log(compareVersion('1.0.0', '1.0.0')); // 0
console.log(compareVersion('1.0.0', '1.0')); // 0
console.log(compareVersion('1.0.0.1', '1.0')); // 1
console.log(compareVersion('1.0.0', '1.0.0.1')); // -1
 */

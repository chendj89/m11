/**
 * 加密函数
 * @param message 要加密的消息，可以是字符串、数组或对象
 * @param key 密钥
 * @returns 加密后的消息
 */
export function encrypt(message: string | any[], key: string): string | any[] {
  // 如果消息是字符串，则按照之前的方式加密
  if (typeof message === 'string') {
    let encrypted = ''
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      encrypted += String.fromCharCode(charCode)
    }
    return encrypted
  }
  // 如果消息是数组，则对数组中的每个元素进行递归加密
  if (Array.isArray(message)) {
    return message.map((item) => encrypt(item, key))
  }
  // 如果消息是对象，则对对象中的每个属性进行递归加密
  if (typeof message === 'object') {
    const encryptedObj: any = {}
    for (const prop in message as any) {
      encryptedObj[prop] = encrypt(message[prop], key)
    }
    return encryptedObj
  }
  // 如果消息是其他类型，则直接返回原始值
  return message
}

/**
 * 解密函数
 * @param encryptedMessage 加密后的消息，可以是字符串、数组或对象
 * @param key 密钥
 * @returns 解密后的消息
 */
export function decrypt(
  encryptedMessage: string | any[],
  key: string
): string | any[] {
  // 如果消息是字符串，则按照之前的方式解密
  if (typeof encryptedMessage === 'string') {
    let decrypted = ''
    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCode =
        encryptedMessage.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      decrypted += String.fromCharCode(charCode)
    }
    return decrypted
  }
  // 如果消息是数组，则对数组中的每个元素进行递归解密
  if (Array.isArray(encryptedMessage)) {
    return encryptedMessage.map((item) => decrypt(item, key))
  }
  // 如果消息是对象，则对对象中的每个属性进行递归解密
  if (typeof encryptedMessage === 'object') {
    const decryptedObj: any = {}
    for (const prop in encryptedMessage as any) {
      decryptedObj[prop] = decrypt(encryptedMessage[prop], key)
    }
    return decryptedObj
  }
  // 如果消息是其他类型，则直接返回原始值
  return encryptedMessage
}

/**
    // 示例用法：
    const key = 'mySecretKey'
    const message:any = {
    name: '张三',
    age: 18,
    hobbies: ['篮球', '游泳', '旅游']
    }
    const encryptedMessage = encrypt(message, key)
    console.log(`加密后的消息：${JSON.stringify(encryptedMessage)}`)
    const decryptedMessage = decrypt(encryptedMessage, key)
    console.log(`解密后的消息：${JSON.stringify(decryptedMessage)}`)
*/

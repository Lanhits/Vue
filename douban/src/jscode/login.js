import req from '@/utl/axios'

export default function login (userName, passWord) {
  const data = {
    userName,
    passWord
  }
  return req({
    url: `https://easy-mock.com/mock/5af0120bd8d4640409410240/example/loginInfo`,
    method: 'post',
    data
  })
}

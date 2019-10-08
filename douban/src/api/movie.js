import req from '@/utl/axios'

function reqmovies (json) {
  return req({
    url: '/api' + json.url,
    method: 'get',
    params: json.data
  })
}

export {
  reqmovies
}

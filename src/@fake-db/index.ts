import './db'
import Router from 'next/router'
import mock from './mock'

mock.onAny().passThrough()

if (module?.hot?.status() === 'apply') {
  const { pathname } = Router
  Router.push('/loading').then(() => {
    Router.push({ pathname }).then(() => {
      console.info(`${pathname} loaded.`)
    })
  })
}

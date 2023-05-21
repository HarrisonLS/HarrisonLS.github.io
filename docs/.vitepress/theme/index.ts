import { h, App } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// import Visitor from './components/Visitor.vue'
// import Copyright from './components/Copyright.vue'
// import AsideSponsors from './components/AsideSponsors.vue'
import NavLinks from './components/NavLink'

import './styles/index.scss'

// 注销 PWA 服务和删除浏览器中的缓存
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister()
        })
      })
    }

    if ('caches' in window) {
      caches.keys().then(keyList => {
        Promise.all(keyList.map(key => caches.delete(key)))
      })
    }
  })
}

const Layout = () => {
  const { frontmatter } = useData()
  const layoutProps = frontmatter.value?.layoutClass ? { class: frontmatter.value.layoutClass } : {}

  return h(DefaultTheme.Layout, layoutProps, {
    // 'nav-bar-title-after': () => h(Visitor),
    // 'doc-after': () => h(Copyright),
    // 'aside-bottom': () => h(AsideSponsors)
  })
}

const enhanceApp = ({ app }: { app: App }) => {
  app.component('MNavLinks', NavLinks)
  app.provide('DEV', process.env.NODE_ENV === 'development')
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp
}
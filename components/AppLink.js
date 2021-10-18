export default {
    name: 'AppLink',
    functional: true,
    props: {
      to: {
        type: [String, Object],
        required: true
      }
    },
    render(h, { props, data, children, parent }) {
      function make() {
        if (typeof props.to === 'object' && (props.to.path || props.to.name)) {
          return [
            'nuxt-link',
            {
              ...data,
              props
            }
          ]
        }
  
        if (props.to.match(/^(http(s)?|ftp):\/\//)) {
          return [
            'a',
            {
              ...data,
              attrs: {
                href: props.to,
                target: '_blank',
                rel: 'noopener'
              }
            }
          ]
        }
  
        const locale = parent.$nuxt.$i18n.locale
        const linkProps = { ...props }
        if (locale !== parent.$nuxt.$i18n.defaultLocale) {
          linkProps.to = `/${locale}${props.to}`
        }
  
        return [
          'nuxt-link',
          {
            ...data,
            props: linkProps
          }
        ]
      }
  
      return h(...make(), children)
    }
  }
  
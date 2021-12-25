import React, { AriaAttributes, DOMAttributes } from 'react'

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean
    global?: boolean
  }

  type LoadingAttributeType = 'auto' | 'lazy' | 'eager'

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    loading?: LoadingAttributeType
  }
}

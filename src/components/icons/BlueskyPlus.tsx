import Svg, {Path} from 'react-native-svg'
import {msg} from '@lingui/macro'
import {useLingui} from '@lingui/react'

import {Props, useCommonSVGProps} from '#/components/icons/common'

/**
 * Full Bluesky+ logo with butterfly
 */
export function Full(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {fill, size: _size, style, gradient, ...rest} = useCommonSVGProps(props)
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 100)
  const ratio = 90 / 448
  const {_} = useLingui()

  return (
    <Svg
      fill="none"
      viewBox="0 0 448 90"
      accessibilityLabel={_(msg`Bluesky Plus`)}
      accessibilityHint=""
      {...rest}
      style={[style, {width: size, height: size * ratio}]}>
      {gradient}
      <Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.5 40.389c-4.483-9.147-16.69-26.193-28.04-34.6C13.27-.277 0-4.971 0 9.964c0 2.983 1.733 25.057 2.75 28.641 3.534 12.46 16.41 15.637 27.866 13.714C10.593 55.68 5.5 66.817 16.5 77.953c20.891 21.15 30.026-5.307 32.367-12.086.43-1.242.63-1.824.633-1.33.003-.494.204.088.633 1.33 2.34 6.78 11.476 33.235 32.367 12.086 11-11.136 5.907-22.273-14.116-25.635 11.455 1.924 24.332-1.254 27.866-13.713C97.267 35.021 99 12.947 99 9.965 99-4.972 85.73-.278 77.54 5.788c-11.35 8.407-23.557 25.453-28.04 34.6Zm107.33.725c6.787 2.477 10.39 8.198 10.39 14.602 0 10.844-7.122 17.418-20.78 17.418h-27.901V12.34h26.98c12.987 0 19.271 6.746 19.271 15.711 0 5.977-2.681 10.332-7.96 13.064Zm-12.149-19.297H129.85V37.7h14.831c5.781 0 8.881-3.074 8.881-8.197 0-4.696-3.184-7.685-8.881-7.685ZM129.85 63.571h16.004c6.368 0 9.803-2.988 9.803-8.368q0-8.453-9.803-8.453H129.85v16.821Zm53.053 9.563h-10.557V12.34h10.557v60.795Zm35.005-44.059v24.677c0 7.258-4.525 11.1-9.636 11.1-5.446 0-8.127-2.818-8.127-8.368V29.075h-10.558v29.202c0 10.246 5.949 15.882 15.082 15.882q8.673 0 13.574-7.428v6.403h10.222V29.075h-10.557Zm58.611 22.798v2.562h-32.342c.754 7.6 4.86 11.356 11.228 11.356 4.859 0 8.127-2.134 9.887-6.318h10.138c-2.262 8.965-9.803 14.686-20.109 14.686-6.452 0-11.646-2.135-15.585-6.319s-5.948-9.734-5.948-16.735c0-6.917 1.927-12.467 5.865-16.736 3.938-4.184 9.049-6.319 15.5-6.319 6.536 0 11.731 2.22 15.585 6.575s5.781 10.161 5.781 17.248ZM255.07 36.418c-5.782 0-9.804 3.416-10.809 10.503h21.701c-.922-6.404-4.776-10.503-10.892-10.503Zm25.075 22.713c.586 10.161 7.205 15.199 19.773 15.199 12.15 0 19.188-4.953 19.188-13.833 0-7.514-4.525-11.442-14.998-13.405l-5.446-.854c-5.028-.94-7.206-2.306-7.206-5.38q0-5.123 7.541-5.123c5.781 0 8.881 1.879 9.133 7.258h9.97c-.419-9.99-6.787-14.943-19.103-14.943-11.479 0-17.931 5.038-17.931 13.32 0 7.259 4.692 11.699 14.16 13.321l4.944.854c6.451 1.11 8.462 2.647 8.462 5.806 0 3.5-2.849 5.294-8.546 5.294-6.368 0-9.049-2.05-9.636-7.514h-10.305Zm85.298 14.003h-12.066l-12.568-20.492-6.536 6.66v13.832h-10.389V12.34h10.389v35.009l17.596-18.273h23.801l3.519 11.015a419 419 0 0 1 6.871 24.591c1.843-7.002 4.189-15.199 6.954-24.506l3.519-11.1h11.06l-16.674 47.646c-1.759 4.867-3.938 8.367-6.703 10.331s-6.703 2.904-11.898 2.904c-1.759 0-3.267-.086-4.608-.257v-8.453h4.022c4.776 0 7.122-2.988 7.122-7.087 0-2.05-.67-5.038-2.011-8.88l-12.526-36.082-16.219 16.528 17.345 27.41ZM424.5 29h10v13.5H448v10h-13.5V66h-10V52.5H411v-10h13.5V29Z"
      />
    </Svg>
  )
}

/**
 * Bluesky+ logo without butterfly
 */
export function Logotype(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {fill, size: _size, style, gradient, ...rest} = useCommonSVGProps(props)
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 100)
  const ratio = 78 / 330
  const {_} = useLingui()

  return (
    <Svg
      fill="none"
      viewBox="0 0 330 78"
      accessibilityLabel={_(msg`Bluesky Plus`)}
      accessibilityHint=""
      {...rest}
      style={[style, {width: size, height: size * ratio}]}>
      {gradient}
      <Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.68 43.716c0-6.404-3.602-12.125-10.389-14.602 5.279-2.732 7.96-7.087 7.96-13.064C46.251 7.085 39.967.34 26.98.34H0v60.794h27.901c13.658 0 20.78-6.574 20.78-17.418ZM11.313 9.817h14.83c5.697 0 8.881 2.989 8.881 7.685 0 5.123-3.1 8.197-8.881 8.197h-14.83V9.817Zm16.003 41.754H11.312V34.75h16.003q9.803 0 9.803 8.453c0 5.38-3.435 8.368-9.803 8.368Zm26.492 9.564h10.557V.339H53.807v60.796ZM99.37 41.752V17.075h10.557v44.06H99.704V54.73q-4.901 7.428-13.574 7.428c-9.133 0-15.082-5.635-15.082-15.882V17.075h10.558v27.41c0 5.55 2.68 8.367 8.127 8.367 5.111 0 9.636-3.842 9.636-11.1Zm58.611.683v-2.562c0-7.087-1.927-12.893-5.781-17.248s-9.049-6.575-15.585-6.575c-6.451 0-11.562 2.135-15.5 6.319-3.938 4.27-5.865 9.82-5.865 16.736 0 7.001 2.01 12.552 5.948 16.736 3.938 4.183 9.133 6.318 15.585 6.318 10.306 0 17.847-5.72 20.109-14.686h-10.138c-1.76 4.184-5.027 6.318-9.887 6.318-6.368 0-10.474-3.757-11.228-11.356h32.342Zm-32.258-7.514c1.006-7.087 5.027-10.503 10.809-10.503 6.116 0 9.97 4.099 10.892 10.503h-21.701ZM181.38 62.33c-12.568 0-19.187-5.038-19.774-15.199h10.306c.587 5.465 3.268 7.514 9.636 7.514 5.698 0 8.546-1.793 8.546-5.294 0-3.16-2.01-4.696-8.462-5.806l-4.944-.854c-9.468-1.622-14.16-6.063-14.16-13.32 0-8.283 6.452-13.32 17.931-13.32 12.316 0 18.685 4.952 19.104 14.942h-9.972c-.251-5.38-3.351-7.258-9.132-7.258q-7.541 0-7.541 5.123c0 3.074 2.178 4.44 7.206 5.38l5.446.854c10.473 1.963 14.998 5.891 14.998 13.405 0 8.88-7.038 13.833-19.188 13.833Zm53.459-1.195h12.065l-17.343-27.41 16.218-16.528 12.526 36.082c1.341 3.842 2.011 6.83 2.011 8.88 0 4.099-2.346 7.087-7.122 7.087h-4.022V77.7c1.341.17 2.849.256 4.608.256 5.195 0 9.133-.94 11.898-2.904s4.944-5.464 6.703-10.331l16.674-47.646h-11.06l-3.519 11.1c-2.765 9.307-5.111 17.504-6.954 24.506a419 419 0 0 0-6.871-24.591l-3.519-11.015H233.33l-17.596 18.273V.339h-10.389v60.796h10.389V47.302l6.536-6.66 12.568 20.492ZM305.961 17h10v13.5h13.5v10h-13.5V54h-10V40.5h-13.5v-10h13.5V17Z"
      />
    </Svg>
  )
}

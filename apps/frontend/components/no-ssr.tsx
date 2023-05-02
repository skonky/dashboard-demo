import dynamic from "next/dynamic"

const NonSSRWrapper = ({ children }) => <>{children}</>

const NoSSR = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default NoSSR

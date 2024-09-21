import Image from "next/image"
const logo = () => {
  return (
    <div>
      <Image src="/images/logo.png" alt="logo" sizes="100" width={150} height={150} />
    </div>
  )
}
export default logo
import Image from "next/image"

const deliveryInfo = () => {
  return (
    <div className="flex items-center justify-end ml-auto border-b sm:border-none border-gray-500 pb-3 ">
        <Image src="/images/delivery-icon.png" alt="delivery" sizes="100" width={31} height={33} />
        <span className="ml-5 text-sm font-bold tracking-widest">Express Devlivery +1234 567 890</span>
    </div>
  )
}
export default deliveryInfo
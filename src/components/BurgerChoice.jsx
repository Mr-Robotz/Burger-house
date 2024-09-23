import Image from "next/image"
const BurgerChoice = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="mb-10">
          <h2 className="title">Choose $ Enjoy</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam molestias optio quo ab, assumenda eum dolorem eius blanditiis atque nisi perspiciatis aliquid libero ullam doloremque ad ut hic reprehenderit odit!</p>
        </div>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:flex-wrap items-center justify-between">
          <div>
            <div>
              <Image src="/images/card-img-1.png" width={450} height={320} sizes="100" alt="burger-image" className="w-80 mx-auto"/>
            </div>
            <div>
              <h3 className="sub-title">Lorem Ipsum Dolor</h3>
              <p className="text-sm w-80 text-gray-500 font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae!</p>
              <button className="red-button">Order Now</button>
            </div>
          </div>
          <div>
            <div>
              <Image src="/images/card-img-3.png" width={441} height={355} sizes="100" alt="burger-image" className="w-80 mx-auto"/>
            </div>
            <div>
              <h3 className="sub-title">Lorem Ipsum Dolor</h3>
              <p className="text-sm w-80 text-gray-500 font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae!</p>
              <button className="red-button">Order Now</button>
            </div>
          </div>
          <div>
            <div>
              <Image src="/images/card-img-1.png" width={450} height={320} sizes="100" alt="burger-image"className="w-80 mx-auto" />
            </div>
            <div>
              <h3 className="sub-title">Lorem Ipsum Dolor</h3>
              <p className="text-sm w-80 text-gray-500 font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae!</p>
              <button className="red-button">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BurgerChoice
function Card() {
  return (
    <div className="flex items-center justify-center place-content-center h-screen bg-[#F2EAE2] md:min-w-3xl">
      <div className=" max-w-[350px] md:max-w-[600px] md:flex">
        <img
          src="./src/images/image-product-mobile.jpg"
          alt="Image Product"
          className="md:hidden rounded-t-lg"
        />
        <img
          src="./src/images/image-product-desktop.jpg"
          alt="Image Product"
          className="hidden md:flex max-w-[300px] rounded-l-lg "
        />

        <div className="bg-white p-8 rounded-b-lg sm:rounded-b-none md:rounded-r-lg">
          <div className="flex flex-col gap-6">
            <h3 className="text-xs/[120%] tracking-[5px] uppercase text-[#6C7289] montserrat-medium">
              Perfume
            </h3>
            <h1 className="text-[32px]/[100%] text-[#1C232B] fraunces-bold">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-[14px]/[160%] text-[#6C7289] montserrat-medium">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>

          <div className="py-6 text-[32px]/[100%] flex items-center gap-4">
            <p className="text-[32px]/[100%] text-[#3D8168] fraunces-bold">$149.99</p>
            <p className="text-[13px]/[120%] line-through text-[#6C7289] montserrat-medium">$169.99</p>
          </div>

          <button className='flex justify-center items-center w-full bg-[#3D8168] hover:bg-[#1A4032] px-8 py-4 rounded-lg gap-2'>
            <img src="./src/images/icon-cart.svg" alt="" className='size-[18px]'  />
            <p className='text-[14px]/[160%] text-white montserrat-medium'>Add to Cart</p></button>
        </div>
      </div>
    </div>
  );
}

export default Card;

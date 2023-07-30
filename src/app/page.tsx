import Image from "next/image";

import { CloudImage1, CloudImage2 } from "./components/CloudImage";
import Image1 from "../../public/image1.png";
import Image2 from "../../public/image2.png";
import Company1 from "../../public/company1.png";
import Company2 from "../../public/company2.png";
import Company3 from "../../public/company3.png";
import Company4 from "../../public/company4.png";
import BasicImage from "../../public/priceSquare0.png";
import BusinessImage from "../../public/priceSquare.png";
import EntrepreneurImage from "../../public/priceSquare2.png";
import { CardChecklist, CardPrice } from "./components/Card";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CloudImage1 />
      <CloudImage2 />
      <div className="absolute z-20">
        <Navbar />
        {/* section 1 */}
        <div className="px-10 md:px-16 lg:px-24">
          <div className="text-md sm:text-xl md:text-2xl flex font-extrabold justify-end px-10 sm:px-24 md:px-32 lg:px-16 xl:px-44 mt-10 sm:mt-16 lg:mt-36">
            <p className="w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] text-center bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 via-blu-400 to-purple-500">
              easiest way to manage the cash flow of your business. Everything
              can be integrated online, access it from anywhere without
              limitations.
            </p>
          </div>
          <div className="lg:ml-16 mt-10 sm:mt-16 md:mt-24 md:text-xl">
            <p className="w-64 sm:w-[40%] md:w-[50%] lg:w-[30%]">
              “effortless control, seamless access, and a direct path to
              happiness.”
            </p>
          </div>
          <Image
            src={Image1}
            width={500}
            height={500}
            alt="image section 1"
            className="mt-5 md:mt-12 w-36 sm:w-44 md:w-56 lg:w-72 xl:w-96"
          />
        </div>
        {/* section 2 */}
        <div
          className="grid mt-[100%] sm:mt-[70%] md:mt-[40%] lg:mt-[20%] lg:grid-cols-2 z-20"
          id="about"
        >
          <div className="mx-10 sm:mx-16 justify-center flex flex-col gap-16">
            <p className="uppercase text-2xl font-bold">about us</p>
            <div className="flex flex-col gap-7">
              <p className="md:text-xl">
                Founded in 2019, Grow has emerged as a leading digital company
                in business management assistant applications. Our key features
                include cash flow management, sales analysis, and seamless
                online integration and storage of sales data.
              </p>
              <p className="md:text-xl">
                With a sincere commitment to customer service, we have gained
                the trust of numerous companies in managing their sales data.
                Join us now and make Grow your preferred platform to advance
                your business. Our team is prepared to drive your company&apos;s
                success. Together, let&apos;s propel your business to the
                pinnacle of success!
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={Image2}
              width={700}
              height={700}
              alt="image section 2"
            />
          </div>
        </div>
        {/* section 3 */}
        <div className="px-10 md:px-16 lg:px-24 pb-64 z-50 ">
          <div className="sm:ml-10 md:ml-24 lg:ml-16 xl:ml-32 2xl:ml-44 mt-[200px] sm:mt-[160px] md:mt-[130px] lg:mt-[200px] xl:mt-[270px] grid grid-cols-2  md:grid-cols-5 gap-5 items-center">
            <Image
              src={Company1}
              width={150}
              height={150}
              objectFit="fit"
              alt="company 1"
              className="md:col-start-2"
            />
            <Image
              src={Company2}
              width={150}
              height={150}
              objectFit="fit"
              alt="company 2"
            />
            <Image
              src={Company3}
              width={200}
              height={150}
              objectFit="fit"
              alt="company 3"
            />
            <Image
              src={Company4}
              width={230}
              height={150}
              objectFit="fit"
              alt="company 4"
            />
          </div>
          <div className="flex flex-col gap-10 mt-64" id="pricing">
            <p className="uppercase text-3xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-500 to-purple-500">
              choose your plan
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-96 sm:gap-x-5 md:gap-y-96 md:gap-x-16 lg:gap-10 xl:gap-16 px-5 mt-24">
              <CardPrice
                imageResource={BasicImage}
                title="basic"
                price={500}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <>
                    <CardChecklist description="Mencatat barang masuk" />
                    <CardChecklist description="Mencatat barang keluar" />
                    <CardChecklist description="Mencatat hasil keuntungan" />
                  </>
                }
              />
              <CardPrice
                imageResource={BusinessImage}
                title="business"
                price={750}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <>
                    <CardChecklist description="Mencatat barang masuk" />
                    <CardChecklist description="Mencatat barang keluar" />
                    <CardChecklist description="Menganalisa penjualan dengan CHART" />
                    <CardChecklist description="Support 7x24 Jam" />
                  </>
                }
              />
              <CardPrice
                imageResource={EntrepreneurImage}
                title="entrepreneur"
                price={1000}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <>
                    <CardChecklist description="Mencatat barang masuk" />
                    <CardChecklist description="Mencatat barang keluar" />
                    <CardChecklist description="Mencatat hasil keuntungan" />
                    <CardChecklist description="Support 7x24 Jam" />
                    <CardChecklist description="Export data ke Excel" />
                    <CardChecklist description="AI Prediksi Penghasilan" />
                  </>
                }
              />
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </main>
  );
}

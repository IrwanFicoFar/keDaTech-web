import Image from "next/image";
import { Logo } from "./components/Logo";
import { CloudImage1, CloudImage2, CloudImage3 } from "./components/CloudImage";

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
        <div className="px-24 pt-16 ">
          <div className="text-xl flex justify-end px-44 mt-36">
            <p className="w-[60%] text-center">
              easiest way to manage the cash flow of your business. Everything
              can be integrated online, access it from anywhere without
              limitations.
            </p>
          </div>
          <div className="ml-16 mt-36 text-xl">
            <p className="w-[30%]">
              “Type keywords relative to your project to find the illustrations
              you need”
            </p>
          </div>
          <Image
            src={Image1}
            width={500}
            height={500}
            alt="image section 1"
            className="mt-12"
          />
        </div>
        {/* section 2 */}
        <div className="grid mt-72 grid-cols-2 z-20" id="about">
          <div className="ml-32 justify-center flex flex-col gap-16">
            <p className="uppercase text-2xl font-bold">about us</p>
            <div className="flex flex-col gap-7">
              <p className="text-xl">
                Founded in 2019, Grow has emerged as a leading digital company
                in business management assistant applications. Our key features
                include cash flow management, sales analysis, and seamless
                online integration and storage of sales data.
              </p>
              <p className="text-xl">
                With a sincere commitment to customer service, we have gained
                the trust of numerous companies in managing their sales data.
                Join us now and make Grow your preferred platform to advance
                your business. Our team is prepared to drive your company&apos;s
                success. Together, let&apos;s propel your business to the
                pinnacle of success!
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={Image2}
              width={700}
              height={700}
              alt="image section 2"
            />
          </div>
        </div>
        {/* section 3 */}
        <div className="px-32 pb-44">
          <div className="mt-36 flex gap-10 justify-end">
            <Image
              src={Company1}
              width={150}
              height={150}
              objectFit="fit"
              alt="company 1"
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
              {" "}
              choose your plan
            </p>
            <div className="grid grid-cols-3 gap-10 px-32 mt-24">
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

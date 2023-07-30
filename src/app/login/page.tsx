import { ButtonForget, ButtonLoggin } from "../components/Button";
import { InputLogin } from "../components/Input";

const page = () => {
  return (
    <div
      className="ralative min-h-screen bg-cover bg-center flex justify-center"
      style={{ backgroundImage: "url('/bglogin.jpg')" }}
    >
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] bg-transparent z-10 flex items-center justify-center">
        <div className=" bg-white p-16 rounded-2xl flex flex-col gap-10 w-[90%] hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200 duration-300">
          <p className="text-3xl md:text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-500">
            Welcome
          </p>
          <div className="flex flex-col gap-5 text-blue-500 text-lg font-medium">
            <InputLogin label="Email" fill="Input your email" />
            <InputLogin label="Password" fill="Input your password" />
            <ButtonForget />
            <ButtonLoggin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
